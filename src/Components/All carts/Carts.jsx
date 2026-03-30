import React from 'react';
import Cart from './Cart';

const Carts = ({ datall, addToCart }) => {
    if (!datall || datall.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-500 text-3xl">You Can not buy any product</p>
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] p-6'>
            {datall.map((data) => (
                <Cart key={data.id} data={data} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default Carts;