import React, { useState, use } from 'react';
import Carts from './Carts';
import Adingcarts from '../Adingcarts/Adingcarts';

const Allcarts = ({ datall }) => {
    const datas = use(datall);
    const [activeTab, setActiveTab] = useState("products");
    const [cartdata, setcartdata] = useState([]);

    const addToCart = (product) => {
        setcartdata([...cartdata, product]);
        console.log("Added to cart:", product);
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartdata.filter(item => item.id !== productId);
        setcartdata(updatedCart);
        console.log("Removed from cart:", productId);
    };

    const clearCart = () => {
        setcartdata([]);
         
    };

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
                    <p className='text-center text-[#627382]'>
                        Choose from our curated collection of premium digital products designed<br />
                        to boost your productivity and creativity.
                    </p>
                </div>
                <div className='flex justify-center items-center gap-4 mt-4'>
                    <button 
                        onClick={btnhandelor} 
                        className={`btn ${activeTab === "products" ? "text-white bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl" : "text-gray-600 bg-gray-200 rounded-3xl"}`}
                    >
                        Products
                    </button>
                    <button 
                        onClick={carthandelor} 
                        className={`btn ${activeTab === "cart" ? "text-white bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl" : "text-gray-600 bg-gray-200 rounded-3xl"}`}
                    >
                        Cart ({cartdata.length})
                    </button>
                </div>

                {activeTab === "products" && <Carts datall={datas} addToCart={addToCart} />}
                {activeTab === "cart" && (
                    <Adingcarts 
                        cartdata={cartdata} 
                        onRemoveFromCart={removeFromCart}
                        onClearCart={clearCart}
                    />
                )}
            </div>
        </div>
    );
};

export default Allcarts;