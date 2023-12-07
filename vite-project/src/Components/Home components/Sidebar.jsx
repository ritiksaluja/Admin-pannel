import React, { useState } from 'react'
import "../../Css files/Sidebar.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Handlesidebarindex} from '../../Redux/Reducers/Slice'
import {useSelector , useDispatch} from "react-redux"

function Sidebar() {

  

  const Dispatch = useDispatch()
  const data = useSelector((state)=>{ return state.data})
  // console.log(data)
  
  const navigate = useNavigate()


  
  const [ Selectedlist , setSelectedlist] = useState(data.index)
  const notify = () => toast("Welcome Home");

  function handlelist (i){
    
     notify()
     Dispatch(Handlesidebarindex(i))
     navigate(Navigation[i])

     
  }



  let listarray = ["Employes List" , "Login" , "new user" , "Signin","Edit User", "Employes List" , "Login" , "new user" , "Signin" , "Employes List" , "Login" , "new user" , "Signin" , "Employes List" , "Login" , "new user" , "Signin"]

   let Navigation = ["/Home" , "/Login" , "/Home/Newuser" , "/Signin" ,"/Home/Edituser" ,"/Home" , "/Login" , "/Home/Newuser" , "/Signin" , "/Home" , "/Login" , "/Home/Newuser" , "/Signin" , "/Home" , "/Login" , "/Home/Newuser" , "/Signin"]


  return (
    <div className='aside'>
        <ul>
            {listarray.map(( value ,index )=>{
               const isSelected = index === Selectedlist;
              return(
                <>
                <li className={Selectedlist==index?"hover":""} key={index} 
                  onClick={()=>
                  { 
                     setSelectedlist(index);
                       handlelist(index)
                  }
                  }>
                  {value}
                  </li>
                <ToastContainer />
                </>
              )
            })}
        </ul>
    </div>
  )
}

export default Sidebar