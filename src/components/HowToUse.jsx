import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";

const HowToUse = () => {
  return (
    <div className="container mx-auto my-20 font-notoSans h-screen">
      <h2 className="text-2xl text-center">How to use</h2>
      <ul className="howToUse">
        <li className="my-16">
          <div className="flex items-center gap-8">
            <RiNumber1 className="text-6xl text-blue-500" />
            <div className="text-center">
              <p>チーム分けを行いたいゲームを選択</p>
            </div>
          </div>
        </li>
        <li className="my-16">
          <div className="flex items-center gap-8">
            <RiNumber2 className="text-6xl text-blue-500" />
            <div className="text-center">
              <p>プレイヤーの名前とランクを入力して追加</p>
            </div>
          </div>
        </li>
        <li className="my-16">
          <div className="flex items-center gap-8">
            <RiNumber3 className="text-6xl text-blue-500" />
            <div className="text-center">
              <p>振り分けボタンをクリック</p>
            </div>
          </div>
        </li>
        <li className="my-16">
          <div className="flex items-center gap-8">
            <CiSquarePlus className="text-6xl text-blue-500" />
            <div className="text-center">
              <p>再度振り分ける場合は、もう一度振り分けボタンをクリック</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HowToUse;
