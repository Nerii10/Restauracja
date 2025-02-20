import { useState } from "react";
import "./Ratings.css";
import Opinions from './Misc/Opinions.json';
import { circInOut, motion } from "framer-motion";

export default function Ratings() {
  
    const [CurrentSlide, setCurrentSlide] = useState(0);

    function scroll(x) {
        setCurrentSlide(prev => 
            Math.max(0, Math.min(Opinions.length - 1, prev + (x === -1 ? -1 : 1)))
        );
    }

    function handleDragEnd(event, info) {
        const offset = info.offset.x; 
        if (offset > 50) {
            scroll(-1); 
        } else if (offset < -50) {
            scroll(1);   
        }
    }
    
    return (
        <>
        <div id="Ratings" className="RatingsContainter">
            <div style={{ width: "95%", height: "100%" }}>
                <div style={{ height: "80%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", position:"relative"}}>
                    <motion.h1
                    initial={{opacity:0, y:40}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    transition={{duration:0.5, ease: circInOut}}
                    style={{position:'relative',zIndex:1}}
                    className="OpinionHighliht"
                    >
                        Poznaj Opinie Naszych Gości!
                        
                    <motion.div style={{position:'absolute' ,backgroundColor:"rgb(133, 15, 21)", width:"52%"
                    , right:0,top:0, zIndex:-1, color:"rgb(133, 15, 21)",transform: "skewX(-20deg)",
                    rotate:"3deg",
                    }}
                    initial={{opacity:0, width:'0%'}}
                    whileInView={{opacity:1,width:'52%'}}
                    viewport={{once:false}}
                    transition={{duration:0.5, ease: circInOut ,delay:0.5}}
                    >
                        -
                    </motion.div>
                    
                    
                    </motion.h1>

                    <motion.div 
                        initial={{opacity:0, y:40}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:false}}
                        transition={{duration:0.5, ease: circInOut, delay:0.2}}
                        className="RatingContainer"
                        drag="x" 
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd} 
                        style={{ width: "100%", display: "flex" }}
                        dragElastic={0.1}
                        dragMomentum={false}
                    >
                    <button className="RatingButton" onClick={() => scroll(1)}>{`>`}</button >


                        {Opinions.map((opinion, index) => (
                            <motion.div 
                                className="Rating" 
                                key={index}
                                animate={{ x: CurrentSlide * -100 + "%", opacity: (index==CurrentSlide ) ? 1 : 0 }} 
                                transition={{ type: "tween", ease: "easeInOut" }}
                            >
                                <div className="RatingContent">
                                    <div className="RatingContentMain">
                                        <p style={{fontWeight:"600"}}>{opinion.Opinion}</p>
                                    </div>
                                    <div className="RatingContentRating">
                                        <img src={`/Restauracja/${opinion.Rating}.png`} className="RatingImage"></img>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <button className="RatingButton" onClick={() => scroll(-1)}>{`<`}</button >

                    </motion.div>
                    

                </div>

                <div style={{textAlign:'center'}}>
                        <p>{CurrentSlide+1}/{Opinions.length+1}</p>
                </div>
               
            </div>
        </div>


       
        </>
    );
}
