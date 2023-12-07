import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../assets/user-removebg-preview.png"
import "../Css files/Login.css"
import axios from 'axios'
import { useEffect } from 'react'

function Login() {
    const [Name , setName] = useState("")
    const [Password , setPassword] = useState("")
    
    const [NameWarning , setNameWarning] = useState("")
    const [PassWarning , setPassWarning] = useState("")

    const [Show , setShow] = useState("password")
    const Navigate = useNavigate()

    let Openeye =  <i className="fa-solid fa-eye"></i>
    let closedeye = <i className="fa-solid fa-eye-low-vision"></i>
    const [Eye , setEye] = useState(Openeye)

    let LoginCred = {
        userEmail : Name , 
        password : Password
    }

    const navigate = useNavigate()
    

    function HandleLogin (e){
        e.preventDefault()
        if(Name==""){
            setNameWarning("This Field is required")
        }
        
      else if(Password==""){
        setPassWarning("This Field is required")
       }
       else{
     
        axios.post("http://localhost:3000/auth/login" , LoginCred).then((res)=>{
        //    console.log(res.data.token)
            const token = res.data.token
            sessionStorage.setItem("authtoken" , token)
           navigate("/Home")
        }).catch((error)=>{
            console.log(error)
            setName("")
            setPassword("")
            alert("Wrong Credentials")
            
        })
        
        

       }
    }

    function HandleShow (){
        if (Show=="password"){
            setEye(closedeye)
            setShow("text")
        }

        else{
            setEye(Openeye)
            setShow("password")
        }
    }
  return (
    <div className='loginpage'>
    
    <div className='loginform'>
        <img src={img} alt="" />
        <h2>Login</h2>
        <form action="" onSubmit={HandleLogin}>
            <input type="email" placeholder='Enter User Mail id'  value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            <p>{NameWarning}</p>
            <input type={Show} placeholder='Enter Your Password' value={Password} onChange={(e)=>{setPassword(e.target.value)}} />
            <span onClick={HandleShow}>{Eye}</span>
           
            <p>{PassWarning}</p>
            <button type='submit'>Login</button>
        </form>
              <button onClick={()=>{Navigate("/Signin")}}>Create New Account</button>
    </div>
    </div>
  )
}

export default Login