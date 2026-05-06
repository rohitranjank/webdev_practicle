import React, { useEffect, useState } from 'react'

const Fetch = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
  return (
    <>
    {user.map(user =>(
        <div key={user.id}>
            <h3>{user.name}</h3> 
            <p>{user.website}</p>
        </div>
    ))}
    </>
  )
}

export default Fetch