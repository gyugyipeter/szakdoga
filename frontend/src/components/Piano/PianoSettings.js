import React, { useContext } from "react";
import { AppContext } from "../AppContext";

function PianoSettings(props) {
  const {
    setFirstPianoNote1,
    setFirstPianoNote2,
    pianoRange1,
    pianoRange2,
  } = useContext(AppContext);

  return (
    <div className="pianospace">
      <div>
        <select
          required
          disabled={pianoRange1 === 6}
          title="Select the first note to the left piano"
          onChange={(e) => {
            setFirstPianoNote1(parseInt(e.target.value));
            e.target.blur(); // to unfocus after selecting
          }}
        >
          <option selected={pianoRange1 === 6} value={0}>
            C
          </option>
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
          required
          disabled={pianoRange2 === 6}
          title="Select the first note to the right piano"
          onChange={(e) => {
            setFirstPianoNote2(parseInt(e.target.value));
            e.target.blur();
          }}
        >
          <option selected={pianoRange2 === 6} value={0}>
            C
          </option>
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
  );
}

export default PianoSettings;
