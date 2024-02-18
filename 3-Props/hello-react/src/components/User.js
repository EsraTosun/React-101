import PropTypes from "prop-types"

function User({name ,surname, age, isLoggedIn,friends}) {
    console.log(isLoggedIn);
    return (
       <>
       <h1>{
          isLoggedIn ? `${name} ${surname} ${age}` : "Giriş Yapmadınız!"
       }</h1>
       {
          friends.map((friend) => (
            <div key={friend.id}>
               {friend.id} - {friend.name}
            </div>
          ))
       }
       </>
       
    );
}

//Gönderdiğimiz componentleri hangi veri tipi kabul ettiğimizi belirtmemiz gerekiyor
User.PropTypes = {
   name: PropTypes.string,
   surname: PropTypes.string,
   isLoggedIn: PropTypes.bool,
   age: PropTypes.number,
   friends: PropTypes.array
}

export default User;


/* 
   friends.map((friend , index) => (
            <div key={index}>
               {index} - {friend.name}
            </div>
          ))
*/