
const Player = (player) => {
    console.log(player.name)
    return (
        <div>
            
            <img src={player.player.image} alt="" />
            <h1>{player.player.name}</h1>
            
            
        </div>
    );
};

export default Player;