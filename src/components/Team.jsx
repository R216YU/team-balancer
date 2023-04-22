import { useSelector } from "react-redux";

const Team = () => {
  const teamA = useSelector((state) => state.balancer.teamA);
  const teamB = useSelector((state) => state.balancer.teamB);

  return (
    <div>
      <div className="flex justify-evenly">
        <div className="flex-1">
          <h3 className="font-bold mt-8 mb-4">TeamA</h3>
          <ul>
            {teamA.map((player) => {
              return (
                <li key={player.id} className="list p-1">
                  {player.player} ({player.rank} {player.rating})
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold mt-8 mb-4">TeamB</h3>
          <ul>
            {teamB.map((player) => {
              return (
                <li key={player.id} className="list p-1">
                  {player.player} ({player.rank} {player.rating})
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
