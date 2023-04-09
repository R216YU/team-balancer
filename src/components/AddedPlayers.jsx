import { useDispatch, usePlayers } from "../context/Context";

const AddedPlayers = ({game}) => {
  const players = usePlayers();
  const dispatch = useDispatch();

  // 追加されているプレイヤーをすべて消去
  const reset = () => {
    dispatch({ type: "reset" });
  };
  // 任意のプレイヤーを消去
  const eliminate = (id) => {
    dispatch({ type: "eliminate", id: id });
  };
  // チーム振り分け
  const shuffle = () => {
    dispatch({ type: "shuffle" });
  };
  const balance = () => {
    dispatch({ type: "balance", game: game });
  };

  return (
    <div>
      <h3 className="font-bold mt-8 mb-4">現在のプレイヤー</h3>
      <ul className="columns-2">
        {players.map((player) => {
          return (
            <li key={player.id} className="list">
              {player.player} ({player.rank})
              <button onClick={() => eliminate(player.id)} className="delBtn">
                削除
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <button onClick={reset} className="btn">
          リセット
        </button>
        <button onClick={shuffle} className="btn">
          ランダム振り分け
        </button>
        <button onClick={balance} className="btn">
          ランク振り分け
        </button>
      </div>
    </div>
  );
};

export default AddedPlayers;
