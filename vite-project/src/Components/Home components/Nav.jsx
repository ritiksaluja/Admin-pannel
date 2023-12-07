import React from 'react'
import img from "../../assets/Images/as1.png"
import img1 from "../../assets/user-removebg-preview.png"
import "../../Css files/Nav.css"
import swal from "sweetalert"
import { useNavigate } from 'react-router-dom'


function Nav() {

  const navigate = useNavigate()
  

  function Handlelogout(){

    swal("Are you sure you want to do this?", {
      buttons: {Yes:"Yes", No:"NO"},
    }).then((res) => {
      
     if(res==="Yes"){
      sessionStorage.removeItem("authtoken")
      navigate("/Login")
     }
     else{
      swal("Thanks for confirmation");
     }
    });   
  }

  return (
    <div>
        <nav className='navbar'>
            <img src={img} alt="" />

            <div className='subnav'>
                <img src={img1} alt="" />
                <p onClick={()=>{ Handlelogout()}}> Logout</p>
               
                
            </div>
         
        </nav>
    </div>
  )
}

export default Nav