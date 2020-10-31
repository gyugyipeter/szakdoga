import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { getNotesForTuning } from "../../domain/GuitarTunings";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { getNotes } from "../../domain/NoteFilePairs";
import "./GuitarNeck.css";

const dottedFrets = [3, 5, 7, 9, 15, 17, 19, 21];

function String(props) {
  const {ids, stringID } = props;
  const { guitarTuning, setGuitarTuning } = useContext(AppContext);

  return (
    <tr>
      <td className="tuningColumn">
        <button className="tunerArrow"
        onClick={() => {
          setGuitarTuning("Custom");
        }}>
          <MdKeyboardArrowLeft />
        </button>
      </td>
      <td className="tuningColumn">{getNotesForTuning(guitarTuning)[stringID.charAt(stringID.length - 1) - 1]}</td>
      <td className="tuningColumn">
        <button className="tunerArrow"
        onClick={() => {
          setGuitarTuning("Custom");
        }}>
          <MdKeyboardArrowRight />
        </button>
      </td>
      <td className={`nullfret ${stringID}`} id={ids[0]}> {getNotes()[4]} </td>
      <td className={stringID} id={ids[1]}> {getNotes()[5]} </td>
      <td className={stringID} id={ids[2]}> {getNotes()[6]} </td>
      <td className={stringID} id={ids[3]}> {getNotes()[7]} </td>
      <td className={stringID} id={ids[4]}> {getNotes()[8]} </td>
      <td className={stringID} id={ids[5]}> {getNotes()[9]} </td>
      <td className={stringID} id={ids[6]}> {getNotes()[10]} </td>
      <td className={stringID} id={ids[7]}> {getNotes()[11]} </td>
      <td className={stringID} id={ids[8]}> {getNotes()[0]} </td>
    </tr>
  );
}

function GuitarNeck(props) {
  const { firstFretPos } = useContext(AppContext);

  return (
    <table className="guitarTable">
      <thead>
        <tr className="fretNumbers">
          <th></th>
          <th></th>
          <th></th>
          <th className="nullheader">0</th>
          <th className={(dottedFrets.includes(firstFretPos) && "dot") || (firstFretPos === 12 && "twelveFretDot twelveFretDot2")}>{firstFretPos}</th>
          <th className={(dottedFrets.includes(firstFretPos + 1) && "dot") || (firstFretPos + 1 === 12 && "twelveFretDot twelveFretDot2")}>{firstFretPos + 1}</th>
          <th className={(dottedFrets.includes(firstFretPos + 2) && "dot") || (firstFretPos + 2 === 12 && "twelveFretDot twelveFretDot2")}>{firstFretPos + 2}</th>
          <th className={(dottedFrets.includes(firstFretPos + 3) && "dot") || (firstFretPos + 3 === 12 && "twelveFretDot twelveFretDot2")}>{firstFretPos + 3}</th>
          <th className={(dottedFrets.includes(firstFretPos + 4) && "dot") || (firstFretPos + 4 === 12 && "twelveFretDot twelveFretDot2")}>{firstFretPos + 4}</th>
          <th className={(dottedFrets.includes(firstFretPos + 5) && "dot") || (firstFretPos + 5 === 12 && "twelveFretDot twelveFretDot2")}>{firstFretPos + 5}</th>
          <th className={(dottedFrets.includes(firstFretPos + 6) && "dot") || (firstFretPos + 6 === 12 && "twelveFretDot twelveFretDot2")}>{firstFretPos + 6}</th>
          <th className={(dottedFrets.includes(firstFretPos + 7) && "dot") || (firstFretPos + 7 === 12 && "twelveFretDot twelveFretDot2")}>{firstFretPos + 7}</th>
        </tr>
      </thead>
      <tbody>
        <String stringID={"string6"} ids={["string1Note1", "string1Note2", "string1Note3", "string1Note4", "string1Note5", "string1Note6", "string1Note7", "string1Note8", "string1Note9"] }/>
        <String stringID={"string5"} ids={["string2Note1", "string2Note2", "string2Note3", "string2Note4", "string2Note5", "string2Note6", "string2Note7", "string2Note8", "string2Note9"] }/>
        <String stringID={"string4"} ids={["string3Note1", "string3Note2", "string3Note3", "string3Note4", "string3Note5", "string3Note6", "string3Note7", "string3Note8", "string3Note9"] }/>
        <String stringID={"string3"} ids={["string4Note1", "string4Note2", "string4Note3", "string4Note4", "string4Note5", "string4Note6", "string4Note7", "string4Note8", "string4Note9"] }/>
        <String stringID={"string2"} ids={["string5Note1", "string5Note2", "string5Note3", "string5Note4", "string5Note5", "string5Note6", "string5Note7", "string5Note8", "string5Note9"] }/>
        <String stringID={"string1"} ids={["string6Note1", "string6Note2", "string6Note3", "string6Note4", "string6Note5", "string6Note6", "string6Note7", "string6Note8", "string6Note9"] }/>
      </tbody>
    </table>
  );
}

export default GuitarNeck;
