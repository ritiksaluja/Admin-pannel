import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../assets/user-removebg-preview.png"
import "../Css files/Signin.css"

function Signin() {
    const eye = <i className="fa-solid fa-eye"></i>
    const closeeye = <i className="fa-solid fa-eye-slash"></i>

    const navigate = useNavigate()


    const [Name , setName] = useState("")
    const [Email , setEmail] = useState("")
    const [Contact , setContact] = useState("")
    const [Password , setPassword] = useState("")
    const [Cpassword , setCpassword] = useState("")

    const [NameErr , setNameErr] = useState("")
    const [EmailErr , setEmailErr] = useState("")
    const [ContactErr , setContactErr] = useState("")
    const [PasswordErr , setPasswordErr] = useState("")
    const [CpasswordErr , setCpasswordErr] = useState("")



    const [ Show1 , setShow1 ] = useState(eye)
    const [ Show , setShow ] = useState(eye)
    const [Type , setType] = useState("password")
    const [Type1 , setType1] = useState("password")
   


   
    const nameregex = /^[A-Za-z]{3,20}$/
    const phoneregex = /^[0-9]{10}$/
    const Emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const passregex = /^[A-Za-z0-9!@#$%^&*_]{3,20}$/

    function Change (){
        if(Type=="password"){
            setType("text")
            setShow(closeeye)
        }
        else{
            setType("password")
            setShow(eye)
        }

    }
    function Change1 (){
        if(Type1=="password"){
            setType1("text")
            setShow1(closeeye)
        }
        else{
            setType1("password")
            setShow1(eye)
        }

    }

    const userData = {
        userName:Name, 
        userEmail: Email , 
        contactNumber:Contact, 
        password : Password , 
        
    }

   

  
    function handlesubmit(e) {
        e.preventDefault();
      
        let isValid = true;
      
        if (Name.length === 0) {
          setNameErr("This field is required");
          isValid = false;
        } else {
          setNameErr("");
        }
        if (Email.length === 0) {
          setEmailErr("This field is required");
          isValid = false;
        } else {
          setEmailErr("");
        }
        if (Contact.length === 0) {
          setContactErr("This field is required");
          isValid = false;
        } else {
          setContactErr("");
        }
        if (Password.length === 0) {
          setPasswordErr("This field is required");
          isValid = false;
        } else {
          setPasswordErr("");
        }
        if (Cpassword.length === 0) {
          setCpasswordErr("This field is required");
          isValid = false;
        } else {
          setCpasswordErr("");
        }
      
        if (isValid) {
          if (Password !== Cpassword) {
            setCpasswordErr("Password does not match");
            return;
          }
      
          if (!Name.match(nameregex)) {
            setNameErr("Invalid name");
            return;
          }
      
          if (!Email.match(Emailregex)) {
            setEmailErr("Invalid email");
            return;
          }
      
          if (!Contact.match(phoneregex)) {
            setContactErr("Invalid contact number");
            return;
          }
      
          if (!Password.match(passregex)) {
            setPasswordErr("Invalid password");
            return;
          }
      
         
        //   console.log(userData);
          axios.post("http://localhost:3000/auth/signup" ,userData).then((res)=>{
            console.log(res)
            alert("user Created")
            navigate("/Login")
            
          }).catch((err)=>{
            console.log(err)
            alert("invalid data")
            
          })
          
        }
      }
      
  return (
    <div className='signinpage'>
    <div className='signinform'>

    <img src={img} alt="" />
        <h2>Signin</h2>
        <form onSubmit={handlesubmit} >


            <input type="text" placeholder='Enter Your name '
            value={Name} onChange={(e)=>{setName(e.target.value)}} />
            <p>{NameErr}</p>

            <input type="text" placeholder='Enter your Email ' 
             value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <p>{EmailErr}</p>

            <input type="text" placeholder='Enter your Contact Number'
             value={Contact} onChange={(e)=>{setContact(e.target.value)}} />
            <p>{ContactErr}</p>

            <input type={Type}  placeholder='Enter Your Password '
             value={Password} onChange={(e)=>{setPassword(e.target.value)}}/>
            <span onClick={Change}>{Show}</span>
            <p>{PasswordErr}</p>

            <input type={Type1}  placeholder='Confirm Your Password '
             value={Cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
            <span onClick={Change1}>{Show1}</span>
            <p>{CpasswordErr}</p>

            <button type='submit'>Register</button>
        </form>
    </div>
    
    </div>
  )
}

export default Signin