import { useState,useEffect } from 'react'
//useEffect sayesinde yaşam döngüsündeki eventleri yakalayabiliriz


const Counter = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Esra");

    useEffect(() => {
        console.log('Componen mount edildi!')
        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000);  //Her saniye number değerini arttırır.

        //return () => console.log("Componet unmout edildi!");
        return () => clearInterval(interval);
        //Asekron işlemi durdurmamıza sağlar
    }, []);
    
    useEffect(() => {
    console.log("State Güncellendi")
    });
    //Herhangi bir state güncellenmesi olduğunda çalışır

    useEffect(() => {
    console.log("Number State Güncellendi")
    }, [number]);
    //Number state'i güncellenmesi olduğunda çalışır

    useEffect(() => {
    console.log("Name State Güncellendi")
    }, [name]);
    //Name state'i güncellenmesi olduğunda çalışır

    useEffect(() => {
    console.log("Number veya Name State Güncellendi")
    }, [number,name]);
    //Number veya name state'i güncellenmesi olduğunda çalışır

  return (
    <div>
        <h1>{number}</h1>
        <button onClick={() => setNumber(number + 1)}>Click</button>

        <hr/>

        <h1>{name}</h1>
        <button onClick={() => setName('Mete')}>Click</button>
  </div>
  )
}

export default Counter