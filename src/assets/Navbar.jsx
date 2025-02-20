import ToggleButton from "./Misc/ToggleButton";
import './Navbar.css';
import { useState } from "react";
import { circIn, circInOut, easeInOut, easeOut, motion } from "framer-motion";

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

    const initial={x:-50, color:"transparent" }

    const whileInView={x:0,color:"white"}

    return (
        <>
        <div style={{width:"100%",position:"absolute",top:0,zIndex:5, cursor:"pointer"}}>
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
                        initial={initial}
                        whileInView={whileInView}
                        transition={{duration:0.2 , ease:circInOut, delay:0}}
                        viewport={{once:false}}
                        >Menu</motion.li >

                        
                        <motion.li  onClick={()=>scrollToMenu("map")}
                            initial={initial}
                            whileInView={whileInView}
                            transition={{duration:0.2 , ease:circInOut, delay:0.1}}
                            viewport={{once:false}}
                            >Lokalizacja</motion.li >

                        <motion.li  onClick={()=>scrollToMenu("about")}
                            initial={initial}
                            whileInView={whileInView}
                              transition={{duration:0.2 , ease:circInOut, delay:0.2}}
                              viewport={{once:false}}
                              >O naszej Restauracji</motion.li >
                        <motion.li  onClick={()=>scrollToMenu("footer")}
                              initial={initial}
                              whileInView={whileInView}
                              transition={{duration:0.2 , ease:circInOut, delay:0.3}}
                              viewport={{once:false}}
                              >Opinie</motion.li >
                        <br></br>
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
}