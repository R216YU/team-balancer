// 配列をランダムに並び替える関数
export const shuffleArray = (array) => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i >= 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1));
    let tmpStorage = newArray[i];
    newArray[i] = newArray[rand];
    newArray[rand] = tmpStorage;
  }

  return newArray;
};
