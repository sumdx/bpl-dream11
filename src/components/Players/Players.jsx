import { useEffect, useState } from "react";

const Players = () => {

    const [players, addPlayers ] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default Players;