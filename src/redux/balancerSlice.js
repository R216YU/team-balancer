import { createSlice } from "@reduxjs/toolkit";
import { getGameObj } from "./module/ranks";
import { shuffleArray } from "./module/shuffle";

// slicer
const balancer = createSlice({
  name: "balancer",
  initialState: {
    players: [],
    teamA: [],
    teamB: [],
  },
  reducers: {
    add(state, action) {
      console.log("reducer/add");
      const newPlayer = {
        player: action.payload.player,
        rank: action.payload.rank,
        rating: action.payload.rating,
        id: Math.floor(Math.random() * 10e3),
      };
      state.players = [...state.players, newPlayer];
    },
    shuffle(state, action) {
      console.log("reducer/shuffle");
      const newPlayers = shuffleArray(state.players);
      const newTeamA = [];
      const newTeamB = [];
      newPlayers.forEach((player, index) => {
        index % 2 === 0 ? newTeamA.push(player) : newTeamB.push(player);
      });
      state.teamA = newTeamA;
      state.teamB = newTeamB;
    },
    balance(state, action) {
      console.log("reducer/balance");
      const gameRankObject = getGameObj(action.payload.game);
      const newPlayers = [...state];
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
      state.teamA = newTeamA;
      state.teamB = newTeamB;
    },
    reset(state, action) {
      console.log("reducer/reset");
      state.players = [];
      state.teamA = [];
      state.teamB = [];
    },
    eliminate(state, action) {
      const newPlayers = [...state.players];
      state.players = newPlayers.filter((player) => {
        return action.payload.id !== player.id;
      });
    },
  },
});

// actions
const { add, shuffle, balance, reset, eliminate } = balancer.actions;

// export
export { add, shuffle, balance, reset, eliminate };
export default balancer.reducer;
