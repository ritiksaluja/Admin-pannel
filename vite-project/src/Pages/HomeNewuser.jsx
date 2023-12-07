import React from 'react'
import Nav from '../Components/Home components/Nav'
import Sidebar from '../Components/Home components/Sidebar'
import "../Css files/Home.css"
import Newuser from '../Components/Home components/Newuser'
import Login from "../Pages/Login"

function HomeNewuser() {
  let validatetoken = sessionStorage.getItem("authtoken")
if(validatetoken){
  return (
    <div className="home">

      <div className="navigation"><Nav/></div>
      

       <div className="changelists">
       <Sidebar/>
       <Newuser/>
     </div>
          </div>
  )
}
else{
  return(
  <Login/>)
}
}

export default HomeNewuser



