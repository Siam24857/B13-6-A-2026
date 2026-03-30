import React from 'react';
import dollerImg from '../../assets/banner.png';
import dollerImg3 from '../../assets/play.png';
import dollerImg2 from '../../assets/Group 5 (1).png';

const Banner = () => {
    return (
        <div>
        <div className='container mx-auto flex-1 md:flex gap-8  justify-center items-center mt-[85px]'>
            

            <div className='space-y-8'>
                <div className='flex gap-2 bg-[#4F39F630] w-[294px] justify-center items-center rounded-2xl'>

                <img src={dollerImg2} alt="" />
                <p>New: AI-Powered Tools Available</p>
                </div>
                <h2 className='text-5xl font-bold'>Supercharge Your<br></br>
                    Digital Workflow</h2>
                   <p className='text-[#627382]'>
                    Access premium AI tools, design assets, templates, and productivity<br></br>
software—all in one place. Start creating faster today.<br></br>

Explore Products
                   </p>
                   <div className='flex gap-3'>
                   <button className="btn btn-primary bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl">Explore Products</button>
                   <button className="btn btn-outline btn-primary rounded-3xl"><img src={dollerImg3} alt="" />Watch Demo</button>
                   </div>
              
            </div>
                 <div className='mt-6'>
            <img src={dollerImg} alt="" />
            </div>
        </div>


        <div className='bg-gradient-to-r from-blue-800 to-purple-500 p-[60px] mt-[60px]'>

         <div className='md:flex justify-center items-center gap-15'>
            <div className='  flex justify-center items-center gap-15'>
             <div className='text-white text-center'>
                <h2 className=' text-5xl font-bold'>50K+</h2>
                <p className='mt-[12px]'>Active Users</p>
             </div>
              
       <div className="divider divider-horizontal w-[1px] h-13 mt-3   bg-amber-50"></div>
       </div>
            <div className='  flex justify-center items-center gap-15'>
             <div className='text-white text-center'>
                <h2 className=' text-5xl font-bold'>200+</h2>
                <p className='mt-[12px]'>Premium Tools</p>
             </div>
              
       <div className="divider divider-horizontal w-[1px] h-13 mt-3   bg-amber-50"></div>
       </div>
            <div className='  flex justify-center items-center gap-15'>
             <div className='text-white text-center'>
                <h2 className=' text-5xl font-bold'>4.9</h2>
                <p className='mt-[12px]'>Rating</p>
             </div>
              
       <div className="divider divider-horizontal w-[1px] h-13 mt-3   bg-amber-50"></div>
       </div>
         
        
 
              
         </div>

        </div>
       
        </div>
    );
};

export default Banner;