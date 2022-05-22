import React from 'react'
import ladyreading from '../assets/images/lady-reading.png'

const Dashboard = ({dashboard, user}) => {
  console.log(user)
  return (
    <div className='bg-gray-2 h-[100%] p-8 md:h-[110vh]'>
        <div className='bg-white h-[98%] rounded-lg shadow-lg flex justify-center items-start md:h-[105vh]'>
            <div className='bg-[#FF8E58] rounded-lg w-[80%] mt-8 flex justify-between items-center md:h-[95%] md:flex-col md:justify-around'>
              <div className='w-[50%] flex flex-col justify-center items-center text-white md:w-[100%] '>
                <h1 className='mx-auto font-bold text-3xl md:text-2xl'>Welcome {user.displayName}</h1>
                <button className='text-[#FF8E58] bg-white p-4 w-40 mt-4 rounded-full'>Enroll now</button>
              </div>
              <div className='w-[50%] -translate-y-6 flex justify-end md:-translate-y-1'>
                <img src={ladyreading} className='h-96 mr-8 md:mr-2' alt=""/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard