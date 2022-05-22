import React, {useState, useEffect} from 'react'
import course from '../../db';
import {CgMenuGridR} from 'react-icons/cg'
import {SiGoogleclassroom} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
import Details from '../../components/Details';
import Sidebar from '../../components/Sidebar'
import Dashboard from '../../components/Dashboard';
import Class from '../../components/Class'
import Resource from '../../components/Resource'
import {auth} from '../../firebase-config'
import '../../styles/appp.css'
import {signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth"



const Appp = ({user, updateUser}) => {
  console.log(course)
  console.log(user)
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        updateUser(currentUser);
    });

  }, [])
  console.log(user)
  const [dashboard, setDashboard] = useState(true)
  const [classx, setClassx] = useState(false)
  const [resource, setResource] = useState(false)
  const [details, setDetails] = useState(false)

  const handleDashBoard = () =>{
    setDashboard(true)
    setClassx(false)
    setResource(false)
  }
  const handleClasses = () =>{
    setDashboard(false)
    setClassx(true)
    setResource(false)
  }
  const handleResource = () =>{
    setDashboard(false)
    setClassx(false)
    setResource(true)
  }
  return (
    <div className='flex bg-gray-3 md:relative'>
      <div className='bg-gradient-to-r from-blue-400 to-lime-300 w-[20%] lg:hidden'>
          <Sidebar dashboard={setDashboard} classx={setClassx} resource={setResource} details={details}/>
      </div>
      <div className='w-[80%] lg:w-[100%] md:w-[100%] md:h-[100vh]'>
        {dashboard && <Dashboard user={user}/>}
        {classx && <Class courses={course} dashboard={setDashboard} classx={setClassx} resource={setResource} details={details}/>}
        {resource && <Resource user={user}/>}
      </div>
      <div className='downbar bg-gradient-to-r from-blue-400 to-lime-300 h-[10vh] w-[100%] fixed bottom-0 left-0 right-0 flex justify-between items-center text-white'>
        <div className='mx-4 text-xl capitalize flex flex-col items-center' onClick={handleDashBoard}> <CgMenuGridR/> dashboard</div>
        <div className='mx-4  text-xl capitalize flex flex-col items-center' onClick={handleClasses}> <SiGoogleclassroom/> classes</div>
        <div className='mx-4  text-xl capitalize flex flex-col items-center' onClick={handleResource}> <CgProfile/> profile</div>
      </div>
    </div>
  )
}

export default Appp