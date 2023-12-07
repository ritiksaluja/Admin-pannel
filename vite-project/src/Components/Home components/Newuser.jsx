import React, { useState } from 'react'
import "../../Css files/Newuser.css"
import img from "../../assets/Images/dummy.jpg"
import axios from 'axios'
import swal from 'sweetalert'

function Newuser() {

    const [Name , setName] = useState("")
    const [Email , setEmail] = useState("")
    const [Dob , setDob] = useState("")
    const [Doj , setDoj] = useState("")
    const [Country , setCountry] = useState("")
    const [previewUrl, setPreviewUrl] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    

    const [NameErr , setNameErr] = useState("")
    const [FileErr , setFileErr] = useState("")
    const [EmailErr , setEmailErr] = useState("")
    const [DobErr , setDobErr] = useState("")
    const [DojErr , setDojErr] = useState("")
    const [CountryErr , setCountryErr] = useState("")

    
    const phoneregex = /^[0-9]{10}$/
    const nameregex = /^[A-Za-z]{3,20}$/
    const passregex = /^[A-Za-z0-9!@#$%^&*_]{3,20}$/
    const Emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    let token = sessionStorage.getItem("authtoken")
    

  

    const newuserdata = new FormData();
    newuserdata.append("employeName" , Name )
    newuserdata.append("employeEmail" , Email )
    newuserdata.append("employeDob" , Dob )
    newuserdata.append("employeCountry" ,  Country)
    newuserdata.append("joiningDate" , Doj )
    newuserdata.append("image" , selectedFile )

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewUrl(imageUrl);
          }
      };

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
        if (Dob.length === 0) {
          setDobErr("This field is required");
          isValid = false;
        } else {
          setDobErr("");
        }
        if (Doj.length === 0) {
          setDojErr("This field is required");
          isValid = false;
        } else {
          setDojErr("");
        }
        if (Country.length === 0) {
          setCountryErr("This field is required");
          isValid = false;
        } else {
          setCountryErr("");
        }

        if (!selectedFile) {
            setFileErr('Please select a file'); 
          } else {
            setFileErr(''); 
          }
      
        if (isValid) {
         
      
          if (!Name.match(nameregex)) {
            setNameErr("Invalid name");
            return;
          }
      
          if (!Email.match(Emailregex)) {
            setEmailErr("Invalid email");
            return;
          }
      
         
          if (!Country.match(nameregex)) {
            setCountryErr("Invalid country");
            return;
          }

          if(!previewUrl===""){
            setFileErr('Please select a file'); 
            return;

          }
      
         

          if (selectedFile)
          {
            console.log(newuserdata)
            axios.post("http://localhost:3000/employe/add" , newuserdata , {
              headers: {
                "Content-Type" : "multipart/form-data" ,
                "Authorization" : token
              }
            }).then((res)=>{
              swal("User Created Sucessfully");
              setName("")
              setCountry("")
              setDob("")
              setDoj("")
              setEmail("")
              setSelectedFile("")
            })
            .catch((err)=>{
              console.log(err)
            })

          }
        
          
        }
      }

  return (
    <div className='newemploye'>
        <form action="" onSubmit={handlesubmit} encType="multipart/form-data">
           {selectedFile ? <img src={previewUrl} alt="Preview" /> : <img src={img} alt="Preview" /> }
          
           <input type="text" placeholder='Enter Your name '
            value={Name} onChange={(e)=>{setName(e.target.value)}} />
            <p>{NameErr}</p>

            <input type="text" placeholder='Enter your Email ' 
             value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <p>{EmailErr}</p>

           
           
           

            <input type="text"  placeholder=' Enter Your Country Name '
             value={Country} onChange={(e)=>{setCountry(e.target.value)}}/>
            <p>{CountryErr}</p>

            <div className='date'>

           <input type="date" id="Dob" placeholder='Enter your Dob Number'
             value={Dob} onChange={(e)=>{setDob(e.target.value)}} />
              <label htmlFor="Dob">DOB</label>
            <p>{DobErr}</p>

            </div>


            <div className='date'>
            <input type="date"  id="Doj" placeholder='Enter Your Doj '
             value={Doj} onChange={(e)=>{setDoj(e.target.value)}}/>
              <label htmlFor="Doj">DOJ</label>
            <p>{DojErr}</p>
           </div>

            
            <input type="file" accept="image/*" id="file-input" className="stylefileinput" onChange={handleFileUpload}  />

             <label htmlFor="file-input" className="choosebutton"> Choose a file </label>
             <p>{FileErr}</p>

            <button type='submit'>Add User</button>
         
        </form>
    </div>
  )
}

export default Newuser