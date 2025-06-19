import './App.css'
import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'
import Start from './pages/Start';
import Home from './pages/Home';
import UserProfile from './pages/UserProfilePage'
import MyProfile from './pages/MyProfilePage';

const App = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Start/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/user-profile/:id' element={<UserProfile/>}/>
          <Route path='/my-profile' element={<MyProfile/>}/>
        </Routes>
      </div>
  )
}

export default App
