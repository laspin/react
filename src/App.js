import { render } from "react-dom";
import SearchParams from "./components/SearchParams";

const App = () => {
  return (
    <div>
      <h1>Pets R Us</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
