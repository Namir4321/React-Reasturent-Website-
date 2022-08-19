import React from 'react';
import "./footer.css"
const Footer = () => {
    return(<>
        <div className='container-fluid mt-10'style={{marginTop:'100px'}}>
        <div className='row text-center'>
        <div className='col-lg-3 foot_list col-sm-12' style={{display:'inline-block'}}>
        <h6>Discover</h6>
        <p className='d-none d-lg-block'>Trnding Reasturent</p>
        <p className='d-none d-lg-block'>Super Saver</p>
        <p className='d-none d-lg-block'>Contactless Dining</p>
       </div>
        <div className='col-lg-2 foot_list col-sm-12'>
        <h6>About</h6>
        <p className='d-none d-lg-block'>About us</p>
        <p className='d-none d-lg-block'>Blog</p >
        <p className='d-none d-lg-block'>Carrers</p >
        <p className='d-none d-lg-block'>Add Reasturent</p>
        <p className='d-none d-lg-block'>Term & condition</p >
        <p className='d-none d-lg-block'>Privacy Polices</p>
        </div>
        <div className='col-lg-2 foot_list col-sm-12'>
        <h6>Top Cuisine</h6>
        <p className='d-none d-lg-block'>North Indian</p >
        <p className='d-none d-lg-block'>Italian</p>
        <p className='d-none d-lg-block'>Continental</p >
        <p className='d-none d-lg-block'>Chiness</p >
        <p className='d-none d-lg-block'>American</p>
        </div>
        <div className='col-lg-2 foot_list col-sm-12'>
        <h6>Top Facilities</h6>
        <p className='d-none d-lg-block'>Outdoor sitting</p>
        <p className='d-none d-lg-block'>Private Dinnning</p>
        </div>
        <div className='col-lg-3 foot_list  col-sm-12'>
        <h6>Top Location</h6>
        <p className='d-none d-lg-block'>Pinto park</p>
        <p className='d-none d-lg-block'>Gole ka mandir</p>
        <p className='d-none d-lg-block'>morar</p>
        </div>
        </div>
<div className='container-fluid' style={{marginTop:'80px',borderbottom: '1px solid #B1B1B1',transform: 'rotate(-0.25deg)'}}>
<div className='row' style={{textAlign:'center'}}><h1>Logo</h1></div>
<div className='row'style={{textAlign:'center'}}>
<h6>Find the best Restaurants, Deals, Discounts & Offers
Contact: +91 789654231</h6>
</div>
</div>
<div className='.container'>
<div className='row'style={{textAlign:'center'}}>
<div className='col-5' style={{textAlign:'end'}}>
<img src={require('./sitebook/whatsapp_48px.png')}/>
</div>
<div className='col-2' style={{textAlign:'center'}}>
<img src={require('./sitebook/facebook_48px.png')}/>
</div>
<div className='col-5'style={{textAlign:'start'}}>
<img src={require('./sitebook/gmail_48px.png')}/>
</div>
</div>
</div>
<div className='.container mb-5'style={{textAlign:'center'}}>
<div className='row'style={{texrAlign:'center'}}>
<h6>© 2017, VIP.co.in. All Rights Reserved.</h6>
</div>
</div>



        </div>
        </>
        )
};
export default Footer