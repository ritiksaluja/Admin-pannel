import React, { useEffect, useState } from 'react'
import "../../Css files/List1.css"
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {Handlesidebarindex , editdata } from '../../Redux/Reducers/Slice'
import { useDispatch} from "react-redux"


function List1() {

    const Navigate = useNavigate()
    let users = ""
    let token = sessionStorage.getItem("authtoken")

    const Dispatch = useDispatch()
   
    
   
    
    
  

    const [EmployeData , setEmployeData] =useState([])
 
 


    axios.get("http://localhost:3000/employe/list" , { headers: { 
        "Authorization" : token
      }}).then((res)=>{
         users = res
        setEmployeData(users.data)
        // console.log(users)
       
    })
    .catch((err)=>{
          console.log(err)
    })



function Handledelete (i , v){
    swal("Are you sure to remove this user", {
        buttons: {Yes:"Yes", No:"NO"},
      }).then((res) => {
        
       if(res==="Yes"){
            

            axios.post("http://localhost:3000/employe/delete" , {"employeEmail" :v.employeEmail} ,  { headers: { 
                "Authorization" : token
              }} )

          
       }
       else{
        swal("Thanks for confirmation");
       }
      }); 
   
}

function HandleEdit (i,v){

    Dispatch(editdata(v))
    Dispatch(Handlesidebarindex(4))
    // console.log(v)
    Navigate("/home/edituser")


}

  return (
    <div className='List1'>
        <div className='newuser'>
            <button onClick={()=>{Navigate("/Home/Newuser")
              Dispatch(Handlesidebarindex(2))}}>Create New Employee</button>
        </div>
        <div className='firstul'>
            <ul>
                <li>Profile Picture</li>
                <li>Employee Name</li>
                <li>Joining Date</li>
                <li>Employee Email</li>
                <li>Actions</li>
            </ul>

            {
                EmployeData.map((Value , index)=>{
                    
                    return(
                        <ul key={index}>
                          <li> <img src={Value.image} alt="" /></li>
                          <li>{Value.employeName}</li>
                          <li>{Value.joiningDate}</li>
                          <li>{Value.employeEmail}</li>
                          <li key={index}>
                            <button onClick={()=>{HandleEdit(index , Value)}}>Edit</button>
                            <button onClick={()=>{Handledelete(index , Value)}}>Delete</button>
                           </li>
                        </ul>
                    )

                })
            }
        </div>
        
        <div className='employes'>
           
        </div>

    </div>
  )
}

export default List1