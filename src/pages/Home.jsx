import { useEffect, useState } from "react";
import tibiaIcon from "../img/tibia_icon.png";
import axios from "axios";
import CharCard from "../components/CharCard";
import React from "react";

export default function Home(props) {
  //https://api.tibiadata.com/v3/character/

  const [name, setName] = useState("");
  const [tibiadata, setTibiadata] = useState({});

  let dateStringCreated;
  let dateStringLastLogin;

  async function findPlayer(name) {
    try {
      const response = await axios.get(
        `https://api.tibiadata.com/v3/character/${name}`
      );
      //console.log(response.data);

      // console.log(response.data.characters.character.name);
      // console.log(response.data.characters.character.level);
      // console.log(response.data.characters.character.vocation);
      // console.log(response.data.characters.character.sex);
      // console.log(response.data.characters.character.world);
      // console.log(response.data.characters.character.residence);
      // console.log(response.data.characters.character.comment);
      // console.log(response.data.characters.character.account_status);
      //console.log(response.data.characters.account_information.created);
      // console.log(response.data.characters.character.last_login);

      //----------------------------------------------------------
      //Formatando as datas

      let lastLoginString;
      let createdString;

      if (response.data.characters.account_information.created) {
        dateStringCreated = new Date(
          response.data.characters.account_information.created
        ).getFullYear();

        let mes_created = new Date(
          response.data.characters.account_information.created
        ).getMonth();

        let dia_created = new Date(
          response.data.characters.account_information.created
        ).getDate();

        createdString = `${dia_created}/${
          mes_created + 1
        }/${dateStringCreated}`;
      } else {
        createdString = "No data";
      }

      // LAST LOGIN
      if (response.data.characters.character.last_login) {
        dateStringLastLogin = new Date(
          response.data.characters.character.last_login
        ).getFullYear();

        let mes_last_login = new Date(
          response.data.characters.character.last_login
        ).getMonth();

        let dia_last_login = new Date(
          response.data.characters.character.last_login
        ).getDate();

        lastLoginString = `${dia_last_login}/${
          mes_last_login + 1
        }/${dateStringLastLogin}`;
      } else {
        lastLoginString = "No data";
      }

      //----------------------------------------------------------

      let char = {
        name: response.data.characters.character.name ?? "",
        level: response.data.characters.character.level ?? "",
        sex: response.data.characters.character.sex ?? "",
        vocation: response.data.characters.character.vocation ?? "",
        world: response.data.characters.character.world ?? "",
        residence: response.data.characters.character.residence ?? "",
        comment: response.data.characters.character.comment ?? "",
        account_status: response.data.characters.character.account_status ?? "",
        created: createdString,
        last_login: lastLoginString,
      };

      // console.log(
      //   char.name,
      //   char.level,
      //   char.sex,
      //   char.world,
      //   char.residence,
      //   char.comment,
      //   char.account_status,
      //   char.created,
      //   char.last_login
      // );

      setTibiadata(char);
    } catch (error) {
      alert("Character not found");
      console.error(error);
    }
  }

  const handleButtonClick = (name) => {
    findPlayer(name);
  };

  useEffect(() => {
    if (tibiadata.level === 0) {
      alert("Character not found");
      setTibiadata({});
    }
  }, [tibiadata]);

  return (
    <>
      <div className="content">
        <h1> TIBIA PLUS</h1>
        <p> Find tibia players and statistics here!</p>
        <div>
          <img src={tibiaIcon} alt="tibia icon"></img>
        </div>
        <input
          type="text"
          placeholder="Character name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button className="btn" onClick={() => handleButtonClick(name)}>
          FIND
        </button>
        {Object.keys(tibiadata).length !== 0 && tibiadata.level !== 0 ? (
          <>
            <CharCard
              name={tibiadata.name}
              level={tibiadata.level}
              sex={tibiadata.sex}
              vocation={tibiadata.vocation}
              world={tibiadata.world}
              residence={tibiadata.residence}
              comment={tibiadata.comment}
              account_status={tibiadata.account_status}
              created={tibiadata.created}
              last_login={tibiadata.last_login}
            />
          </>
        ) : null}
      </div>
    </>
  );
}
