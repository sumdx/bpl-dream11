import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = ({choosePlayerHandler}) => {
  const [players, addPlayers] = useState([]);
  

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => addPlayers(data));
  }, []);

  return (
    <div className="container mx-auto">
      
      <div className="grid grid-cols-3 gap-8 mx-auto">
        {players.map((player) => (
          <Player key={player.playerId} choosePlayerHandler={choosePlayerHandler} player={player}></Player>
        ))}
      </div>
      
    </div>
  );
};

export default Players;
