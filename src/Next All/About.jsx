import React from 'react';

const About = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-purple-800 to-purple-500 p-[120px]'>
                <div className='space-y-10'>
                    <div>
                        <h2 className='text-white text-center text-4xl font-bold'>Ready to Transform Your Workflow?</h2>
                        <p className='text-white text-center mt-4'>Join thousands of professionals who are already using Digitools to work smarter.<br></br>Start your free trial today.</p>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <button className='btn bg-white rounded-full'><span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text'>Explore Products</span></button>
                    <button className="btn btn-outline btn-warning text-white border border-red-50 rounded-full">View Pricing</button>
                    
                     
                    </div>
                    <p className='text-white text-center'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
             </div>
        </div>
    );
};

export default About;


//compelet the about