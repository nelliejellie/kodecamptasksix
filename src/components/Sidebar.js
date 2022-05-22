import React, {useState} from 'react'
import {CgMenuGridR} from 'react-icons/cg'
import {SiGoogleclassroom} from 'react-icons/si'
import {SiBookstack} from 'react-icons/si'
import {CgProfile} from 'react-icons/cg'
import '../styles/sidebar.css'

const Sidebar = ({dashboard,classx, resource}) => {
  const [activeDash, setActiveDash] = useState(true)
  const [activeClass, setActiveClass] = useState(false)
  const [activeResource, setActiveResource] = useState(false)
  const [activeDetails, setActiveDetails] = useState(false)
  const setDashboard = () => {
    dashboard(true)
    classx(false)
    resource(false)
    setActiveDash(true)
    setActiveClass(false)
    setActiveResource(false)
  }
  const setClass = () =>{
    classx(true)
    dashboard(false)
    resource(false)
    setActiveDash(false)
    setActiveClass(true)
    setActiveResource(false)
  }
  const setResource = () =>{
    classx(false)
    dashboard(false)
    resource(true)
    setActiveDash(false)
    setActiveClass(false)
    setActiveResource(true)
  }
  return (
    <div className='bg-gradient-to-r from-blue-400 to-lime-300 sidebar-container'>
        <div className='my-8 mx-4 flex flex-col items-end'>
            <div className={activeDash ? `bg-black text-white rounded-tl-full rounded-bl-full flex justify-between capitalize w-[60%] text-left my-8 py-4 cursor-pointer`: `cursor-pointer flex justify-between capitalize w-[50%] text-left my-8`} onClick={setDashboard}>
                <CgMenuGridR className='mx-4 text-3xl'/>
                <p className={activeDash ? `mx-4`: ``}>dashboard</p>
            </div>
            <div className={activeClass ? `bg-black text-white rounded-tl-full rounded-bl-full flex justify-between capitalize w-[60%] text-left my-8 py-4 cursor-pointer`: `cursor-pointer flex justify-between capitalize w-[50%] text-left my-8`} onClick={setClass}>
                <SiGoogleclassroom className='mx-4 text-2xl'/>
                <p className={activeClass ? `mx-4`: ``}>classes</p>
            </div>
            <div className={activeResource ? `bg-black text-white rounded-tl-full rounded-bl-full flex justify-between capitalize w-[60%] text-left my-8 py-4 cursor-pointer`: `cursor-pointer flex justify-between capitalize w-[50%] text-left my-8`} onClick={setResource}>
                <CgProfile className='mx-4 text-3xl'/>
                <p className={activeResource ? `mx-4`: ``}>profile</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar