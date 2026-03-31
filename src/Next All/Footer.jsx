import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer  className='bg-[#101727] pt-15 md:p-[120px]'>
                <div className='text-center  md:flex justify-around'>
                    <div>
                        <h2 className='text-white text-4xl font-bold'>DigiTool</h2>
                        <p className='text-white mt-4'>Premium digital tools for creators, <br></br>professionals, and businesses. Work smarter <br></br>with our suite of powerful tools.</p>
                    </div>
                    <div className='text-white space-y-3'>
                        <p className='text-lg'>Product</p>
                        <p >Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                    <div className='text-white space-y-3'>
                        <p className='text-lg'>Company</p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                    <div className='text-white space-y-3'>
                          <p className='text-lg'>Resources</p>
                          <p>Documentation</p>
                          <p>Help Center</p>
                          <p>Community</p>
                          <p>Contact</p>
                    </div>
                    <div>
                        Social Links
                        <div className=' flex justify-center md:flex gap-2'>
                            <div className='p-3 bg-white rounded-full'><AiFillInstagram /></div>
                            <div  className='p-3 bg-white rounded-full'><ImFacebook2 /></div>
                            <div  className='p-3 bg-white rounded-full'> <FaXTwitter /></div>
                        </div>
                    </div>

                    
                </div>
                <div className=' text-center md:flex justify-between border border-t-black mt-[80px] p-8'>
                        <div>
                           <p className='text-white'>© 2026 Digitools. All rights reserved.</p>
                        </div>
                        <div className='text-white flex gap-12'>
                            <p>Privacy Policy     </p>  
                              <p>      Terms of Service       </p>
                                    <p>    Cookies </p>
                             
                        </div>
                    </div>
                    <div>

                    </div>
            </footer>
        </div>
    );
};

export default Footer;