import { createContext, useContext, useReducer, useState } from "react";
import { getGameObj } from "./Ranks";

const PlayersContext = createContext();
const DispatchContext = createContext();
const TeamsContext = createContext();

// リストオブジェクトの中身をランダムに並び替える
const shuffleArray = (array) => {
  const cloneArray = [...array];

  for (let i = cloneArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let tmpStorage = cloneArray[i];
    cloneArray[i] = cloneArray[rand];
    cloneArray[rand] = tmpStorage;
  }

  return cloneArray;
};

const ContextProvider = ({ children }) => {
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);

  const reducer = (prev, action) => {
    switch (action.type) {
      case "add": {
        console.log("reducer/add");
        const newPlayer = {
          player: action.player,
          rank: action.rank,
          rating: action.rating,
          id: Math.floor(Math.random() * 10e3),
        };
        return [...prev, newPlayer];
      }
      case "shuffle": {
        console.log("reducer/shuffle");
        const newPlayers = shuffleArray(prev);
        const newTeamA = [];
        const newTeamB = [];
        newPlayers.forEach((player, index) => {
          index % 2 === 0 ? newTeamA.push(player) : newTeamB.push(player);
        });
        setTeamA(newTeamA);
        setTeamB(newTeamB);
        return prev;
      }
      case "balance": {
        console.log("reducer/balance");
        console.log(action);
        const gameRankObject = getGameObj(action.game);
        const newPlayers = [...prev];
        newPlayers.map((player) => {
          player.rating =
            gameRankObject[player.rank] + Math.floor(Math.random() * 11) - 5;
          return player;
        });
        newPlayers.sort((a, b) => a.rating - b.rating);
        const newTeamA = [];
        const newTeamB = [];
        newPlayers.forEach((player, index) => {
          index % 2 === 0 ? newTeamA.push(player) : newTeamB.push(player);
        });
        setTeamA(newTeamA);
        setTeamB(newTeamB);
        return prev;
      }
      case "reset": {
        console.log("reducer/reset");
        return [];
      }
      case "eliminate": {
        console.log("reducer/eliminate");
        const newPlayers = [...prev];
        return newPlayers.filter((player) => {
          return action.id !== player.id;
        });
      }
      default: {
        console.log("reducer/default");
      }
    }
  };

  const [players, dispatch] = useReducer(reducer, []);

  return (
    <PlayersContext.Provider value={players}>
      <DispatchContext.Provider value={dispatch}>
        <TeamsContext.Provider value={{ teamA, teamB }}>
          {children}
        </TeamsContext.Provider>
      </DispatchContext.Provider>
    </PlayersContext.Provider>
  );
};

const usePlayers = () => useContext(PlayersContext);
const useDispatch = () => useContext(DispatchContext);
const useTeams = () => useContext(TeamsContext);

export { ContextProvider, usePlayers, useDispatch, useTeams };
