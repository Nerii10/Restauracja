import ToggleButton from "./Misc/ToggleButton";
import './Navbar.css';
import { useState } from "react";
import { circIn, circInOut, motion } from "framer-motion";

export default function Navbar() {

    const [Hidden, setHidden] = useState(1);

    function ListInteraction() { 
        setHidden((prev) => (prev === 0 ? 1 : 0));
    }

    function scrollToMenu(id) {
        const ScrollElement = document.getElementById(id);
        if (ScrollElement) {
            ScrollElement.scrollIntoView({ behavior: "smooth", block: "center" });
            ListInteraction()
        }
    }

    return (
        <>
        <div style={{width:"100%",position:"absolute",top:0,zIndex:5}}>
            <div className="NavButton" onClick={ListInteraction}>
                <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center",cursor:"pointer" }}>
                    <h1 style={{}}>UCzecha</h1>
                    <ToggleButton active={Hidden}></ToggleButton>
                </div>
            </div>
            
            <div className="Navbar" style={{
                width: "100%",
                height: Hidden ? "0px" : "200px",
                paddingBlock: Hidden ? "0px" : "10px",
                backgroundColor: "#031716",
                display: 'flex',
                justifyContent:"center",
                transition:"0.5s ease",
                overflow:"hidden",
                }}>
                <div className="NavbarList">
                    <br></br>
                    <ul>
                        <motion.li onClick={()=>scrollToMenu("menu")}
                        initial={{x:-90, opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:0.2 , ease:circInOut, delay:0}}
                        viewport={{once:false}}
                        >Menu</motion.li >

                        
                        <motion.li  onClick={()=>scrollToMenu("map")}
                            initial={{x:-90, opacity:0}}
                            whileInView={{x:0,opacity:1}}
                            transition={{duration:0.2 , ease:circInOut, delay:0.1}}
                            viewport={{once:false}}
                            >Lokalizacja</motion.li >

                        <motion.li  onClick={()=>scrollToMenu("about")}
                              initial={{x:-90, opacity:0}}
                              whileInView={{x:0,opacity:1}}
                              transition={{duration:0.2 , ease:circInOut, delay:0.2}}
                              viewport={{once:false}}
                              >O naszej Restauracji</motion.li >
                        <motion.li  onClick={()=>scrollToMenu("footer")}
                              initial={{x:-90, opacity:0}}
                              whileInView={{x:0,opacity:1}}
                              transition={{duration:0.2 , ease:circInOut, delay:0.3}}
                              viewport={{once:false}}
                              >Godziny otwarcia</motion.li >
                        <br></br>
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
}