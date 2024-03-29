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

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())  
// //API dan alınan data json formatından döndürülüyor
// .then((users) => {
//     console.log("Users Yüklendi!",users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((data) => data.json())  
//     .then((post) => {
//         console.log("Post1 Yüklendi!",post);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//         .then((data) => data.json())  
//         .then((post) => console.log("Post2 Yüklendi!",post));
//     });
// }); 

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((data) => data.json())  
// .then((post) => console.log("Post Yüklendi!",post));
//İkisi ayrı ayro yapılsaydı asektron işlem olduğu için aynı anda çalışacakti.
//Hangisinin ilk olacağı belli olmayacaktı.

//data users'a düşüyor ve oradan kullanmaya devam ediyoruz
//Users işlemi bitttikten sonra postlar işlemine başla demek.

async function getData() {
    const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();

    const post2 = await (
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();

    console.log(users);
    console.log(post1);
    console.log(post2);
}

getData();

//async => asekron bir fonskiyon yapar.
//await => Eğer yazılmazsa işlem yapılmadan alt satıra geçeşer
//         Eğer yazılırsa işlem bitikten sonra alt satıra geçer.
//Bu yapı sayesinde işlem sıra ile gerçekleşir  
//ve bir işlem bitmeden diğerine geçilmez. 


//ANONİM FONKSİYON
// (async () => {
//     const users = await (
//         await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     const post1 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     ).json();

//     const post2 = await (
//         await fetch("https://jsonplaceholder.typicode.com/posts/2")
//     ).json();

//     console.log(users);
//     console.log(post1);
//     console.log(post2);
// })();
//Anonim fonskiyon sayesinde çağırılmadan direk çalışır fonsiyon