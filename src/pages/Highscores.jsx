import tibiaIcon from "../img/tibia_icon.png";

export default function Highscores(props) {
  return (
    <>
      <div className="content">
        <h1> TIBIA PLUS</h1>
        <div>
          <img src={tibiaIcon} alt="tibia icon"></img>
        </div>
        <p>Highscores</p>
      </div>
    </>
  );
}
