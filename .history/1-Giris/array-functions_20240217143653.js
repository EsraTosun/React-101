const users = ["Mehmet","Ahmet","Murat"];
const usersObject = [{
    name: "Mehmet",
    surname: "Çalışkan",
    age: 18
},{
    name: "Zehra",
    surname: "Demir",
    age: 29
}];

/*
    push    => Arrayin sonuna eleman eklemek
    map     => Arrayin içinde dönmemizi sağlar.
    find    => Arrayin içinde verdiğimiz koşullar ile arama yapar
    filter  => Filtreleme yapars
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
// const result = usersObject.find((item) => item.name == "Mehmet" && item.age > 20);
// console.log(result);


//FILTER
const filtered = usersObject.filter(
    (item) => item.name == "Mehmet" && item.age < 20
);
console.log(filtered);