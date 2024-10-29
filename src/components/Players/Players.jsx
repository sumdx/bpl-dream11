import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {

    const [players, addPlayers ] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => addPlayers(data))
    },[])

    return (
        <div>
            {
                players.map(player =><Player key={player.playerId} player ={player}></Player>)
            }
        </div>
    );
};

export default Players;