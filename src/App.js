import { useState } from "react";
import Startgame from "./Components/Startgame";
import Gameplay from "./Components/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <Gameplay /> : <Startgame toggle={toggleGamePlay} />}</>
  );
}

export default App;
