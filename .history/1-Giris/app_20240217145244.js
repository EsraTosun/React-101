import axios from "axios";

async function getData(number){
    const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + number
        );

    console.log(users);
};