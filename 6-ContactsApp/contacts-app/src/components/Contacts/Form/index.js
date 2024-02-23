import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "",phone_number: ""};

const Form = ({ addContact, contacts }) => {
    // console.log(addContact);
    const [form,setForm] = useState(initialFormValues);

    //Eklemi işlemi yaptıktan sonra formun içini silmemizi sağlar
    useEffect(() => {
        setForm( initialFormValues );
        //Formun içini siler
    }, [contacts]);

    //Inputa değerler girilmesini sağlar
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    //Butona basıldığında çalışacak fonksiyon
    const onSubmit = (e) => {
        e.preventDefault(); //Forma basıldığında sayfanın güncellenmesini durdurur
        
        if(form.fullname === '' || form.phone_number === ''){
            //Eğer null ise işlemi gönderme 
            return false;
        }

        addContact([...contacts,form]);
        //console.log(form);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input 
                        name="fullname" 
                        placeholder='Full Name' 
                        value={form.fullname}
                        onChange={onChangeInput}
                    />
                </div>        
                <div>
                    <input 
                        name="phone_number" 
                        placeholder='Phone Number' 
                        value={form.phone_number}
                        onChange={onChangeInput}
                    />
                </div>
                <div className='btn'>
                    <button>Add</button>
                </div>
            </form>
        </div>
  );
}

export default Form