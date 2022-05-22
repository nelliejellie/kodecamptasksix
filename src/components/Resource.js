import React from 'react'

const Resource = ({user}) => {
  return (
    <div className='bg-gray-2 h-[100%] p-8 sm:w-[100%] sm:h-[150vh]'>
        <div className='bg-white h-[98%] rounded-lg shadow-lg p-4'>
            <div className='ml-8'>
              <h1 className='text-2xl font-bold capitalize'>profile</h1>
              <p className='text-sm capitalize'>personal details</p>
            </div>
            <div className='w-[100%] flex justify-center'>
              <img src={user.photoURL} className='p-3 bg-gray-1 rounded-full' alt="" />
            </div>
            <div className='ml-8 mt-4 flex justify-between flex-wrap sm:flex-col'>
              <div className='border w-[49%] p-3 mb-2 sm:w-[90%]'>
                <p className='text-sm'>full name</p>
                <p className='text-xl font-bold'>{user.displayName ? user.displayName : ''}</p>
              </div>
              <div className='border w-[49%] p-3 mb-2 sm:w-[90%]'>
                <p className='text-sm'>email address</p>
                <p className='text-xl font-bold sm:text-sm'>{user.email}</p>
              </div>
              <div className='border w-[49%] p-3 mb-2 sm:w-[90%]'>
                <p className='text-sm'>phone number</p>
                <p className='text-xl font-bold'>{user.phoneNumber ? user.phoneNumber : 'XXX-XXX-XXX'}</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Resource