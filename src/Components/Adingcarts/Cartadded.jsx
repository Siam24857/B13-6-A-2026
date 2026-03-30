import React from 'react';

const Cartadded = ({ cart, onRemove }) => {
    return (
        <div className='container mx-auto'>
            <div className="rounded-2xl p-4 flex justify-between items-center bg-[#F9FAFC]">
                <div className="flex items-center gap-4">
                    <img src={cart.icon} alt={cart.name} className="w-12 h-12" />
                    <div>
                        <h3 className="font-bold">{cart.name}</h3>
                        <p className="text-sm text-[#627382]">${cart.price}</p>
                    </div>
                </div>
                <button onClick={() => onRemove(cart.id)} className="text-red-500 hover:text-red-700">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default Cartadded;