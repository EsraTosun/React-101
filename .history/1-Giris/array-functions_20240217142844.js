const users = ["Mehmet","Ahmet","Murat"];
const usersObject = [{
    name: "Mehmet"
},{
    name: "Zehra"
}];

/*
    push    => Arrayin sonuna eleman eklemek
    map     => Arrayin içinde dönmemizi sağlar.
    find
    filter
    some
    every
    includes
*/

//PUSH
// users.push("Ayşe");
// users.push("Fatma");
// console.log(users);

//MAP
users.map((item) => {
    console.log(item);
});

