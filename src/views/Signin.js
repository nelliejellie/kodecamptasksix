import React, { useState,useEffect } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import loginguy from '../assets/images/loginguy.webp'
import kodecamp from '../assets/images/kodecamp.jpg'
import '../styles/signin.css'
import {CgProfile} from "react-icons/cg"
import {AiFillLock, AiFillGoogleCircle} from "react-icons/ai"
import {auth} from '../firebase-config'
import {signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth"


const Signin = ({user, updateUser}) => {
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        updateUser(currentUser);
    });

  }, [])
  const login = async (e) =>{
    e.preventDefault()
    try{
        user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
        )
        console.log(user)
        return navigate("/app");
    }catch(error){
        console.log(error)
    }
  }
  const loginWithGoogle = async =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re)=>{
      console.log(re)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='flex justify-center w-full my-8'>
        <div className='flex items-center rounded-lg signin-container w-[90%] shadow-lg bg-white'>
            <div className='flex justify-around w-full md:flex-col'>
                <div className='flex flex-col justify-center items-center w-[50%] md:w-[100%]'>
                    <h2 className='capitalize text-3xl font-medium'>student login</h2>
                    <p className='text-gray-4'>make sure your account is secure</p>
                    <img src={loginguy} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center self-start w-[50%] md:w-[100%]'>
                    <div className='w-24'>
                        <img src={kodecamp} alt=""  />
                    </div>
                    <form action="" className='w-full'>
                        <div className='border-b-4 w-[80%] md:w-[70%] md:mx-auto m-8 flex justify-between'>
                            <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className='w-[80%] text-lg focus:outline-none' placeholder='enter your email'/>
                            <CgProfile/>
                        </div>
                        <div className='border-b-4 w-[80%] md:w-[70%] md:mx-auto m-8 flex justify-between'>
                            <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className='w-[80%] text-lg focus:outline-none' placeholder='enter your password'/>
                            <AiFillLock/>
                        </div>
                        <div className='flex capitalize justify-between w-[80%] m-8 md:w-[70%] md:mx-auto'>
                            <p onClick={loginWithGoogle} className='flex items-center'>login with google? <AiFillGoogleCircle className='ml-2' /></p>
                            <Link to="/register" className='cursor-pointer'><p>register</p></Link>
                        </div>
                        <div className='flex uppercase justify-center w-[80%] m-8 md:w-[50%] md:mx-auto'>
                            <button className='bg-gradient-to-r from-blue-400 to-lime-300 text-black w-[80%] p-2 rounded-full text-2xl font-bold' onClick={login}>Login</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </div> 
  )
}


export default Signin