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