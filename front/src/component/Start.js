import React, { useState } from 'react';
import rocket from '../img/rocket.png';
function Start() {
 const [sliderimg,setsliderimg] =useState("one");
const  changeimg=(text)=> {
  setsliderimg(text);
}






  return (
 
<div >
  <img className='rocket' src={rocket} style={{ width: '200px' }} />
  <div className='neck'>
 {sliderimg === "one" && (
      <>
  <div id='one' style={{ display: 'flex', }}>
   
        <div className="content">
          <h1>
          <span style={{ color: 'rgb(221 1 253)' }}>understand Teaching</span><br />
          
            <span style={{ color: 'rgb(254 163 1)' }}>inclusion & together.</span>
          </h1>
          <p>
            It’s going to be faster, broader, better,<br/> and more thorough than anything we can do on our own.
          </p>
          <button onClick={() => changeimg("two")}>Next</button>
          </div>
        </div>
      </>
    )}
    {sliderimg === "two" && (
      <>
        <div id='two'>
          <div className="content2">
          <h1>
          <span style={{ color: 'rgb(221 1 253)' }}>understand Teaching</span><br />
          
            <span style={{ color: 'rgb(254 163 1)' }}>inclusion & together.</span>
          </h1>
          <p>
            It’s going to be faster, broader, better,<br/> and more thorough than anything we can do on our own.
          </p>
            <button onClick={() => changeimg("three")}>Next</button>

          </div>
        </div>
      </>
    )}

    {sliderimg === "three" && (
      <>
        <div id='three'>
          <div className="content3">
          <h1>
            We need to <span style={{ color: 'rgb(1 172 253)' }}>understand</span>,<br />
            we all work on <span style={{ color: 'rgb(254 163 1)' }}>inclusion</span>   
          </h1>
          <p>
            It’s going to be faster, broader, better, and more <br></br>thorough than anything we can do on our own.
          </p>
            <button onClick={() => changeimg("one")}>Next</button>

          </div>
        </div>
      </>
    )}

<div className='cards'>
  <div className='card'>
    <div className='circle' style={{backgroundColor:'#f0aa00'}}>

    </div>
Our Team
  </div>
  <div className='card'>
  <div className='circle' style={{backgroundColor:'#ff236c'}}>

</div>
  Student Enrollment
  </div>
  <div className='card'>
  <div className='circle' style={{backgroundColor:'#64c8ff'}}>

</div>
    Srudent Emprovements
  </div>
  <div className='card'>
  <div className='circle' style={{backgroundColor:'#a5c347'}}>

</div>
   Best Results
  </div>
</div>
    

    </div>
</div>

  )
}

export default Start
