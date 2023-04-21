import { useState } from "react";
import { useDispatch } from "react-redux";

import { SiValorant, SiCounterstrike } from "react-icons/si";

import { getGameObj } from "../redux/module/ranks";
import { add } from "../redux/balancerSlice";

const Form = ({ game }) => {
  // gameのrankオブジェクトを取得
  const gameRankObject = getGameObj(game);
  const gameRankList = Object.keys(gameRankObject);

  const [player, setPlayer] = useState("");
  const [rank, setRank] = useState("");
  const dispatch = useDispatch();

  // プレイヤーを追加
  const addHandler = () => {
    dispatch(
      add({
        player: player,
        rank: rank,
      })
    );
    setPlayer("");
  };

  return (
    <div>
      <h2 className="text-2xl mb-16">
        {game === "VALORANT" && (
          <SiValorant className="inline text-red-400 mr-2" />
        )}
        {game === "CSGO" && (
          <SiCounterstrike className="inline text-orange-400 mr-2" />
        )}
        {game} Balancer
      </h2>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addHandler();
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

        <button onClick={addHandler} className="btn">
          追加
        </button>
      </div>
    </div>
  );
};

export default Form;
