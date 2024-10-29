import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

const Player = ({ player }) => {
  return (
    <div className="rounded-xl border border-gray-600 p-6">
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
      <div className="mt-4 flex items-center gap-2">
        <div>
          <p className="text-lg text-gray-400" href="">
            <FaFlag></FaFlag>
          </p>
          <p className="text-lg text-gray-400">{player.country}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
