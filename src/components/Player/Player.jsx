import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player ,choosePlayerHandler}) => {
  
  return (
    <div className="rounded-xl border border-gray-200 p-6">
      <div className="rounded-xl">
        <img
          className="w-full rounded-xl h-48 object-cover"
          src={player.image}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <p className="text-xl" href="">
          <FaUser></FaUser>
        </p>
        <h1 className="font-bold text-xl">{player.name}</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 ">
        <div className=" flex items-center gap-2">
          <p className="text-lg text-gray-400" href="">
            <FaFlag></FaFlag>
          </p>
          <p className="text-lg text-gray-400">{player.country}</p>
        </div>
        <h2 className="rounded-lg bg-gray-200 px-4 py-2">{player.role}</h2>
      </div>
      <hr className="mt-4" />
      <h3 className="font-bold text-base mt-4">Rating</h3>
      <div>
        <div className="flex justify-between mt-2">
            <p>{player.battingType}</p>
            <p>{player.bowlingType}</p>
        </div>
        <div className="flex justify-between mt-2 items-center">
            <p>Price : {player.biddingPrice}</p>
            <button onClick={()=>choosePlayerHandler(player)} className=" hover:bg-gray-200 active:scale-90 duration-75 rounded-lg px-4 py-2 border border-gray-200">Choose Player</button>
        </div>

      </div>
    </div>
  );
};

export default Player;
