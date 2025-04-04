import { useState, useRef, useEffect } from "react";
import "./List.css";
import ToggleButton from "./Misc/ToggleButton";
import { circInOut, motion } from "framer-motion";

import { Soup , GlassWater, Fish, CakeSlice } from "lucide-react";

export default function List({name, content}) {
    const [Hidden, setHidden] = useState(1);
    const [height, setHeight] = useState(0);
    const contentRef = useRef(null);

    const FoodList = content

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        }
    }, [Hidden]); 

    const List = {
        backgroundColor: "var(--AccentColor)",
        width: "100%",
        height: Hidden ? "0px" : `500px`,
        maxHeight: "500px",
        paddingBlock: Hidden ? "0px" : `0px`,
        display: "flex",
        overflow: "auto",
        flexDirection:"column",
        scrollbarWidth: "none",
        transition: `1s ease`,
        zIndex:"0",
    };

    function show() {
        setHidden((prev) => (prev === 0 ? 1 : 0));
    }

    function icon(name){
        let size = 35;
        let strokeW = 2;
        switch (name) {
            case "Zupy":
                return(<Soup size={size} strokeWidth={strokeW}></Soup>)
                break;
            case "Dania Główne":
                return(<Fish size={size} strokeWidth={strokeW}></Fish>)
                break;
            case "Przystawki":
                return(<CakeSlice size={size} strokeWidth={strokeW}></CakeSlice>)
                break;
            case "Napoje":
                return(<GlassWater size={size} strokeWidth={strokeW}></GlassWater>)
                break;
            default:
                break;
        }
    }

    return (
        <>

        <div className="List">

            <div className="ListButton" onClick={show} >
       
                <motion.div style={{width:"70px",position:"absolute", left:"5%", height:"100%", display:"flex", justifyContent:'center',alignItems:'center'}}
                        initial={{scale:0,opacity:0}}
                        whileInView={{scale:1,opacity:1}}
                        transition={{duration:0.5 , ease:circInOut}}
                        viewport={{once:false}}>
                            {name && icon(name)}
                </motion.div>    
          

                <div className="ListType">
                    <motion.h2 style={{ margin: 0}}
                    initial={{x:-20, skewX:"10deg",opacity:0.5}}
                    whileInView={{x:0,skewX:"0deg",opacity:1}}
                    transition={{duration:0.5 , ease:circInOut}}
                    viewport={{once:false}}
                    >{name ? name : "brak danych"}</motion.h2>
                    
                    <ToggleButton active={Hidden}/>
                </div>
            </div>


            <div style={List} ref={contentRef}>
            <br></br>
                {FoodList && FoodList.map((food, index) => {
                        return (
                        <>
                        <div className="ListEntry" key={index}>
                            <div key={index} className="ListEntryBox">
                                <div className="ListEntryBoxMain" >
                                    <motion.h2
                                     initial={{x:-50, skewX:"20deg",opacity:0}}
                                     whileInView={{x:0,skewX:"0deg",opacity:1}}
                                     transition={{duration:0.5 , ease:circInOut}}
                                     viewport={{once:false}}
                                     >{food.name}</motion.h2>
                                    <motion.h2
                                     initial={{x:50, skewX:"-20deg",opacity:0}}
                                     whileInView={{x:0,skewX:"0deg",opacity:1}}
                                     transition={{duration:0.5 , ease:circInOut}}
                                     viewport={{once:false}}
                                     style={{ color:"rgb(109, 158, 255)"}}
                                     >{food.price}</motion.h2>
                                </div>
                                <div className="ListEntryBoxDesc">
                                    <motion.p style={{ wordBreak: "break-word"}}
                                     initial={{y:20,opacity:0}}
                                     whileInView={{y:0,opacity:1}}
                                     transition={{duration:0.5 , ease:circInOut}}
                                     viewport={{once:false}}
                                     >{food.description}</motion.p>
                                </div>

                            </div>
                        </div>
                        
                        {index != FoodList.length-1 && <hr className="ListSeparator"></hr>}
                            
                        </>

                        );
                })}
                <br></br>
            </div>
        </div>
             
        </>
    );
};
