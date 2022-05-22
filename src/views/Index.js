import React, {useEffect} from 'react'
import '../styles/index.css'
import female from '../assets/images/femalestudent.jpg'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../firebase-config'

const Index = ({user,updateUser}) => {
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            updateUser(currentUser);
        });
    
      }, [])
  console.log(user)
  return (
    <div className='bg-gradient-to-r from-blue-400 to-lime-300 landingPage flex items-center md:items-start'>
        <div className='w-full flex justify-around items-center md:flex-col'>
            <div className='writeup-container ml-8 md:ml-2'>
                <h1 className='writeup-header text-white'><span className='text-secondary'>learn</span> on your class <span className='text-yellow'>schedule</span></h1>
                <p className='mt-8 writeup-write text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet non eaque similique aliquam laborum doloribus totam, 
                    iste quod dolor, quia nesciunt tenetur libero quos harum 
                    molestiae consequatur rerum aut qui numquam. Repellendus 
                    tenetur itaque sequi dignissimos quidem ipsum ex odit.
                </p>
            </div>
            <div className='image-container ml-8 md:ml-2'>
                <img src={female} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Index