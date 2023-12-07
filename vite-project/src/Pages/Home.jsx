import React from 'react'
import Nav from '../Components/Home components/Nav'
import Sidebar from '../Components/Home components/Sidebar'
import List1 from "../Components/Home components/List1"
import "../Css files/Home.css"



function Home() {
  return (
    <div className="home">

      <div className="navigation"><Nav/></div>
      

      <div className="changelists">

       <Sidebar/>
       <List1/>
      </div>
      
    </div>
  )
}

export default Home