import { useState } from "react";
import { getGameObj } from "../context/Ranks";
import { useDispatch } from "../context/Context";

import { SiValorant, SiCounterstrike } from "react-icons/si";

const Form = (game) => {
  // gameのrankオブジェクトを取得
  const gameRankObject = getGameObj(game.game);
  const gameRankList = Object.keys(gameRankObject);

  const [player, setPlayer] = useState("");
  const [rank, setRank] = useState("");
  const dispatch = useDispatch();

  // プレイヤーを追加
  const add = () => {
    dispatch({
      type: "add",
      player: player,
      rank: rank,
    });
    setPlayer("");
  };

  return (
    <div>
      <h2 className="text-2xl mb-16">
        {game.game === "VALORANT" && (
          <SiValorant className="inline text-red-400 mr-2" />
        )}
        {game.game === "CSGO" && (
          <SiCounterstrike className="inline text-orange-400 mr-2" />
        )}
        {game.game} Balancer
      </h2>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            add();
          }}
          className="inline"
        >
          <input
            type="text"
            value={player}
            placeholder="プレイヤーネーム"
            onChange={(e) => setPlayer(e.target.value)}
            className="input"
          />
        </form>

        <select onChange={(e) => setRank(e.target.value)} className="select">
          {gameRankList.map((rank) => {
            return (
              <option key={rank} value={rank}>
                {rank}
              </option>
            );
          })}
        </select>

        <button onClick={add} className="btn">
          追加
        </button>
      </div>
    </div>
  );
};

export default Form;
