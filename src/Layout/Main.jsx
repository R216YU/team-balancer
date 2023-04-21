import Form from "../components/Form";
import Team from "../components/Team";
import AddedPlayers from "../components/AddedPlayers";

const Main = (props) => {
  return (
    <main className="container mx-auto my-20 font-notoSans h-screen">
      <Form game={props.game} />
      <div className="flex gap-8 justify-evenly">
        <div className="flex-1">
          <AddedPlayers game={props.game} />
        </div>
        <div className="flex-1">
          <Team />
        </div>
      </div>
    </main>
  );
};

export default Main;
