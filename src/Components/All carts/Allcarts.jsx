import React, { useState, use } from 'react';
import Carts from './Carts';

const Allcarts = ({ datall }) => {
    const datas = use(datall);
    const [activeTab, setActiveTab] = useState("products");

    const btnhandelor = () => {
        setActiveTab("products");
    };

    const carthandelor = () => {
        setActiveTab("cart");
    };

    return (
        <div>
            <div className='mt-[120px]'>
                <div className='space-y-4'>
                    <h3 className='text-center text-5xl font-bold'>Premium Digital Tools</h3>
                    <p className='text-center text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
                </div>
                <div className='flex justify-center items-center gap-4 mt-4'>
                    <button onClick={btnhandelor} className={`btn ${activeTab === "products" ? "text-white bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl" : "text-gray-600 bg-gray-200 rounded-3xl"}`}>Products</button>
                    <button onClick={carthandelor} className={`btn ${activeTab === "cart" ? "text-white bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl" : "text-gray-600 bg-gray-200 rounded-3xl"}`}>Cart</button>
                </div>

                {activeTab === "products" && <Carts datall={datas} />}
                {activeTab === "cart" && <div className="text-center mt-8">Cart is empty</div>}
            </div>
        </div>
    );
};

export default Allcarts;