

const ListOpenSignTop = {
    marginTop: "5px",
    position: "absolute",
    transform: "scaleX(3)",
    transition: "0.5s ease",
}

const ListOpenSignBottom = {
    marginTop: "-5px",
    position: "absolute",
    transform: "scaleX(3)",
    transition: "0.5s ease",
}

const ListClosedSignBottom = {
    rotate: "-45deg",
    marginLeft: "0px",
    position: "absolute",
    transform: "scaleX(3)",
    transition: "0.5s ease",
}

const ListClosedSignTop = {
    rotate: "45deg",
  
    marginLeft: "3px",
    marginTop: "-2px",
    position: "absolute",
    transform: "scaleX(3)",
    transition: "0.5s ease",
}


export default function ToggleButton({active}) {
    return(
        <>
            <h2 style={{ margin: 0,display:'flex', flexDirection:"column", cursor:"pointer" }} >
                <span style={{opacity:0}}>-</span>
                <span style={active ? ListOpenSignBottom : ListClosedSignBottom}>-</span><span style={active ? ListOpenSignTop : ListClosedSignTop}>-</span>
            </h2>
        </>
    )
}