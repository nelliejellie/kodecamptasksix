import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut, } from "firebase/auth"
import {auth} from '../firebase-config'
import '../styles/navbar.css'

const Navbar = ({user, updateUser}) => {
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        updateUser(currentUser);
    });

  }, [])
  const logOut = async () => {
    await signOut(auth)
  }
  return (
    <div>
      <div className='flex justify-between bg-gradient-to-r from-blue-400 to-lime-300 text-white py-4 md:hidden sm:hidden'>
          <p className='capitalize mx-8 text-2xl'><Link to="/">classroom</Link></p>
          <div>
              <Link to="/login" className='mx-8'>About</Link>
              <Link to="/login" className='mx-8'>Courses</Link>
              <Link to="/login" className='mx-8'>Instructor</Link>
              <Link to="/login" className='mx-8'>News</Link>
              <Link to="/login" className='mx-8'>Pricing</Link>
          </div>
          {user === null && <button className='mx-8 border border-white rounded-lg px-4 py-1'><Link to="/login">sign in</Link></button>}
          {user !== null && <button className='mx-8 border border-white rounded-lg px-4 py-1'><Link to="/login" >Welcome {user.displayName}</Link></button>}
          {user !== null && <button className='mx-8 border border-white rounded-lg px-4 py-1'><Link to="/login" onClick={logOut}>sign out</Link></button>}
      </div>
      <div className='nav-mobile border border-white bg-gradient-to-r from-blue-400 to-lime-300 text-white flex justify-between items-center p-2'>
        <p className='capitalize mx-8 text-2xl font-bold'><Link to="/">classroom</Link></p>
        {user === null && <button className='mx-8 border border-white rounded-lg px-4 py-1'><Link to="/login">sign in</Link></button>}
        {user !== null && <button className='mx-8 border border-white rounded-lg px-4 py-1'><Link to="/login" onClick={logOut}>sign out</Link></button>}
      </div>
    </div>
    
  )
}

export default Navbar