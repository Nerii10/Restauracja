import "./About.css"
import { circInOut, motion } from "framer-motion"

const text = "Witamy w U CZECHA restauracji w sercu Międzywodzia, gdzie serwujemy zarówno świeże ryby i owoce morza, jak i klasyczne polskie dania. Naszą pasją jest łączenie tradycji z nadmorskim smakiem. Założyciele U CZECHA prowadzą również Bistro Solniczka w Szczecinie – znane z domowej atmosfery i wyśmienitej kuchni. Stawiamy na jakość, świeżość i gościnność, by każda wizyta była kulinarną przyjemnością. Zapraszamy do Międzywodzia i Szczecina!"
const highlighted = ["U CZECHA", "świeże ryby" , "klasyczne polskie dania", "Bistro Solniczka w Szczecinie"]

export default function About(){
    return(
        <>
            <div className="AboutContainer" id="about">
                <div style={{width:"90%", height:"90%"}}>
                <motion.h1 style={{position:"relative", width:"fit-content",zIndex:1, }}
                initial={{skewX:"-20deg",x:'-10px'}}
                whileInView={{skewX:"0deg",x:'0px'}}
                viewport={{once:false}}
                transition={{duration:0.5, ease: circInOut}}
                >
                            <motion.span 
                            style={{position:"absolute",
                            width:"100%",height:"100%",
                            backgroundColor:"rgb(133, 15, 21)",zIndex:-1,
                            padding: "2px 5px",
                            transform: "translate(-50%, -50%)",
                            top:"50%",
                            left:"50%",
                            borderRadius:"5px"
                            }}
                            initial={{width:"0%", padding:"0",opacity:0}}
                            whileInView={{width:"100%",opacity:1,padding:"0px 5px"}}
                            viewport={{once:false}}
                            transition={{duration:0.5, ease: circInOut}}
                            >
                            </motion.span>
                        O naszej restauracji
                    </motion.h1>
                 
                    <p>

                    <h2 className="about-title">Witamy <span className="highlight">U CZECHA</span>!</h2>
                    <p className="about-text">
                        Restauracja w sercu Międzywodzia, gdzie serwujemy zarówno 
                        <span className="highlight"> świeże ryby</span> i owoce morza, jak i 
                        <span className="highlight"> klasyczne polskie dania</span>. 
                        Naszą pasją jest łączenie tradycji z nadmorskim smakiem.
                    </p>
                    <p className="about-text">
                        Stawiamy na <b>jakość</b>, <b>świeżość</b> i <b>gościnność</b>, by każda wizyta była kulinarną przyjemnością.
                    </p>
                    <p className="about-invite">Zapraszamy do <b>Międzywodzia</b> i <b>Szczecina</b>!</p>

                    </p>





                    



                    </div>
            </div>
        </>
    )
}