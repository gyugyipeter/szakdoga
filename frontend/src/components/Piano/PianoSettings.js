import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import "../Instrument.css";

function PianoSettings(props) {
  const { setFirstNote1, setFirstNote2, range1, range2 } = useContext(AppContext);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td className="firstColumn">Starting Notes:</td>
            <td className="pianospace">
              <div>
                <select
                  required
                  onChange={(e) => { setFirstNote1(parseInt(e.target.value)); e.target.blur();}}
                  disabled={range1 === 6}
                >
                  <option selected={range1 === 6} value={0}>C</option>
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
                  onChange={(e) => { setFirstNote2(parseInt(e.target.value)); e.target.blur();}}
                  disabled={range2 === 6}
                >
                  <option selected={range2 === 6} value={0}>C</option>
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
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PianoSettings;
