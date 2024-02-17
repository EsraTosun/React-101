//İndirdiğimiz nodulu import etme
//var slugify = require('slugify');
import slugify from "slugify";
const title = slugify('some string lorem ipsum'); // some-string
console.log(title);
// ayırıcı olarak '-' dışında bir şey tercih ederseniz
const title2 = slugify('some string', '*')  // some*string
console.log(title2);  


//Kendi oluşturduğumuz modulü import etme
import hello ,{helloAd,topla,text,user,users} from "./my-Module.js";
console.log(topla(2,4));
console.log(text);
console.log(user);
console.log(users);
hello();
helloAd("Esra");


