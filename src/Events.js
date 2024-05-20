import React from 'react'
import Scroll from './Scroll';
import qrcode from "../src/Images/qrcode.webp"
import img1 from "../src/Images/img1.jpg";
import img2 from "../src/Images/img2.jpg";
import Artist from './Artist';
const Events = () => {
   
  return (
    <>
    <div className='section'>
<div className='section1'>
    <div className='heading'>
        <h1>ASTRIX</h1>
        <h1>EVENTS</h1>
    </div>
   <div className='slider'>
<div className='slide-track'>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
<div className='slide'>
<img src={img1} alt='img1'/>
</div>
<div className='slide'>
<img src={img2} alt='img2'/>
</div>
</div>
   </div>
   <Scroll/>
   
</div>
<div className='section2'>
    <h3>Explore Youre First Event</h3>
    <h1>Event Name</h1>
    <div className='venue'>
        <span>icon</span>
    <h4>Venue</h4>
    <span>icon</span>
    </div>
    <p>
    Lorem ipsum dolor sit amet consectetur. Ac lorem in morbi et sed ipsum. Pellentesque morttis condimentum ut nulla.
    </p>
    <div className='artist'>
        <h3>Artist Lineup</h3>
    </div>
    <Artist/>
    <div className='qrcode'>
        <img className='qrimg' src={qrcode} alt='qrcode'></img>
       
  <button className="btnlist" type="button">Join Waitlist</button>

    </div>
</div>
    </div>
    </>
  )
}

export default Events