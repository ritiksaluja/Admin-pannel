import React, { useEffect } from 'react'
import Home from './Home'
import Signin from './Signin'

function Protected() {
   

   
    let validatetoken = sessionStorage.getItem("authtoken")

   
  return (
    <div>
       {validatetoken?<Home/>:<Signin/>}
    </div>
  )
  }

export default Protected