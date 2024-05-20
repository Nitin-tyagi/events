import React from 'react'
import './Artist.css';
import img1 from "../src/Images/img1.jpg";
import img2 from "../src/Images/img2.jpg";
const Artist = () => {
  return (
   <>
   <div className='slider1'>
<div className='slide-track1'>
<div className='slide1'>
<img className='img1' src={img1} alt='img1'/>
</div>
<div className='slide1'>
<img className='img1' src={img2} alt='img2'/>
</div>
<div className='slide1'>
<img className='img1' src={img1} alt='img1'/>
</div>

</div>
   </div>
   </>
  )
}

export default Artist