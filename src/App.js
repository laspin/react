import { render } from "react-dom";
import Pet from "./components/Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name={"luna"} animal={"dog"} breed={"chilli"} />
      <Pet name={"peppa"} animal={"fish"} breed={"tank"} />
      <Pet name={"donkey"} animal={"cat"} breed={"mix"} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
