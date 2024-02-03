import React from 'react';
import { Link } from "react-router-dom";
import {BiUser} from "react-icons/bi";
import {AiOutlineUnLock} from "react-icons/ai";

const Register = () => {
    return (
        <div>
        <div className="bg-slate-800 border border-slate-200 rounded-md p-8 shadow-lg backdrop-filter background-blur-sm bg-opacity-30 relative">
          <h1 className="text-4x1 text-whitefont-bold text-center mb-6">Register</h1>
          <form action="">
                <div className="relative my-4">
                  <input type="email" className="block w-72 py-2.5 px-0 text-sm text-while bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                  <label htmlFor="" className="absolute text-sm text-white duration-300 transform .translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Email</label>
                  <BiUser className="absolute top-4 right-4"/>
                </div>
                <div>
                    <div className='relative my-4'>
                      <input type="password" className="block w-72 py-2.3 px-0 text-sm text-while bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:boder-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                      <label htmlFor=""className="absolute text-sm text-white duration-300 transform .translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Password</label>
                      <AiOutlineUnLock className="absolute top-4 right-4"/>
                    </div>
                    <div className='relative my-4'>
                      <input type="password" className="block w-72 py-2.3 px-0 text-sm text-while bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:boder-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
                      <label htmlFor=""className="absolute text-sm text-white duration-300 transform .translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Confirm Password</label>
                      <AiOutlineUnLock className="absolute top-4 right-4"/>
                    </div>
                    <div className="flex justify between items-center"> 
                        <button className="w-full mb-4 text-[18px] at -6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Register</button>
                        <div>
                            <span className="m-4">Already have an account ? <Link classname="text-blue-500" to ='/login'>Login here ?</Link> </span>
                        </div>
                    </div>
                </div>
          </form>
        </div>
      </div>
    );
};

export default Register;


