import React from 'react'
import Nav from '../Components/Home components/Nav'
import Sidebar from '../Components/Home components/Sidebar'
import "../Css files/Home.css"
import Edituser from '../Components/Home components/Edituser'
import Login from "../Pages/Login"

function Homeedituser() {

  let validatetoken = sessionStorage.getItem("authtoken")

  if(validatetoken){
  return (
   
    <div className="home">

      <div className="navigation"><Nav/></div>
      

       <div className="changelists">
       <Sidebar/>
       <Edituser/>
       
     </div>
          </div>

            
  )}
  else{
    return(<Login/>)
    
  }
}

export default Homeedituser