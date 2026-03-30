import React from 'react';
import roketimg from "../../src/assets/rocket.png"
import roketimg2 from "../../src/assets/package.png"
import roketimg3 from "../../src/assets/user.png"

const Stepsectio = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='mt-[120px] pb-[120px]'>
                <div className='pt-[120px]'>
            <h4 className='text-3xl font-bold text-center '>Get Started in 3 Steps</h4>
            <p className='text-center text-[#627382] mt-4'>Start using premium digital tools in minutes, not hours.</p>
             </div>

             <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px] container mx-auto mt-10'>

                <div className='space-y-4 p-6 border border-blue-50 bg-[#F1F1F1]  rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className='p-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl'>
                          01
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                    <div className='bg-[#4F39F610] p-5 rounded-full'>
                        <img src={roketimg3} alt="" />
                    </div>
                    </div>
                    <h3 className='text-3xl font-bold text-center'>Create Account</h3>
                    <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='space-y-4 p-6 border border-blue-50 bg-[#F1F1F1]  rounded-2xl shadow-xl'>
                    <div className='flex justify-end'>
                        <div className='p-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl'>
                          01
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                    <div className='bg-[#4F39F610] p-5 rounded-full'>
                        <img src={roketimg2} alt="" />
                    </div>
                    </div>
                    <h3 className='text-3xl font-bold text-center'>Create Account</h3>
                    <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>

                <div className='space-y-4 p-6 border border-blue-50 bg-[#F1F1F1]  rounded-2xl'>
                    <div className='flex justify-end'>
                        <div className='p-2 rounded-full text-white bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl'>
                          01
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                    <div className='bg-[#4F39F610] p-5 rounded-full'>
                        <img src={roketimg} alt="" />
                    </div>
                    </div>
                    <h3 className='text-3xl font-bold text-center'>Create Account</h3>
                    <p className='text-[#627382] text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
              
                 
             </div>
             </div>
        </div>
    );
};

export default Stepsectio;