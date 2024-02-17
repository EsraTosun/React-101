import axios from "axios";

//ANONİM FONKSİYON
(async () => {
    const users = await axios("https://jsonplaceholder.typicode.com/users");

    const post1 = await axios("https://jsonplaceholder.typicode.com/posts/1");

    const post2 = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log(users);
    console.log(post1);
    console.log(post2);
});
