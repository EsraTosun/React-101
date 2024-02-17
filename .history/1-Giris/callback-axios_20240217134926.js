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

getData();