const VALORANT_RANKS = {
  "choose rank": 0,
  Radiant: 55,
  Immortal: 45,
  Ascendant: 40,
  Diamond: 35,
  Platinum: 30,
  Gold: 25,
  Silver: 20,
  Bronze: 15,
  Iron: 10,
};

const OVERWATCH_RANKS = {
  "choose rank": 0,
  TOP500: 55,
  GrandMaster: 45,
  Master: 40,
  Diamond: 35,
  Platinum: 30,
  Gold: 25,
  Silver: 20,
  Bronze: 15,
};

const CSGO_RANKS = {
  "choose rank": 0,
  GE: 55,
  SMFC: 50,
  LEM: 45,
  LE: 40,
  DMG: 35,
  MGE: 30,
  MG: 25,
  NOVA: 20,
  SilverElite: 15,
  Silver: 10,
};

// rankとratingを格納しているオブジェクトを返す
export const getGameObj = (game) => {
  if (game === "VALORANT") {
    return VALORANT_RANKS;
  } else if (game === "OVERWATCH") {
    return OVERWATCH_RANKS;
  } else if (game === "CSGO") {
    return CSGO_RANKS;
  }
};
