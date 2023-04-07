import Form from "../components/Form";
import Team from "../components/Team";
import AddedPlayers from "../components/AddedPlayers";
import { ContextProvider } from "../context/Context";

const Main = (game) => {
  return (
    <>
      <main className="container mx-auto my-20 font-notoSans h-screen">
        <ContextProvider>
          <Form game={game.game} />
          <div className="flex gap-8 justify-evenly">
            <div className="flex-1">
              <AddedPlayers game={game.game} />
            </div>
            <div className="flex-1">
              <Team />
            </div>
          </div>
        </ContextProvider>
      </main>
    </>
  );
};

export default Main;
