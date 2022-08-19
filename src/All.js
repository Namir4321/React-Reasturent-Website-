import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Activity from './Activity';
import About from './About';
import Footer from "./Footer"
import Carousel from './Carousel';
const All = () => {
    return(
<>
<div className='container-fluid'>
<Navbar/>
<Banner/>
<div className='container-fluid'>
<div className='row'>
<div className='col-4 d-none d-sm-block'style={{padding:'20px'}}><Activity/></div>
<div className='col-lg-8 col-sm-12' style={{padding:'50px'}}><About/></div>
</div>
</div>
<div className='.container'>
<Carousel/>
</div>
<Footer/>
</div>
</>
    )
};
export default All;