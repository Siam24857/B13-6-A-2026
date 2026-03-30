import { Suspense } from 'react';
import './App.css';
import Allcarts from './Components/All carts/Allcarts';
import Banner from './Components/Banner/Banner';
import Navber from './Components/Navber/Navber';

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
            </div>
        </>
    );
}

export default App;