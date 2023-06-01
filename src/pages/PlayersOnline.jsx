import tibiaIcon from "../img/tibia_icon.png";
import React, { useEffect, useState } from "react";
import axios, { all } from "axios";

export default function PlayersOnline(props) {
  let [allplayers, setAllplayers] = useState("");
  let [arrayworldName, setArrayworldName] = useState([]);
  let [arrayorldPlayers, setarrAyorldPlayers] = useState([]);
  let [arrayworldStatus, setarrAyworldStatus] = useState([]);
  let [arrayworldType, setarrAyworldType] = useState([]);
  let [arrayworldLocation, setarrAyworldLocation] = useState([]);
  let [erasebutton, setErasebutton] = useState(true);

  let players;
  let worldName;
  let worldPlayers;
  let worldStatus;
  let worldType;
  let worldLocation;

  let arrworldName = [];
  let arrworldPlayers = [];
  let arrworldStatus = [];
  let arrworldType = [];
  let arrworldLocation = [];

  async function playersOnlineApiRequest() {
    try {
      const response = await axios.get("https://api.tibiadata.com/v3/worlds");

      players = response.data.worlds.players_online;

      //Only for tests from 0 - 89
      // worldName = response.data.worlds.regular_worlds[0].name;
      // worldPlayers = response.data.worlds.regular_worlds[0].players_online;
      // worldStatus = response.data.worlds.regular_worlds[0].status;
      // worldType = response.data.worlds.regular_worlds[0].pvp_type;
      // worldLocation = response.data.worlds.regular_worlds[0].location;

      response.data.worlds.regular_worlds.map((el, i) => {
        //console.log(el.name);
        arrworldName.push(el.name);
        arrworldPlayers.push(el.players_online);
        arrworldStatus.push(el.status);
        arrworldType.push(el.pvp_type);
        arrworldLocation.push(el.location);
      });
      //console.log(arrworldName);
      setAllplayers(players);

      setArrayworldName(arrworldName);
      setarrAyorldPlayers(arrworldPlayers);
      setarrAyworldStatus(arrworldStatus);
      setarrAyworldType(arrworldType);
      setarrAyworldLocation(arrworldLocation);

      //
    } catch (error) {
      alert("API Error");
      console.error(error);
    }
  }

  useEffect(() => {
    setAllplayers(players);
  }, [players]);

  const handleButtonClick = () => {
    playersOnlineApiRequest();
    setErasebutton(false);
  };

  return (
    <>
      <div className="content">
        {erasebutton ? (
          <>
            <h1> TIBIA PLUS - PLAYERS ONLINE</h1>
            <div>
              <img src={tibiaIcon} alt="tibia icon"></img>
            </div>
            <div className="espaco"></div>
            <button className="btn" onClick={() => handleButtonClick()}>
              PLAYERS ONLINE
            </button>
          </>
        ) : null}
        {allplayers ? (
          <>
            <h1>
              <span className="tituloPlayerON">All players online:</span>
              <span className="playersOn"> {allplayers} </span>
            </h1>
            <div className="scroll-container">
              <div className="grid-container">
                {arrayworldName.map((el, i) => (
                  <div className="grid-item" key={el}>
                    <span className="tituloWorld"> {el}</span>
                    <p className="playersOn"> {arrayorldPlayers[i]}</p>
                    <p>{arrayworldStatus[i]}</p>
                    <p>{arrayworldType[i]}</p>
                    <p>{arrayworldLocation[i]}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
