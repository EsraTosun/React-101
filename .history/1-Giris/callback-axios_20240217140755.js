//Fetch den daha kullanışlı
import axios from "axios";

async function getData(){
    const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users"
        );

    const { data: post1 } = await axios(
        "https://jsonplaceholder.typicode.com/posts/1"
        );

    const { data: post2 } = await axios(
        "https://jsonplaceholder.typicode.com/posts/2"
        );

    console.log(users);
    console.log(post1);
    console.log(post2);
};

//getData();

//1. ADIM

// const getComments = () => {
//     return new Promise((resolve, reject) => {
//         //resolve("Comments");
//         resolve({
//             text: "Selam"
//         })
//     });
// };
//resolve => Bu işlem  başarı ile gerçekleşmiş al sana data demek
//reject => Bu işelmde problem oluştu onu red ettim. 


//2. ADIM

// const getComments = (number) => {
//     return new Promise((resolve, reject) => {
//         if(number == 1){
//             resolve({ text: "Selam" });
//         } 

//         reject("Bir problem oluştu!");
//     });
// };


//3. ADIM
const getComments = (number) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/users"
        );
        resolve(data);
    });
};

getComments(1)
.then((data) => console.log(data))
.catch(e => console.log(e));