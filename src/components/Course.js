import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({course, iconArray}) => {
  const selectedIcon = iconArray.find(icon => course.name === icon.name)
  
  return (
    <Link to={`/details/${course.id}`}>
        <div className={`w-48 h-48 py-8 m-4 flex flex-col justify-around items-center ${selectedIcon.color}`}>
            <div>
                {selectedIcon.component}
            </div>
            <div className='font-semibold'>
                { course.name }
            </div>
        </div>
    </Link>
  )
}

export default Course