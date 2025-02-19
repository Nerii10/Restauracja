import './Map.css'
import { motion } from 'framer-motion'

export default function Map(){
    return(
        <>
        <div className="MapContainer" id="map">
            <div className="Map">
                <div style={{width:"90%",height:"90%"}}>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.0923827498872!2d14.695570186639836!3d54.007406204847534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa858778023fdf%3A0xb1094cb70a86f2ec!2sU%20Czecha!5e0!3m2!1spl!2spl!4v1739991418204!5m2!1spl!2spl" 
                    width="100%" 
                    className='MapWidget'
                    height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className="MapDescription">
                <div style={{width:"90%",height:"90%",display:'flex',justifyContent:'center',alignItems:"center"}}>
                    <div style={{width:"50%", display:'flex',justifyContent:'center',alignItems:"center"}}>
                    <motion.h1
                    initial={{ opacity: 0, x: -30,skewX:"20deg"}}
                    whileInView={{ opacity: 1, x: 0, skewX:"0deg"}}
                    transition={{ duration: 0.5, ease: "circInOut" }}
                    viewport={{once:false}}
                    >
                    Znajdź nas na mapie!
                    </motion.h1>

                    </div>
                    <div style={{width:"50%",display:'flex',justifyContent:'center',alignItems:"center"}}>
                    <motion.img 
                    initial={{ opacity: 0, y: 30,scale:0.1}}
                    whileInView={{ opacity: 1, y: 0, scale:1}}
                    transition={{ duration: 0.5, ease: "circInOut" }}
                    viewport={{once:false}}
                    src='/Restauracja/Map.png' className='MapImg'></motion.img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}