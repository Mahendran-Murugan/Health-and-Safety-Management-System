import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/user.css'

export const User = () => {

  useEffect(()=>{
    axios.get('http://localhost:3001/user-details')
        .then((res)=>{
            setUserList(res.data)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
  },[])

  const [userlist, setUserList] = useState([])

  return (
    <div className='user-container'>
      {userlist.map(x=>(
        <div className='single-user'>
        <img className="image-user" alt="user profile" src={x.image}/>
        <h4>Name:{x.name}</h4>
        <h4>Age:{x.age}</h4>
        <h4>Disease:{x.disease}</h4>
        <h4>Stage:{x.stage}</h4>
      </div>
      ))}
        
    </div>
  )
}
