import React from 'react';
import img2 from '../img/img1.webp';


function About() {
  return (
    <div className='about'>
       {/*  <div className='abouttext'>
            
<p>The animation-timing-function property specifies the speed curve of the animation. <br></br>
    The following example shows some of the different speed curves that can be used:<br>
    The animation-timing-function property specifies the speed curve of the animation. <br></br>
    The following example shows some of the different speed curves that can be used:</p>
        </div> */}
    <div className='staticmove' >
    <p><h1>animation-timing-function
        </h1>The animation-timing-function property specifies the speed curve of the animation. <br></br>
    The following example shows some of the different speed curves that can be used:
    The following <br></br>example shows some of the different speed curves that can be used: <br></br>
    The following example shows some of the different speed curves that can be used: <br></br>
    The following example shows some of the<br></br> different speed curves that can be used: 
    The following example shows some of the different<br></br> speed curves that can be used: 
    <h1>animation-timing-function
        </h1>The animation-timing-function property specifies the speed curve of the animation. <br></br>
    The following example shows some of the different speed curves that can be used:
    The following <br></br>example shows some of the different speed curves that can be used: <br></br>
    The following example shows some of the different speed curves that can be used: <br></br>
    The following example shows some of the<br></br> different speed curves that can be used: 
    The following example shows some of the different<br></br> speed curves that can be used: 
     <div className='button1'>
    GET STARTED
  </div>
    </p>
  
      <div className='move' id="div1"> <img src={img2}  /></div>
      <div className='move'  id="div2"> <img src={img2}  /></div>
      <div className='move' id="div3"> <img src={img2}  /></div>
      <div className='move' id="div4"> <img src={img2}  /></div>
      <div className='move' id="div5"> <img src={img2}  /></div>
          </div>
    </div>

  )
}

export default About
