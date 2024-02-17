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
const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/users"
        );
        resolve(data);
    });
};

const getPost = (postID) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios(
            "https://jsonplaceholder.typicode.com/posts/" + postID
        );
        resolve(data);
    });
};

//Anonim Fonskiyon
// (async () => {
//     await getUsers()
//     .then((data) => console.log(data))
//     .catch(e => console.log(e));

//     await getPost(5)
//     .then((data) => console.log(data))
//     .catch(e => console.log(e));
// })();
//Fonskiyonların sıra ile çalışmasını sağladır.
//Eğer bu anonim fonskiyonun içerisine almazsak karışık çalışacaktı.

(async () => {
    const users = await getUsers();
    const post = await getPost(5);

    console.log(users);
    console.log(post);
})();