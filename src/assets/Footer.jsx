import "./Footer.css"

export default function Footer(){
    const Data = new Date()
    const Year = Data.getFullYear()
   
    
    return(
        <>
        <div id="footer" className="FooterContainter">
            <div style={{width:"95%",height:"80%"}}>
                <div style={{height:"60%"}}>
                    <h1>Godziny Otwarcia</h1>
                    <h2><span>12:00</span> {"-"} <span>20:00</span></h2>


                </div>

                <div style={{height:"40%", display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                    <p style={{margin:0}}>{Year} ©</p>
                    <p style={{margin:0}}>All rights reserved</p>
                    <p style={{margin:0}}>Website Made By nerii</p>
                </div>
            </div>
        </div>
        
        </>
    )
}