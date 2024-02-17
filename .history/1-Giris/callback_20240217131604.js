// 1. ADIM
// setTimeout(() => {
//     console.log("Merhaba");
// }, 2000) 
// 2 saniye sonra fonksiyonun içindeki işlemi gerçekleştir.


// 2. ADIM
// setInterval(() =>{
//     console.log("Merhaba ben her saniye çalışacağım");
// }, 1000)
// Durdurulmazsa 1 saniyde bir çalışacak.


// 3. ADIM
// const sayHi = (cb) => {
//     cb();
// };

// sayHi(() => {
//     console.log("Merhaba");
// })


// 4. ADIM
import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => data.json())  //API dan alınan data json formatından döndürülüyor
.then((users) => console.log(users));  //data users'a düşüyor ve oradan kullanmaya devam ediyoruz

