import React from 'react';
import Image from 'react-bootstrap/Image';
import img2 from '../img/img3.jpg'; // Import the image file
function Grid() {
  return (
    <>
 
    
  <div className='maingrid'>
  <h1 >A configurable and flexible React component <br></br>wrapper around PhotoSwipe</h1>
    <div className='grid' >

     
      <div className='row'>
        <Image src={img2}  />
      </div>
      <div className='row'>
        <Image src={img2}  />
      </div>
     
    </div>
        <div className='grid'>
        <div className='row'>
          <Image src={img2}  />
        </div>
        <div className='row'>
          <Image src={img2}  />
        </div>
        <div className='row'>
          <Image src={img2}  />
        </div>
  </div>
  
     
    
    </div>
      </>
  );
}

export default Grid;
