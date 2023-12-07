import './App.css'
import Login from './Pages/Login'
import {BrowserRouter , Routes , Route } from "react-router-dom"
import Signin from './Pages/Signin'
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store'
import Protected from './Pages/Protected'
import HomeNewuser from './Pages/HomeNewuser'
import Homeedituser from './Pages/Homeedituser'
function App() {


  return (
    <>
    <Provider store={Store}>
    <BrowserRouter>
    <Routes>
      
       <Route path='/Home' element={<Protected/>}></Route>
       <Route path='Home/NewUser' element={<HomeNewuser/>}/>
       <Route path='Home/EditUser' element={<Homeedituser/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Signin' element={<Signin/>}/>
  
  </Routes>
    </BrowserRouter>

    </Provider>
    
    </>
  )
}

export default App
