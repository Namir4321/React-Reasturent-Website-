import React from 'react';
import "./About.css"
const About = () => {
    return(
        <>
       <h2 style={{paddingTop:'20px'}}>About Me</h2>
        <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label"></label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name"/>
      </div>
      <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label"></label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Last Name"/>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input type="email" class="form-control" placeholder='Email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className='container-fluid phone'>
<div className='row flex'>
<div className='col-3' style={{}}>
<div class="dropdown" style={{marginTop:'22px'}}>
  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    +91
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>
<div className='col-9'>
<div className="container-fluid" style={{}}>
<div class="mb-3">
<label for="formGroupExampleInput" class="form-label"></label>
<input type="text" class="form-control" id="formGroupExampleInput" placeholder="Phone"/>
</div>
</div>
</div>
</div>
</div>

        <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label"></label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Bio (optional)"/>
      </div>
<button className= "btn save" style={{width:'100%',padding:'5px',borderRadius:'10px',marginBottom:'25px'}}>Save</button>

      </>
        )};
        export default About;
