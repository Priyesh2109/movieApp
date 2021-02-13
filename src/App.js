import "./styles.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Row title="What's trending" fetchUrl={requests.fetchTrending} />
    </div>
  );
}
export default App;
