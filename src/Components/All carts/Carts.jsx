import React from 'react';
import Cart from './Cart';

const Carts = ({ datall }) => {
    console.log(datall);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[30px] container mx-auto'>
            {datall.map((data, index) => <Cart key={index} data={data}></Cart>)}
        </div>
    );
};

export default Carts;