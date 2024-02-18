import PropTypes from "prop-types"

function User({name ,surname, age, isLoggedIn,friends, adress}) {
    console.log(isLoggedIn);
    if(!isLoggedIn) {
      return <div>"Giriş Yapmadınız"</div>
    }
    return (
       <>
       <h1>{
          isLoggedIn ? `${name} ${surname} ${age}` : "Giriş Yapmadınız!"
       }</h1>
       {adress.title} {adress.zip}
       <br/>
       <br/>
       {
         friends &&  //Friends varsa göster
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
User.propTypes = {
   name: PropTypes.string.isRequired,   //Zorunlu olarak işaretler
   surname: PropTypes.string,
   isLoggedIn: PropTypes.bool,
   age: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
   //Birden fazla veri tipini kabel etmek için kullanılır
   friends: PropTypes.array,
   adress: PropTypes.shape({
      title: PropTypes.string,
      zip: PropTypes.number
   })
};

//Herhangi bir tanım yapılmayan propsa varsayılan bir değer verilir.
User.defaultProps = {
   isLoggedIn: false,
   name: "isimisz"
}

export default User;


/* 
   friends.map((friend , index) => (
            <div key={index}>
               {index} - {friend.name}
            </div>
          ))
*/