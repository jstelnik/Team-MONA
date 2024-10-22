import SearchBar from "./components/searchbar";
import { log } from "./lib/logger";

function App() {
  log.debug("Hello, world!");
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

export default App;

