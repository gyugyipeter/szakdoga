import React, { useContext } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AppContext } from "../AppContext";
import { getNotes } from "../../domain/NoteFilePairs";
import "./GuitarNeck.css";

const dottedFrets = [3, 5, 7, 9, 15, 17, 19, 21];

function String(props) {
  const { stringID, ids } = props;
  const {
    firstFretPos,
    setGuitarTuning,
    guitarTuningNotes,
    setGuitarTuningNotes,
  } = useContext(AppContext);

  function datasForTuning(currString) {
    const currentNote = guitarTuningNotes[currString];
    const note = currentNote.substring(0, currentNote.length - 1);
    const noteIndex = getNotes().indexOf(note);
    const octave = currentNote.charAt(currentNote.length - 1);
    return { note, noteIndex, octave };
  }

  // have to jump down an octave in case note is C
  function tuneDown(currentString) {
    let { note, noteIndex, octave } = datasForTuning(currentString);
    if (note === "C")
      setGuitarTuningNotes({
        ...guitarTuningNotes,
        [currentString]: getNotes()[getNotes().length - 1] + --octave,
      });
    else
      setGuitarTuningNotes({
        ...guitarTuningNotes,
        [currentString]: getNotes()[noteIndex - 1] + octave,
      });
  }

  // have to jump up an octave in case note is B
  function tuneUp(currentString) {
    let { note, noteIndex, octave } = datasForTuning(currentString);
    if (note === "B")
      setGuitarTuningNotes({
        ...guitarTuningNotes,
        [currentString]: getNotes()[0] + ++octave,
      });
    else
      setGuitarTuningNotes({
        ...guitarTuningNotes,
        [currentString]: getNotes()[noteIndex + 1] + octave,
      });
  }

  const stringNumber = stringID.charAt(stringID.length - 1);

  function checkTuningTooLow() {
    if (Object.values(guitarTuningNotes).indexOf("C1") === stringNumber - 1)
      return true;
    return false;
  }

  function checkTuningTooHigh() {
    if (Object.values(guitarTuningNotes).indexOf("E3") === stringNumber - 1)
      return true;
    return false;
  }

  function displayIndex(toAdd) {
    const index = getNotes().indexOf(datasForTuning(stringNumber).note) + toAdd;
    return getNotes()[index % 12];
  }

  return (
    <tr className="guitarRow">
      <td className="tuningColumn">
        <button
          className="tunerArrow"
          disabled={checkTuningTooLow()}
          onClick={() => {
            setGuitarTuning("Custom");
            tuneDown(stringNumber);
          }}
        >
          <MdKeyboardArrowLeft />
        </button>
      </td>
      <td className="tuningColumn">{guitarTuningNotes[stringNumber]}</td>
      <td className="tuningColumn">
        <button
          className="tunerArrow"
          disabled={checkTuningTooHigh()}
          onClick={() => {
            setGuitarTuning("Custom");
            tuneUp(stringNumber);
          }}
        >
          <MdKeyboardArrowRight />
        </button>
      </td>
      <td className={`nullfret ${stringID}`} id={ids[0]}>
        <span>{displayIndex(0)}</span>
      </td>
      <td className={stringID} id={ids[1]}>
        <span>{displayIndex(1 + firstFretPos - 1)}</span>
      </td>
      <td className={stringID} id={ids[2]}>
        <span>{displayIndex(2 + firstFretPos - 1)}</span>
      </td>
      <td className={stringID} id={ids[3]}>
        <span>{displayIndex(3 + firstFretPos - 1)}</span>
      </td>
      <td className={stringID} id={ids[4]}>
        <span>{displayIndex(4 + firstFretPos - 1)}</span>
      </td>
      <td className={stringID} id={ids[5]}>
        <span>{displayIndex(5 + firstFretPos - 1)}</span>
      </td>
      <td className={stringID} id={ids[6]}>
        <span>{displayIndex(6 + firstFretPos - 1)}</span>
      </td>
      <td className={stringID} id={ids[7]}>
        <span>{displayIndex(7 + firstFretPos - 1)}</span>
      </td>
      <td className={stringID} id={ids[8]}>
        <span>{displayIndex(8 + firstFretPos - 1)}</span>
      </td>
    </tr>
  );
}

function GuitarNeck(props) {
  const { firstFretPos } = useContext(AppContext);

  // position of dots on the neck
  function headerStyle(index) {
    if (dottedFrets.includes(index)) return "dot";
    if (index === 12) return "twelveFretDot twelveFretDot2";
    return "";
  }

  return (
    <table className="guitarTable">
      <thead>
        <tr className="fretNumbers">
          <th></th>
          <th></th>
          <th></th>
          <th className="nullheader">0</th>
          <th className={headerStyle(firstFretPos)}>{firstFretPos}</th>
          <th className={headerStyle(firstFretPos + 1)}>{firstFretPos + 1}</th>
          <th className={headerStyle(firstFretPos + 2)}>{firstFretPos + 2}</th>
          <th className={headerStyle(firstFretPos + 3)}>{firstFretPos + 3}</th>
          <th className={headerStyle(firstFretPos + 4)}>{firstFretPos + 4}</th>
          <th className={headerStyle(firstFretPos + 5)}>{firstFretPos + 5}</th>
          <th className={headerStyle(firstFretPos + 6)}>{firstFretPos + 6}</th>
          <th className={headerStyle(firstFretPos + 7)}>{firstFretPos + 7}</th>
        </tr>
      </thead>
      <tbody>
        { /* every position needs a unique id for displaying its note on keydown events */ }
        <String stringID={"string6"} ids={["string6Note1", "string6Note2", "string6Note3", "string6Note4", "string6Note5", "string6Note6", "string6Note7", "string6Note8", "string6Note9"] }/>
        <String stringID={"string5"} ids={["string5Note1", "string5Note2", "string5Note3", "string5Note4", "string5Note5", "string5Note6", "string5Note7", "string5Note8", "string5Note9"] }/>
        <String stringID={"string4"} ids={["string4Note1", "string4Note2", "string4Note3", "string4Note4", "string4Note5", "string4Note6", "string4Note7", "string4Note8", "string4Note9"] }/>
        <String stringID={"string3"} ids={["string3Note1", "string3Note2", "string3Note3", "string3Note4", "string3Note5", "string3Note6", "string3Note7", "string3Note8", "string3Note9"] }/>
        <String stringID={"string2"} ids={["string2Note1", "string2Note2", "string2Note3", "string2Note4", "string2Note5", "string2Note6", "string2Note7", "string2Note8", "string2Note9"] }/>
        <String stringID={"string1"} ids={["string1Note1", "string1Note2", "string1Note3", "string1Note4", "string1Note5", "string1Note6", "string1Note7", "string1Note8", "string1Note9"] }/>
      </tbody>
    </table>
  );
}

export default GuitarNeck;
