import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { getNotesForTuning } from "../../domain/GuitarTunings";

function GuitarSettings(props) {
  const { guitarTuning, setGuitarTuning, instrumentSound, setInstrumentSound, setGuitarTuningNotes } = useContext(AppContext);

  return (
    <>
      <div className="guitarSettings">
        <div className="selectGroup">
          <select
            matnativecontrol="true"
            defaultValue={"Clean"}
            required
            title="Sound"
            onChange={(e) => { setInstrumentSound({...instrumentSound, guitar: e.target.value}); e.target.blur();}}>
            <option value={"clean"}>Clean</option>
            <option value={"distorted"}>Distorted</option>
          </select>
        </div>
        <div className="selectGroup">
          <select
            matnativecontrol="true"
            defaultValue={"Standard"}
            required
            title="Tuning"
            onChange={(e) => { setGuitarTuning(e.target.value); e.target.blur(); setGuitarTuningNotes(getNotesForTuning(e.target.value))}}>
            <option value={"Standard"}>Standard &emsp;&emsp;&emsp;&emsp; E A D G B E</option>
            <option value={"Eb Standard"}>D#/Eb Standard &emsp; Eb Ab Db Gb Bb Eb</option>
            <option value={"D Standard"}>D Standard &emsp;&emsp;&emsp; D G C F A D</option>
            <option value={"Db Standard"}>C#/Db Standard &emsp; Db Gb B E Ab Db</option>
            <option value={"C Standard"}>C Standard &emsp;&emsp;&emsp; C F Bb Eb G C</option>
            <option value={"Drop D"}>Drop D &emsp;&emsp;&emsp;&emsp;&emsp; D A D G B E</option>
            <option value={"Drop Db"}>Drop C#/Db &emsp;&emsp;&emsp; Db Ab Db Gb Bb Eb</option>
            <option value={"Drop C"}>Drop C &emsp;&emsp;&emsp;&emsp;&emsp; C G C F A D</option>
            <option selected={guitarTuning === "Custom"} value={"Custom"} hidden>Custom</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default GuitarSettings;
