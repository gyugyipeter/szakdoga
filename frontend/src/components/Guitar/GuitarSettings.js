import React from "react";

function GuitarSettings(props) {
  return (
    <>
      <div className="guitarSettings">
        <div className="selectGroup">
          Sound:
          <select matnativecontrol="true" defaultValue={"Clean"} required>
            <option value={"Clean"}>Clean</option>
            <option value={"Distorted"}>Distorted</option>
          </select>
        </div>
        <div className="selectGroup">
          Tuning:
          <select matnativecontrol="true" defaultValue={"Standard"} required>
            <option value={"Standard"}>Standard E A D G B E</option>
            <option value={"Eb Standard"}>D#/Eb Standard  Eb Ab Db Gb Bb Eb</option>
            <option value={"D Standard"}>D Standard D G C F A D</option>
            <option value={"Db Standard"}>C#/Db Standard  Db Gb B E AB DB</option>
            <option value={"C Standard"}>C Standard C F Bb Eb G C</option>
            <option value={"Drop D"}>Drop D   D A D G B E</option>
            <option value={"Drop Db"}>Drop C#/Db  Db Ab Db Gb Bb Eb</option>
            <option value={"Drop C"}>Drop C   C G C F A D</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default GuitarSettings;
