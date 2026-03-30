import { Suspense } from 'react';
import './App.css';
import Allcarts from './Components/All carts/Allcarts';
import Banner from './Components/Banner/Banner';
import Navber from './Components/Navber/Navber';
import Stepsectio from './Next All/Stepsectio';
import Pricsection from './Next All/Pricsection';
import About from './Next All/About';
import Footer from './Next All/Footer';

const Alldata = async () => {
    const res = await fetch("Data.json");
    return res.json();
};

const datall = Alldata();

function App() {
    return (
        <>
            <div>
                <Navber />
                <Banner />
                <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
                    <Allcarts datall={datall} />
                </Suspense>
                <Stepsectio></Stepsectio>
                <Pricsection></Pricsection>
                 <About></About>
                 <Footer></Footer>
            </div>
        </>
    );
}

export default App;


// all data fetching is compelting by react.




// ### 📂 GitHub Repository
// - Create Beautiful Github Readme with following description
//     - Name of your  Project
//     = Digitool
//     - A little Description
//     =Premium Digital Tools Marketplace is a feature-rich React application that provides users with a seamless shopping experience for digital products. 
//     The application showcases a curated collection of premium digital tools designed to boost productivity and creativity. Users can browse products, add items to their cart, manage selections, and proceed to checkout - all with a beautiful, responsive interface.
//     - Technology that you use
//     = 
//       Frontend
// React.js - UI library for building component-based interfaces
// Tailwind CSS - Utility-first CSS framework for styling
// React Hooks - State management (useState, useEffect)
// React Suspense - For handling async data loading

// Development 
// Vite ,npm 

//     - 3 Features about your project. 
//     = Features

// 1. Dynamic Product Catalog
// Browse through a diverse collection of premium digital products including Resume Kits, Portfolio Builders, Interview Prep Packs, and Career Growth Plans. Each product displays detailed information including features, pricing, and special tags like "Best Seller", "Popular", or "New".

// 2. Interactive Shopping Cart
// Add products to cart with a single click, view cart items, remove unwanted items, and see real-time total price calculation. The cart updates instantly with visual feedback showing the number of items added.

//   3.   Beautiful Tag System
// Products are categorized with visually distinct tags that change color based on their type (Best Seller, Popular, New). This makes it easy for users to identify special offers and trending products at a glance.



    