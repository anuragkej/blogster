import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const title = "Welcome to Blogster";
  const likes = 50;
  const link = "http://www.google.com";

  // react converts everything to string before outputting to browser, so don't need to worry about typecasting

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home />

        <a href={link}>Open Google Site</a>
      </div>
    </div>
  );
}

export default App;
