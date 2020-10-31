import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Logger from "../Logger";
import PlayGuitar from "./PlayGuitar";

function GuitarBody(props) {
  const { setCurrentInstrument } = useContext(AppContext);
  setCurrentInstrument("guitar");
  return (
    <>
      <Logger />
      <PlayGuitar />
    </>
  );
}

export default GuitarBody;
