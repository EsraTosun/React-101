export function topla(a,b) {
    return a+b;
}

const topla2 = function topla(a,b) {
    return a+b;
}

const topla3 = (a,b) => {
    return a+b;
}

const topla4 = (a,b) => a+b;

const hello = () => {
    console.log("Hello");
};

export const helloAd = name => {
    console.log("Hello ",+ name);  //Bu şekilde kullanınca değişken null oluyor.
    console.log(`hello ${name}`);  
    //Bu işaret altgr+, tuşu ile oluşuyor.
};

export default hello  

export const text = "Text";  //String ifade dışarı aktarır

export const user = {
    name: "Esra",
    surname: "Tosun",
}  //Objeyi dışarı aktarıyoruz

export const users = [{
    name: "Ahmet",
    surname: "Tarık"
}, {
    name: "Tayfun",
    surname: "Erbiten"
} ]


/* export {
    hello,
    topla,
}  */ 
//Yukarıdkai şekillerde de export edilebilir

//Fonksiyonu import etmek için ilk önce export etmek zorundayız
//Yukarıda birden fazla fonsiyon tanımlama şekli gösterilmiştir.