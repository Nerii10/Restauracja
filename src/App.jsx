import { useState } from 'react'
import Navbar from './assets/Navbar'
import List from './assets/List'
import Map from './assets/Map'
import About from './assets/About'
import Footer from './assets/Footer'

import DaniaGlowne from "./assets/Data/DaniaGlowne.json"
import Zupy from "./assets/Data/Zupy.json"
import Przystawki from "./assets/Data/Przystawki.json"
import Napoje from "./assets/Data/Napoje.json"

function App() {

  const SegmentStyle = {borderRadius:"20px", border:"white", borderStyle:"none",overflow:"hidden", width:"100%" ,zIndex:'1'}


  return (
    <>
      <Navbar/>

      
     
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

      <div style={{borderRadius:"20px", border:"none", borderStyle:"none", width:"90%" , maxWidth:"1000px", display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

          <div id="menu" style={SegmentStyle}>
            <List name="Dania Główne" content={DaniaGlowne}/>
            <List name="Zupy" content={Zupy}/>
            <List name="Przystawki" content={Przystawki}/>
            <List name="Napoje" content={Napoje}/>
          </div>

        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

        <div id="menu"  style={SegmentStyle}>
                    <Map></Map>
        </div>
        
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

        <div id="menu"  style={SegmentStyle}>
                  <About></About>
        
        </div>

        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>


      </div>

     

     
      <Footer></Footer>
    </>
  )
}

export default App
