import { circInOut, motion } from "framer-motion"

export default function Footer() {
    const Data = new Date();
    const Year = Data.getFullYear();

    return(
        <>
            <motion.div style={{ height: "100px", width:"100%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",backgroundColor:"#011718" }}>
                    <p style={{ margin: 0 }}>{Year} ©</p>
                    <p style={{ margin: 0 }}>All rights reserved</p>
                    <p style={{ margin: 0 }}>Website Made By nerii</p>
            </motion.div>
            </>
    )
}