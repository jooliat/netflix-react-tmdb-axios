import React from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {originals,action,comedy,horror,romance,documentaries} from './urls';



function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <RowPost title="Netflix Originals" url ={originals} />
      <RowPost title="Action" isSmall url={action}/>
      <RowPost title="Comedy" isSmall url={comedy}/>
      <RowPost title="Horror" isSmall url={horror}/>
      <RowPost title="Romance" isSmall url={romance}/>
      <RowPost title="Documentaries"  url={documentaries}/>
    
      
    </div>
  )
}

export default App

