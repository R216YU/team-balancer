import { useDispatch, useSelector } from "react-redux";
import { reset, eliminate, shuffle, balance } from "../redux/balancerSlice";

const AddedPlayers = ({ game }) => {
  const players = useSelector((state) => state.balancer.players);
  const dispatch = useDispatch("");

  // 追加されているプレイヤーをすべて消去
  const resetHandler = () => {
    dispatch(reset());
  };
  // 任意のプレイヤーを消去
  const eliminateHandler = (id) => {
    dispatch(eliminate({ id: id }));
  };
  // チーム振り分け
  const shuffleHandler = () => {
    dispatch(shuffle());
  };
  const balanceHandler = () => {
    dispatch(balance({ game: game }));
  };

  return (
    <div>
      <h3 className="font-bold mt-8 mb-4">現在のプレイヤー</h3>
      <ul className="columns-2">
        {players.map((player) => {
          return (
            <li key={player.id} className="list">
              {player.player} ({player.rank})
              <button
                onClick={() => eliminateHandler(player.id)}
                className="delBtn"
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <button onClick={resetHandler} className="btn">
          リセット
        </button>
        <button onClick={shuffleHandler} className="btn">
          ランダム振り分け
        </button>
        <button onClick={balanceHandler} className="btn">
          ランク振り分け
        </button>
      </div>
    </div>
  );
};

export default AddedPlayers;
