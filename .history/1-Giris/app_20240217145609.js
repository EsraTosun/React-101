import axios from "axios";

export async function getUsersData(number){
    const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + number
        );

    console.log(users);
};

export async function getPostData(number){
    const { data: post1 } = await axios(
        "https://jsonplaceholder.typicode.com/posts/" + number
        );

    console.log(post1);
};

