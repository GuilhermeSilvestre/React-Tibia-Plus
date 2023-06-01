import { useState } from "react";
import tibiaIcon from "../img/tibia_icon.png";
import axios from "axios";

export default function Highscores(props) {
  //Mostrar rank name level vocation world dos 50 primeiros
  let [topPlayers, setTopPlayers] = useState("");
  let [erasebutton, setErasebutton] = useState(true);
  let arrayHighscorePlayers;

  async function highscoresApiRequest() {
    try {
      const response = await axios.get(
        "https://api.tibiadata.com/v3/highscores/all/experience/all/1"
      );

      arrayHighscorePlayers = response.data.highscores.highscore_list;
      arrayHighscorePlayers.map((el) => {
        //console.log(el.rank, el.name, el.level, el.vocation, el.world);
      });
      setTopPlayers(arrayHighscorePlayers);
    } catch (error) {
      alert("API Error");
      console.error(error);
    }
  }

  const handleButtonClick = () => {
    highscoresApiRequest();
    setErasebutton(false);
  };

  return (
    <>
      {erasebutton ? (
        <div className="content">
          <h1> TIBIA PLUS - HIGHSCORES </h1>
          <div>
            <img src={tibiaIcon} alt="tibia icon"></img>
          </div>
          <div className="espaco"></div>
          <button className="btn" onClick={() => handleButtonClick()}>
            TOP PLAYERS
          </button>
          <div className="espaco"></div>{" "}
        </div>
      ) : null}
      <div className="content">
        <h1>
          <span className="tituloPlayerON">TIBIA BEST PLAYERS </span>
        </h1>

        {topPlayers ? (
          <div className="scroll-container">
            <div className="grid-container">
              {topPlayers.map((el, i) => (
                <div className="grid-item" key={el}>
                  <span className="rank"> Rank: {el.rank}</span>
                  <p className="playerRank"> {el.name}</p>
                  <p className="level">Level: {el.level}</p>
                  <p>{el.vocation}</p>
                  <p>{el.world}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
