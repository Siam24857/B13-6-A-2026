import React from 'react';
import righttik  from "../assets/products/Check.png"
import righttik2 from "../assets/products/Checkbal.png";
 
 

const Pricsection = () => {
    return (
        <div>
            <div className='mb-[120px]'>

                <div className='pt-[120px] mb-10'>
            <h4 className='text-3xl font-bold text-center '>Get Started in 3 Steps</h4>
            <p className='text-center text-[#627382] mt-4'>Start using premium digital tools in minutes, not hours.</p>
             </div>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                                <div className='p-6 space-y-6 border border-blue-50 rounded-2xl'>
                                    <div className=' '>
                                        
                                        <h2 className='  rounded-2xl   text-2xl font-medium'>
                                           Starter
                                        </h2>
                                        <p className='text-[#627382] '>Perfect for getting started</p>
                                    </div>
                                    <div className='flex gap-1 items-end'>
                                    <h2 className='text-2xl font-bold'>$0</h2>
                                    <span className='text-[#627382]'>/Month</span>
                                    </div>
                                    <div className='mb-[56px]'>
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" />Access to 10 free tools</p>
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" />Community support </p>
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" /> 1 project per month</p>
                                    </div>
                                    <div className='flex gap-2 items-end'>
                                        <h4 className='text-3xl font-bold'> </h4>
                                        <span className='text-[#627382]'> </span>
                                    </div>
                                    
                                    <button 
                                         
                                        className="mt-6 btn btn-primary bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl w-full"
                                    >
                                       Get Started Free
                                    </button>
                                </div>
                                <div className='p-6 space-y-5 border text-white border-blue-50 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-700'>
                                    <div className=' '>
                                        
                                        <h2 className='  rounded-2xl   text-2xl font-medium'>
                                           Pro
                                        </h2>
                                        <p className='text-[#627382] text-white'>Best for professionals</p>
                                    </div>
                                    <div className='flex gap-1 items-end'>
                                    <h2 className='text-2xl font-bold'>$0</h2>
                                    <span className='text-[#627382] text-white'>/Month</span>
                                    </div>
                                    <div className=' '>
                                    <p className='text-[#627382] flex gap-2 text-[#FFFFFF]'> <img src={righttik2} alt="" />Access to all premium tools</p>
                                    <p className='text-[#627382] flex gap-2 text-white'> <img src={righttik2} alt="" />Unlimited templates</p>
                                     
                                    <p className='text-[#627382]  flex gap-2 text-white'> <img src={righttik2} alt="" />Priority support</p>
                                    <p className='text-[#627382] flex gap-2 text-[#FFFFFF]'> <img src={righttik2} alt="" />Unlimited projects</p>
                                    <p className='text-[#627382] flex gap-2 text-white'> <img src={righttik2} alt="" /> Cloud sync</p>
                                     
                                    <p className='text-[#627382]  flex gap-2 text-white'> <img src={righttik2} alt="" /> Advanced analytics</p>
                                    </div>
                                    <div className='flex gap-2 items-end'>
                                        <h4 className='text-3xl font-bold'> </h4>
                                        <span className='text-[#627382]'> </span>
                                    </div>
                                    
                                    <button 
                                         
                                        className=" btn btn-primary bg-white rounded-3xl w-full"
                                    >
                                      <span className=' font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>Start Pro Trial</span> 
                                    </button>
                                </div>
                                <div className='p-6 space-y-5 border border-blue-50 rounded-2xl'>
                                    <div className=' '>
                                        
                                        <h2 className='  rounded-2xl   text-2xl font-medium'>
                                           Enterprise
                                        </h2>
                                        <p className='text-[#627382]'>For teams and businesses</p>
                                    </div>
                                    <div className='flex gap-1 items-end'>
                                    <h2 className='text-2xl font-bold'>$99</h2>
                                    <span className='text-[#627382]'>/Month</span>
                                    </div>
                                    <div className=' '>
 
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" />Everything in Pro</p>
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" />Team collaboration</p>
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" />Custom integrations</p>
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" />Dedicated support</p>
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" />SLA guarantee</p>
                                    <p className='text-[#627382] flex gap-2'> <img src={righttik} alt="" /> Custom branding</p>
                                    </div>
                                    <div className='flex gap-2 items-end'>
                                        <h4 className='text-3xl font-bold'> </h4>
                                        <span className='text-[#627382]'> </span>
                                    </div>
                                    
                                    <button 
                                         
                                        className=" btn btn-primary bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl w-full"
                                    >
                                       Contact Sales
                                    </button>
                                </div>
                                 
                              
                            </div>
            </div>
        </div>
    );
};

export default Pricsection;