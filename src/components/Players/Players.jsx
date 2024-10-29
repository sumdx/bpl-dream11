import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
  const [players, addPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => addPlayers(data));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center my-8">
        <h1 className="font-bold text-xl">Available Player</h1>
        <div>
          <button className="rounded-l-lg border-l border-t border-b bg-lime-400 px-4 py-2">Availble</button>
          <button className="rounded-r-lg border-r border-t border-b bg-white px-4 py-2">Selected</button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mx-auto">
        {players.map((player) => (
          <Player key={player.playerId} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
