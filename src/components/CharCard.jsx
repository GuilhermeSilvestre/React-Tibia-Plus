import tibiaIcon from "../img/tibia_icon.png";

export default function CharCard(props) {
  return (
    <>
      <div className="content">
        <h1> {props.name} </h1>
        <div>
          <p>
            <span className="span">Level:</span> {props.level}
          </p>
          <p>
            <span className="span">Sex: </span>
            {props.sex}
          </p>
          <p>
            <span className="span">Vocation: </span>
            {props.vocation}
          </p>
          <p>
            <span className="span">World: </span>
            {props.world}
          </p>
          <div>
            <span className="span">Comment:</span>
            <p className="comment"> {props.comment}</p>
          </div>
          <p>
            <span className="span">Account Status: </span>
            {props.account_status}
          </p>
          <p>
            <span className="span">Created: </span>
            {props.created}
          </p>
          <p>
            <span className="span">Last Login:</span> {props.last_login}
          </p>
          <span className="espaco"> </span>
        </div>
      </div>
    </>
  );
}
