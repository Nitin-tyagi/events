import React from 'react'
import Scroll from './Scroll';
import qrcode from "../src/Images/qrcode.webp"
import img1 from "../src/Images/img1.jpg";
import img2 from "../src/Images/img2.jpg";
import Artist from './Artist';
const Collection = () => {
  return (
    <>
    <div className='section'>
<div className='section1'>
    <div className='heading'>
        <h1>ASTRIX</h1>
        <h1>COLLECTIONS</h1>
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
    <h3>Explore Youre First Collectible</h3>
    <h1>Meta Lives</h1>
    <div className='venue'>
        
    <h4>Live in Astrix</h4>
    </div>
    <p>
    Lorem ipsum dolor sit amet consectetur. Ac lorem in morbi et sed ipsum. Pellentesque morttis condimentum ut nulla.
    </p>
    <div className='artist'>
        <h3>Collectibles</h3>
    </div>
    {/* <Artist/> */}
    <div className="card">
  <div className="card-body">
    <div className='card-date'><p className="card-text">2024</p></div>
  
  <div className='card-date'><p className="card-text">By Pablo</p></div>
    
    
  </div>
  <h5 className="card-title">Collectible Name</h5>
  <img src={img1} class="card-img-bottom" alt="..."/>
</div>
    <div className='qrcode'>
       
       
  <button className="btnlist" type="button">Join Waitlist</button>

    </div>
</div>
    </div>
    </>
  )
}

export default Collection