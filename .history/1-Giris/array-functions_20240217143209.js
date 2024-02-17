const users = ["Mehmet","Ahmet","Murat"];
const usersObject = [{
    name: "Mehmet",
    surname: "Çalışkan"
},{
    name: "Zehra",
    surname: "Demir"
}];

/*
    push    => Arrayin sonuna eleman eklemek
    map     => Arrayin içinde dönmemizi sağlar.
    find    => Arrayin içinde verdiğimiz koşullar ile arama yapar
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
// usersObject.map((item) => {
//     console.log(item.name);
// });


//FIND
const result = usersObject.find((item) => item.name == "Mehmet");
console.log(result);

