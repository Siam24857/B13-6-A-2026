import React from 'react';
import Cartadded from './Cartadded';

const Adingcarts = ({ cartdata, onRemoveFromCart, onClearCart }) => {
    console.log(cartdata);
    
    // Calculate total price
    const totalPrice = cartdata.reduce((total, item) => total + item.price, 0);
    
    if (!cartdata || cartdata.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-500">Your cart is empty</p>
            </div>
        );
    }
    
    return (
        <div className="space-y-4 p-10 container mx-auto">
            <h2 className='text-2xl font-bold ml-10'>Your Cart</h2>
            {cartdata.map((cart, index) => (
                <Cartadded 
                    key={index} 
                    cart={cart} 
                    onRemove={onRemoveFromCart}
                />
            ))}
            
            <div className="flex justify-between items-center mt-6 pt-4 ">
                <h3 className="text-[#627382]">Total : </h3>
                <span className='text-right text-2xl font-bold'> ${totalPrice.toFixed(2)}</span>
            </div>
            
            <button 
                onClick={onClearCart} 
                className="btn btn-primary bg-gradient-to-r from-purple-800 to-purple-500 rounded-3xl w-full mt-4"
            >
                Proceed to Checkout
            </button>
        </div>
    );
};

export default Adingcarts;