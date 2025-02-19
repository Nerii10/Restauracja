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

  return (
    <>
      <Navbar/>

     
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

      <div id="menu" style={{borderRadius:"10px", border:"white", borderStyle:"solid",overflow:"hidden", width:"95%" , maxWidth:"1000px",zIndex:'1'}}>
        <List name="Dania Główne" content={DaniaGlowne}/>
        <List name="Zupy" content={Zupy}/>
        <List name="Przystawki" content={Przystawki}/>
        <List name="Napoje" content={Napoje}/>



      </div>

      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>


      <div id="menu" style={{borderRadius:"10px", border:"white", borderStyle:"solid",overflow:"hidden", width:"95%" , maxWidth:"1000px",zIndex:'1'}}>
        <Map></Map>
      </div>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

      <About></About>
      

      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

      <Footer></Footer>
    </>
  )
}

export default App
