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
    push        => Arrayin sonuna eleman eklemek
    map         => Arrayin içinde dönmemizi sağlar.
    find        => Arrayin içinde verdiğimiz koşullar ile arama yapar
    filter      => Filtreleme yapars
    some        => Arrayin içerisinde herhangi biri uyuyorsa true,uymuyorsa false döndürür.
    every       => Arrayin içerisinde elemanların hepsini şarta uymasını istiyor.
    includes    => Arrayin içinde geçip geçmediğini kontrol eder
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
// const filtered = usersObject.filter(
//     (item) => item.name == "Mehmet" && item.age < 20
// );
// const filtered2 = usersObject.filter(
//     ({name ,age}) => name == "Mehmet" && age < 20
// );

// console.log(filtered);
// console.log(filtered2);


//SOME
// const some = usersObject.some((item) => item.age == 18);
// console.log(some);


//EVERY
// const every = usersObject.every((item) => item.age > 5);
// console.log(every);


//INCLUDES
const meyveler = ["elma","armut","muz"];

const isIncluded = meyveler.includes("muz");
console.log(isIncluded);
