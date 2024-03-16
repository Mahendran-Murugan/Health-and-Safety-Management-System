import axios from 'axios'
import React, { useEffect, useState } from 'react'
import img from '../assets/aboutImg.png'
import '../styles/admin.css'

export const Admin = () => {

    useEffect(()=>{
        axios.get('http://localhost:3001/user-details')
        .then((res)=>{
            setPost(res.data)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
    })

    const handleSubmit = (e) =>{
        axios.post('http://localhost:3001/user-details',{
            "id":id,
            "name":name,
            "age":age,
            'disease':disease,
            'stage':stage,
            'image':image,
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
        e.preventDefault()
    }


    const popUpStatus = (x) => {
        setPopUp(true)
        setnewId(x.id)
        setnewName(x.name)
        setnewAge(x.age)
    }

    const updateData = () =>{
        axios.put(`http://localhost:3001/user-details/${newid}`,{
            'id': newid,
            'name': newname,
            'age': newage,
            'disease':newdisease,
            'stage':newstage,
            'image':newimage,
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((res)=>{
            console.log("Error"+res)
        }) 
    }

    const deleteData = (id) =>{
        axios.delete(`http://localhost:3001/user-details/${id}`)
        .then((res)=>{
            console.log(res)
        })
        .catch((res)=>{
            console.log("Error"+res)
        })
    }
    const [post, setPost] = useState([{}])
    const [id, setId] = useState(null)
    const [name, setName] = useState("")
    const [age, setAge] = useState(null)
    const [disease, setDisease] = useState("")
    const [stage, setStage] = useState("")
    const [image, setImage] = useState("")
    const [popUp, setPopUp] = useState(false)
    const [newid, setnewId] = useState(0)
    const [newage, setnewAge] = useState(0)
    const [newname, setnewName] = useState("")
    const [newdisease, setnewDisease] = useState("")
    const [newstage, setnewStage] = useState("")
    const [newimage, setnewImage] = useState("")
    
  return (
    <div className='admin-container'>
      <div className='admin-form-container'>
      <form onSubmit={handleSubmit} className='admin-form'>
            <input type='number' value = {id} placeholder="Id" onChange={(e)=>{setId(e.target.value)}}/><br/>
            <input type='text' value = {name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/><br/>
            <input type='number' value = {age} placeholder="Age" onChange={(e)=>{setAge(e.target.value)}}/><br/>
            <input type='text' value = {disease} placeholder="Disease" onChange={(e)=>{setDisease(e.target.value)}}/><br/>
            <input type='text' value = {stage} placeholder="Stage" onChange={(e)=>{setStage(e.target.value)}}/><br/>
            <input type='text' value = {image} placeholder="Image" onChange={(e)=>{setImage(e.target.value)}}/><br/>
            <button type='submit' className='subButton'>Submit</button>
        </form>
      </div>
      <div className='table-container'>
        <table className='user-list-table'>
            <thead className='table-headings'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Disease</th>
                    <th>Stage</th>
                    <th>Image</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                {post.map(x=>(
                    <tr>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.disease}</td>
                    <td>{x.stage}</td>
                    <td><img alt='user-img' className="admin-user-img" src = {img}/></td>
                    <td>
                        <button onClick={()=>{
                            popUpStatus(x)
                        }}>Update</button>
                        <button onClick={()=>deleteData(x.id)}>Delete</button>
                    </td>
                    </tr>
                ))}
            
            </tbody>
        </table>
    </div>
        {popUp && 
            <form onSubmit={updateData} className='admin-form'>
                <button onClick={()=>{setPopUp(false)}}>X</button><br/>
                <input type='number' value = {newid} placeholder='Id' onChange={(e)=>{setnewId(e.target.value)}}/><br/>
                <input type='text' value = {newname} placeholder='Name' onChange={(e)=>{setnewName(e.target.value)}}/><br/>
                <input type='number' value = {newage} placeholder='Age' onChange={(e)=>{setnewAge(e.target.value)}}/><br/>
                <input type='text' value = {newdisease} placeholder="Disease" onChange={(e)=>{setnewDisease(e.target.value)}}/><br/>
                <input type='text' value = {newstage} placeholder="Stage" onChange={(e)=>{setnewStage(e.target.value)}}/><br/>    
                <input type='text' value = {newimage} placeholder="Image" onChange={(e)=>{setnewImage(e.target.value)}}/><br/>    
                <button type='submit' className='subButton'>Submit</button>
            </form>
        }
    </div>
  )
}
