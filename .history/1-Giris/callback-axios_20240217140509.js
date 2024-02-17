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

const getComments = (number) => {
    return new Promise((resolve, reject) => {
        if(number == 1){
            resolve({ text: "Selam"});
        } 

        reject("Bir problem var!");
    });
};

getComments(1)
.then((data) => console.log(data))
.catch(e => console.log(e));