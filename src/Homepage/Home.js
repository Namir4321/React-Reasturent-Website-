import React from 'react';
import Navbar from '../Navbar';
import Bannerlarge from './Bannnerlarge';
import Cardone from "./Cardone";
import Footer from "../Footer";
import "../Homepage/Home.css";
import ArrangeCard from './ArrangeCard';
const Home = () => {
    return(
        <>
        <div className='container-fluid'>
            <Navbar/>
            <Bannerlarge/>
            
           <ArrangeCard/>
            </div>
         
  
                </>
    )
}
export default Home;