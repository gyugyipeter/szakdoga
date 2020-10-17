import React, {useState, useContext} from "react";
import { Howl, Howler } from "howler";
import { getPiano } from "../domain/NoteFilePairs";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AppContext } from "./AppContext";
import PianoRepresentation from "./PianoRepresentation";
import PianoSettings from "./PianoSettings";
import "./Instrument.css"

const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const PlaySound = (src) => {
  const sound = new Howl({
    src,
  });
  sound.play();
};

function HandleKeyPress(props) {
  const {addLog, firstNote1, firstNote2, isKeyEventsDisabled} = useContext(AppContext);
  const {range1, range2} = props;

  function chooseNote1(index) {
    if(index < 12)
      return notes[index] + range1;
    else
      return notes[index % 12] + (range1 + 1);
  }

  function chooseNote2(index) {
    if(index < 12)
      return notes[index] + range2;
    else
      return notes[index % 12] + (range2 + 1);
  }

  return(
  <KeyboardEventHandler handleFocusableElements isDisabled={isKeyEventsDisabled}
      handleKeys={["q", "w", "e", "r", "t", "z", "u", "i", "o", "a", "s", "d", "f", "g", "h", "j", "k", "l",
      "y", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
      onKeyEvent={(key) => {
        switch (key) {
          //low
          case "y":
            addLog({ note: chooseNote1(firstNote1), key: "y" });
            PlaySound(getPiano().get(chooseNote1(firstNote1)));
            break;
          case "s":
            addLog({ note: chooseNote1(firstNote1 + 1), key: "s" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 1)));
            break;
          case "x":
            addLog({ note: chooseNote1((firstNote1) + 2), key: "x" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 2)));
            break;
          case "d":
            addLog({ note: chooseNote1(firstNote1 + 3), key: "d" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 3)));
            break;
          case "c":
            addLog({ note: chooseNote1(firstNote1 + 4), key: "c" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 4)));
            break;
          case "v":
            addLog({ note: chooseNote1(firstNote1 + 5), key: "v" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 5)));
            break;
          case "g":
            addLog({ note: chooseNote1(firstNote1 + 6), key: "g" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 6)));
            break;
          case "b":
            addLog({ note: chooseNote1(firstNote1 + 7), key: "b" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 7)));
            break;
          case "h":
            addLog({ note: chooseNote1(firstNote1 + 8), key: "h" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 8)));
            break;
          case "n":
            addLog({ note: chooseNote1(firstNote1 + 9), key: "n" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 9)));
            break;
          case "j":
            addLog({ note: chooseNote1(firstNote1 + 10), key: "j" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 10)));
            break;
          case "m":
            addLog({ note: chooseNote1(firstNote1 + 11), key: "m" });
            PlaySound(getPiano().get(chooseNote1(firstNote1 + 11)));
            break;
            
          //high
          case "w":
            addLog({ note: chooseNote2(firstNote2), key: "w" });
            PlaySound(getPiano().get(chooseNote2(firstNote2)));
            break;
          case "3":
            addLog({ note: chooseNote2(firstNote2 + 1), key: "3" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 1)));
            break;
          case "e":
            addLog({ note: chooseNote2(firstNote2 + 2), key: "e" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 2)));
            break;
          case "4":
            addLog({ note: chooseNote2(firstNote2 + 3), key: "4" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 3)));
            break;
          case "r":
            addLog({ note: chooseNote2(firstNote2 + 4), key: "r" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 4)));
            break;
          case "t":
            addLog({ note: chooseNote2(firstNote2 + 5), key: "t" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 5)));
            break;
          case "6":
            addLog({ note: chooseNote2(firstNote2 + 6), key: "6" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 6)));
            break;
          case "z":
            addLog({ note: chooseNote2(firstNote2 + 7), key: "z" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 7)));
            break;
          case "7":
            addLog({ note: chooseNote2(firstNote2 + 8), key: "7" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 8)));
            break;
          case "u":
            addLog({ note: chooseNote2(firstNote2 + 9), key: "u" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 9)));
            break;
          case "8":
            addLog({ note: chooseNote2(firstNote2 + 10), key: "8" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 10)));
            break;
          case "i":
            addLog({ note: chooseNote2(firstNote2 + 11), key: "i" });
            PlaySound(getPiano().get(chooseNote2(firstNote2 + 11)));
            break;
          default:
        }
      }}
    />)
};

function PlayPiano(props) {
  const [range1, setRange1] = useState(3);
  const [range2, setRange2] = useState(4);

  Howler.volume(1.0);
  return (
    <>
      <HandleKeyPress range1={range1} range2={range2}/>
      <div className="pianogroup">
        <PianoSettings/>
        <div className="piano">
          <div>
            <button onClick={()=>{setRange1(range1-1)}} disabled={range1<=1}><MdKeyboardArrowLeft size={100}/></button>
            <PianoRepresentation/>
            <button onClick={()=>{setRange1(range1+1)}} disabled={range1>=6}><MdKeyboardArrowRight size={100}/></button>
          </div>
          <div>
            <button onClick={()=>{setRange2(range2-1)}} disabled={range2<=1}><MdKeyboardArrowLeft size={100}/></button>
            <PianoRepresentation/>
            <button onClick={()=>{setRange2(range2+1)}} disabled={range2>=6}><MdKeyboardArrowRight size={100}/></button>
          </div>
        </div>
        <div className="row">
        <h5>Octaves:</h5>
        <div className="pianospace">
          <div>{range1}</div>
          <div>{range2}</div>
        </div>
        </div>
      </div>
    </>
  );
}

export default PlayPiano;
