import React from 'react';
import "./Banner.css"
const Banner = () => {
return(
<>
<div className=' container-fluid banner'style={{width:'100%'}}>
<div className='row'>
{/*1 half*/ }
<div className='col-lg-6 col-sm-12'>
<div className='row'>
<div className='col-lg-3 sm-col-12'style={{textAlign:'center'}}>
<img src={require('./sitebook/male_user_100px.png')} alt='' style={{width:'120px',height:'120px'}}/>
</div>
<div className='col-lg-9 col-sm-12 detail'style={{paddingTop:'40px'}}>
<h6 style={{color:'white'}}>Aman Tomar</h6>
<p style={{color:'white'}}>Gwalior</p>
</div>
</div>
</div>
{/*1 half*/ }


{/*2 half*/ }
<div className='col-lg-6 col-sm-12'style={{display:'inline-block',textAlign:'center',maxHeight:'293px'}}>
<div className='row d-none d-lg-block' style={{height:'50px'}}></div>
<div className='row' style={{color:'white'}}>
<div className='col-4  red'style={{textAlign:'center',borderRight:'2px solid grey'}}>
<h6 className=' text-center'>Booking</h6>
<p className='d-none d-lg-block'style={{}}>02</p>
</div>
<div className='col-4' style={{textAlign:'center',borderRight:'2px solid grey'}}> <h6 className='text-center'>
<h6 className=' text-center'>Photo</h6>
<p className='d-none d-lg-block'style={{}}>02</p>
</h6></div>
<div className='col-4  blue'style={{textAlign:'center',borderRight:'2px solid grey'}}><h6 className='text-center'>
<h6 className=' text-center'>Review</h6>
<p className='d-none d-lg-block'style={{}}>02</p>
</h6></div>
</div>
</div>
{/*2 half*/ }
</div>
</div>
</>
)};
export default Banner;