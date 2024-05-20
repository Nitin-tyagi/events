
import Header from './Header';
import './App.css';
import { useState } from 'react';
import Events from './Events';
import Collection from './Collection';

function App() {
const [event,setEvent]=useState(true);
const [collect,setCollect]=useState(true);
const handle=()=>{
  setEvent(!event);
}

const handle1=()=>{
  setEvent(!collect);
}
  return (
    <div className="container">
  
  <Header/>
  {(event)?<Events/>:<Collection/>}
 
  <div className="btn-group" role="group" aria-label="Basic example">
  <button type="button" onClick={handle} className="btn">Events</button>
 <button type="button" onClick={handle1} className="btn">Collections</button>
</div>
</div>
  );
}

export default App;
