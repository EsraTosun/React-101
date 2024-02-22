import { useState } from 'react'

const List = ( {contacts} ) => {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key]
                .toString()
                .toLowerCase()
                //toLowerCase=> Küçük büyük harf sıkıntısı yaşamamak için
                .includes(filterText.toLocaleLowerCase())
        );
    });
    
    console.log(filtered);

    return (
        <div>
            <input 
                placeholder='Filter Contact' 
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />

            <ul className='list'>
                {filtered.map((contact,i)  => (
                    <li key={i}>{contact.fullname}</li>
                ))}
            </ul>
        </div>
    );
   
}

export default List;