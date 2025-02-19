import { useState, useRef, useEffect } from "react";
import "./List.css";
import ToggleButton from "./Misc/ToggleButton";


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
        backgroundColor: "#0A7075",
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

    return (
        <>

        <div className="List">

            <div className="ListButton" onClick={show} >
                <div className="ListType">
                    <h2 style={{ margin: 0}}>{name ? name : "brak danych"}</h2>
                    <img src={`/Restauracja/${name}.png`} style={{width:"70px",position:"absolute", left:"0%",top:5}}></img>
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
                                    <h2>{food.name}</h2>
                                    <h2>{food.price}</h2>
                                </div>
                                <div className="ListEntryBoxDesc">
                                    <p style={{ wordBreak: "break-word"}}>{food.description}</p>
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
