function User({name ,surname, age, isLoggedIn}) {
    console.log(isLoggedIn);
    return (
       <h1>{
          isLoggedIn ? `${name} ${surname} ${age}` : "Giriş Yapmadınız!"
       }</h1>
    );
}

export default User;