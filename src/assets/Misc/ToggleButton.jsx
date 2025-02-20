const ListOpenSignTop = {
    marginTop: "5px",
    position: "absolute",
    transform: "scale(3, 1)",
    color:"white",
    opacity:1,
    transition: "0.5s ease",
}

const ListOpenSignBottom = {
    marginTop: "-5px",
    color:"white",
    opacity:1,
    position: "absolute",
    transform: "scale(3, 1)",
    transition: "0.5s ease",
}

const ListClosedSignBottom = {
    marginLeft: "0px",
    position: "absolute",
    color:"white",
    opacity:1,
    transform: "rotate(-45deg) scale(3, 1)",
    transition: "0.5s ease",
}

const ListClosedSignTop = {
    marginLeft: "3px",
    marginTop: "-2px",
    color:"white",
    opacity:1,
    position: "absolute",
    transform: "rotate(45deg) scale(3, 1)",
    transition: "0.5s ease",
}

export default function ToggleButton({ active }) {
    return (
        <h2 style={{ margin: 0, display: 'flex', flexDirection: "column", cursor: "pointer" }} >
            <span style={{ opacity: 0 }}>-</span>
            <span style={active ? ListOpenSignBottom : ListClosedSignBottom}>-</span>
            <span style={active ? ListOpenSignTop : ListClosedSignTop}>-</span>
        </h2>
    )
}
