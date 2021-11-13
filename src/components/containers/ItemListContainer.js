import { useState, useEffect } from "react"
import ItemCount from "./ItemCount"


const ItemListContainer = ({greeting}) => {
      const [users, setUsers] = useState([])
    console.log(users)

    const getUsers = async() =>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const dataUsers = data.json()
        setUsers(dataUsers)
    }
    
    useEffect(() =>{
        setTimeout(() => getUsers(), 2000)
    },[])

    return  (
        <div>
        <h2>{greeting}</h2>
        <ItemCount stock={8} initial={1}/>
        <ItemList users = { users } />
        </div>
    )
    
}

export default ItemListContainer
