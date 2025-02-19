import ToggleButton from "./Misc/ToggleButton";
import './Navbar.css';
import { useState } from "react";

export default function Navbar() {

    const [Hidden, setHidden] = useState(1);

    function ListInteraction() { 
        setHidden((prev) => (prev === 0 ? 1 : 0));
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
                marginTop: "-5px",
                backgroundColor: "#031716",
                display: 'flex',
                justifyContent:"center",
                transition:"0.5s ease",
                overflow:"hidden",
                }}>
                <div className="NavbarList">
                    <br></br>
                    <ul>
                        <li>Menu</li>
                        <li>Lokalizacja</li>
                        <li>O naszej Restauracji</li>
                        <li>Opinie</li>
                        <br></br>
                    </ul>
                </div>
            </div>
            </div>
        </>
    );
}