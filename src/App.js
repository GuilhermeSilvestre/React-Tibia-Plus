import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PlayersOnline from "./pages/PlayersOnline";
import Highscores from "./pages/Highscores";
import FindPlyaer from "./pages/FindPlayer";
import CharCard from "./components/CharCard";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="menu">
            <Link className="links" to={"/"}>
              Home
            </Link>
            <Link className="links" to={"/highscores"}>
              Highscores
            </Link>
            <Link className="links" to={"/playersonline"}>
              Players Online
            </Link>
            <Link className="links" to={"/findplayerperserver"}>
              Find Players
            </Link>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/highscores" element={<Highscores />} />
            <Route path="/playersonline" element={<PlayersOnline />} />
            <Route path="/findplayerperserver" element={<FindPlyaer />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
