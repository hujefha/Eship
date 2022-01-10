// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Home from './frames/Home';
import Track from './frames/Track';
import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  return (
                 <div>
                   {/* <Home/>
                   <Track/> */}
                   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Track/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        
      </Routes>
      </BrowserRouter>
         
  </div>
      

      
  );
}

export default App;
