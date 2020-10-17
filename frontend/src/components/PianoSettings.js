import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "./Instrument.css";

function PianoSettings(props) {
  const { setFirstNote1, setFirstNote2 } = useContext(AppContext);
  return (
    <>
      <div className="row">
        <h5>Starting Notes:</h5>
        <div className="pianospace">
          <div>
            <select
              matnativecontrol="true"
              defaultValue={0}
              required
              onChange={(e) => setFirstNote1(parseInt(e.target.value))}
            >
              <option value={0}>C</option>
              <option value={1}>C#/Db</option>
              <option value={2}>D</option>
              <option value={3}>D#/Eb</option>
              <option value={4}>E</option>
              <option value={5}>F</option>
              <option value={6}>F#/Gb</option>
              <option value={7}>G</option>
              <option value={8}>G#/Ab</option>
              <option value={9}>A</option>
              <option value={10}>A#/Bb</option>
              <option value={11}>B</option>
            </select>
          </div>
          <div>
            <select
              matnativecontrol="true"
              defaultValue={0}
              required
              onChange={(e) => setFirstNote2(parseInt(e.target.value))}
            >
              <option value={0}>C</option>
              <option value={1}>C#/Db</option>
              <option value={2}>D</option>
              <option value={3}>D#/Eb</option>
              <option value={4}>E</option>
              <option value={5}>F</option>
              <option value={6}>F#/Gb</option>
              <option value={7}>G</option>
              <option value={8}>G#/Ab</option>
              <option value={9}>A</option>
              <option value={10}>A#/Bb</option>
              <option value={11}>B</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default PianoSettings;
