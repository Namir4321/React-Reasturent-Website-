import React from "react";
import  "../Homepage/Bannerlarge.css";
const Bannerlarge = () => {
    

var today = new Date();
var date = today.getMonth()+1 +'-'+(today.getFullYear());
var to = new Date();
var da = (today.getHours()-12)+':'+today.getMinutes();

return(
        <>
        <div className="container-fluid main_banner ">
    <div className="row no-gutter mb-4"><h1 style={{color:'white',textAlign:'center'}}>Find your Table for any occusion</h1></div>
    <div className="row no-gutter">
        <div className="col-lg-6 ">
        {/*first half*/}
<div className="row mb-3">
  <div className="container ">
  <div className="row g-0 mb-3">
  <div className="col-lg-4 col-sm-12 g-0" >
    {/* first button */}
  <div className="container-fluid arrange arrangeone "  >   
    <div class="dropdown">
    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img className=' card-img-top  cardone-img' src={require('../sitebook/calendar_25px.png')} style={{width:'25px',height:'25px'}}/>
    
  </button>
  {date}
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </div>
  </div>
  {/* first button */}
  <div className="col-lg-4  col-sm-12 g-0" >

{/* secound button */}
<div className="container-fluid arrange" >   
    <div class="dropdown">
    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img className=' card-img-top  cardone-img' src={require('../sitebook/time_32px.png')} style={{width:'25px',height:'25px'}}/>
    
  </button>
  {da}
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

    </div>

      {/* secound button */}
  
  </div>
    
  <div className="col-lg-4 col-sm-12 g-0">
    {/**third button */}

    <div className="container-fluid arrange arrangetwo" >   
    <div class="dropdown">
    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img className=' card-img-top  cardone-img' src={require('../sitebook/customer_50px.png')} style={{width:'25px',height:'25px'}}/>
  </button>
  02
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    </div>


    



    {/**third button */}
  
  </div>
  </div> 
  </div>
   </div>
        {/*first half*/}       
          {/*Secound half*/} 
        
        
        </div>
        <div className="col-lg-6 " >
            <div className="container-fluid">
                <div className="row g-0">
                    <div className="col-lg-8 col-sm-12 mb-3 g-0" style={{columnGap:'0px'}}>

                    <form class="d-flex">
        <input class="form-control right_search me-3 p-2" type="search" placeholder="Search" aria-label="Search" style={{background:'#D9D9D9'}}/>
       
      </form>
                    </div>
                    <div className="col-lg-4 col-sm-12 mb-2">
                    <button class="btn btn-primary-success" type="submit" style={{color:'white',background:'red',textAlign:'center'}}>Search</button>
                    </div>
                </div>
            </div>
        </div>
          {/*Secound half*/} 
    </div>
    </div>
        </>
    )
};
export default Bannerlarge;