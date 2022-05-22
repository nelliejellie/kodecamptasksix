import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'
import {CgMenuGridR} from 'react-icons/cg'
import {SiGoogleclassroom} from 'react-icons/si'
import {SiBookstack} from 'react-icons/si'

const Details = ({courses, dashboard, classx, resource}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  const course = courses.find(c => c.id == id)
  
  const goToDashboard = () =>{
    return navigate("/app")
  }
  return (
    <div className='flex'>
      <div className='w-[20%] bg-gradient-to-r from-blue-400 to-lime-300 sidebar-container md:hidden'>
        <div className='my-8 mx-4 flex flex-col items-end'>
            <div className='cursor-pointer flex justify-between capitalize w-[50%] text-left my-8' onClick={goToDashboard}>
                <CgMenuGridR className='mx-4 text-3xl'/>
                <p className=''>dashboard</p>
            </div>
            <div className={true ? `bg-black text-white rounded-tl-full rounded-bl-full flex justify-between capitalize w-[60%] text-left my-8 py-4 cursor-pointer`: `cursor-pointer flex justify-between capitalize w-[50%] text-left my-8`} onClick={goToDashboard}>
                <SiGoogleclassroom className='mx-4 text-2xl'/>
                <p className={true ? `mx-4`: ``}>classes</p>
            </div>
            <div className='cursor-pointer flex justify-between capitalize w-[50%] text-left my-8' onClick={goToDashboard}>
                <SiBookstack className='mx-4 text-3xl'/>
                <p className=''>profile</p>
            </div>
        </div>
      </div>
      <div className='w-[80%] md:w-[100%] md:h-[100vh]'>
        <div className='bg-gray-2 h-[100%] p-8  sm:w-[100%] sm:h-[150vh]'>
            <div className='bg-white h-[98%] rounded-lg shadow-lg p-4 sm:flex sm:flex-col sm:items-center sm:w-[100%]'>
                <h1 className='font-extrabold text-4xl capitalize text-lime-300'>{course.name}</h1>
                <p className=''>
                    {course.details.intro}
                </p>
                <div className='mt-8'>
                    <h1 className='font-extrabold text-4xl capitalize mb-3'>branches</h1>
                    {course.details.branches.map(c => 
                        <div className='font-semibold text-2xl capitalize'>
                            <h3 className='text-blue-300'>{c}</h3>
                            <div className='text-sm'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus recusandae sapiente tenetur similique et officia nemo consectetur earum hic praesentium!
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Details