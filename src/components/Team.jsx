import { useTeams } from "../context/Context";

const Team = () => {
  const { teamA, teamB } = useTeams();

  return (
    <div>
      <div className="flex justify-evenly">
        <div>
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
        <div>
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
