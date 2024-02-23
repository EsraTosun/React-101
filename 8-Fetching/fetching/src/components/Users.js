import { useEffect, useState } from 'react'
import axios from 'axios'

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => {
    //         setUsers(data)
    //         setIsloading(false)
    //     })
    //     .catch(e => console.log(e))
    //     .finally(() => setIsloading(false))
    // }, []);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data)
            setIsloading(false)
        })
        .catch(e => console.log(e))
        .finally(() => setIsloading(false))
    }, []);

  return (
    <div>
        <h1>Users</h1>
            { isLoading && <div> Loading...</div>  }

            {users.map((user) => (
                <div key={user.id}> {user.name} </div>
            ))}
    </div>
  )
}

export default Users