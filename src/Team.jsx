import { useState } from "react";

export default function Team() {
    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        let newTeam = team + 1;
        setTeam(newTeam);
    };
    const handleRemove = () => {
        let removeTeam = team - 1;
        setTeam(removeTeam);
    };

    const teamStyle = {
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
        border: "10px solid purple",
        textAlign: "center",
    } 
    return(
        <>
        <div>
            <h3 style={teamStyle}>
                Players: {team}
            </h3>
            <button onClick={handleAdd} >Add</button>
            <button onClick={handleRemove} >Remove</button>
        </div>
        </>
    )
}