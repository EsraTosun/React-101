import axios from "axios";

export async function getData(number){
    const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + number
        );

    const { data: post1 } = await axios(
        "https://jsonplaceholder.typicode.com/posts/" + number
        );

    console.log(users);
    console.log(post1);
};



