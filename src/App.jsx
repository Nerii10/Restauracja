import { useState } from 'react'
import Navbar from './assets/Navbar'
import List from './assets/List'
import Map from './assets/Map'
import About from './assets/About'
import Ratings from './assets/Ratings'
import Footer from './assets/Footer'
import { circInOut, motion } from 'framer-motion'


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

      <motion.h1
      initial={{opacity:0, y:-40}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:false}}
      transition={{duration:0.5, ease: circInOut}}
      style={{position:'relative',zIndex:1}}
      >Menu
        
        <motion.div style={{position:'absolute' ,backgroundColor:"#0d4f38", width:"52%"
                    , right:0,top:0, zIndex:-1, color:"#0d4f38",transform: "skewX(-20deg)",
                    rotate:"3deg",
                    }}
                    initial={{opacity:0, width:'0%'}}
                    whileInView={{opacity:1,width:'100%'}}
                    viewport={{once:false}}
                    transition={{duration:0.5, ease: circInOut, delay:0.2}}
                    >
                        -
                    </motion.div>
      
      
      </motion.h1>
     
      <br></br> <br></br> <br></br> 

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


        <div id="menu"  style={SegmentStyle}>
          <Ratings></Ratings>
        </div>

        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      </div>

     
      <Footer></Footer>
     
    </>
  )
}

export default App
