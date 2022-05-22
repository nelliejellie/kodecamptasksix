import React from 'react'
import Course from './Course'
import { Link } from "react-router-dom";
import {AiOutlineSortAscending,AiOutlineTool, AiOutlineTable, AiOutlinePlusCircle, AiOutlineBold} from "react-icons/ai"

const Class = ({courses, dashboard, classx, resource, details}) => {
  
  const iconArray = [
    {
      name: "English Language",
      component:<AiOutlineSortAscending className='text-3xl text-black p-2 rounded-full bg-white'/>,
      color:"bg-primary"
    },
    {
      name:"Physics",
      component:<AiOutlineTool className='text-3xl text-black p-2 rounded-full bg-white'/>,
      color:"bg-secondary"
    },
    {
      name:"chemistry",
      component: <AiOutlineTable className='text-3xl text-black p-2 rounded-full bg-white'/>,
      color: "bg-warning"
    },
    {
      name:"Mathematics",
      component:<AiOutlinePlusCircle className='text-3xl text-black p-2 rounded-full bg-white'/>,
      color:"bg-yellow"
    },
    {
      name:"Biology",
      component :<AiOutlineBold className='text-3xl text-black p-2 rounded-full bg-white'/>,
      color: "bg-light-green-1"
    }
  ]
  return (
    <div className='bg-gray-2 h-[100%] p-8  sm:w-[100%] sm:h-[150vh]'>
        
        <div className='bg-white h-[98%] rounded-lg shadow-lg p-4 grid grid-rows-2 grid-flow-col gap-2 sm:flex sm:flex-col sm:items-center sm:w-[100%]'>
            {
              courses.map(c => <Course key={c.id} course={c} iconArray={iconArray} dashboard={dashboard} classx={classx} resource={resource} details={details}/>)
            }
        </div>
    </div>
  )
}

export default Class