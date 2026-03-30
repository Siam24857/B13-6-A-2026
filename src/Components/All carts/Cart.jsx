import React from 'react';
import imgesc4 from "../../assets/products/Check.png";

const Cart = ({ data }) => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='p-6 space-y-4 border rounded-lg'>
                    <div className='flex justify-between'>
                        <img src={data.icon} alt="" className="w-12 h-12" />
                        <h2 className='text-[#BB4D00] bg-[#BB4D0010] text-center rounded-2xl px-3 py-1'>{data.tag}</h2>
                    </div>
                    <h2 className='text-2xl font-bold'>{data.name}</h2>
                    <p className='text-[#627382]'>{data.description}</p>
                    <div className='flex gap-2 items-end'>
                        <h4 className='text-3xl font-bold'>${data.price}</h4>
                        <span className='text-[#627382]'>/{data.period}</span>
                    </div>
                    {data.features?.map((feature, i) => (
                        <p key={i} className='text-[#627382] flex gap-2'>
                            <img src={imgesc4} alt="" className="w-5 h-5" />
                            {feature}
                        </p>
                    ))}
                    <button className="btn btn-primary bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;