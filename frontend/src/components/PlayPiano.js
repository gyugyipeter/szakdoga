import React, { useContext } from "react";
import { Howler } from "howler";
import { getPiano } from "../domain/NoteFilePairs";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { AppContext } from "./AppContext";
import PianoRepresentation from "./PianoRepresentation";
import PianoSettings from "./PianoSettings";
import "./Instrument.css";

const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

function HandleKeyPress(props) {
  const {
    addLog,
    firstNote1,
    firstNote2,
    isKeyEventsDisabled,
    PlaySound,
  } = useContext(AppContext);
  const { range1, range2 } = props;

  function chooseNote1(index) {
    if (index < 12) return notes[index] + range1;
    else return notes[index % 12] + (range1 + 1);
  }

  function chooseNote2(index) {
    if (index < 12) return notes[index] + range2;
    else return notes[index % 12] + (range2 + 1);
  }

  return (
    <KeyboardEventHandler
      handleFocusableElements
      isDisabled={isKeyEventsDisabled}
      handleKeys={["q", "w", "e", "r", "t", "z", "u", "i", "o", "a", "s", "d", "f", "g", "h", "j", "k", "l",
      "y", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
      onKeyEvent={(key, e) => {
        switch (key) {
          //low
          case "y":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1), key: "y" });
              PlaySound(getPiano().get(chooseNote1(firstNote1)));
            }
            break;
          case "s":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 1), key: "s" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 1)));
            }
            break;
          case "x":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 2), key: "x" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 2)));
            }
            break;
          case "d":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 3), key: "d" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 3)));
            }
            break;
          case "c":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 4), key: "c" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 4)));
            }
            break;
          case "v":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 5), key: "v" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 5)));
            }
            break;
          case "g":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 6), key: "g" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 6)));
            }
            break;
          case "b":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 7), key: "b" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 7)));
            }
            break;
          case "h":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 8), key: "h" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 8)));
            }
            break;
          case "n":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 9), key: "n" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 9)));
            }
            break;
          case "j":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 10), key: "j" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 10)));
            }
            break;
          case "m":
            if (!e.repeat) {
              addLog({ note: chooseNote1(firstNote1 + 11), key: "m" });
              PlaySound(getPiano().get(chooseNote1(firstNote1 + 11)));
            }
            break;

          //high
          case "w":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2), key: "w" });
              PlaySound(getPiano().get(chooseNote2(firstNote2)));
            }
            break;
          case "3":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 1), key: "3" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 1)));
            }
            break;
          case "e":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 2), key: "e" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 2)));
            }
            break;
          case "4":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 3), key: "4" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 3)));
            }
            break;
          case "r":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 4), key: "r" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 4)));
            }
            break;
          case "t":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 5), key: "t" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 5)));
            }
            break;
          case "6":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 6), key: "6" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 6)));
            }
            break;
          case "z":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 7), key: "z" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 7)));
            }
            break;
          case "7":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 8), key: "7" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 8)));
            }
            break;
          case "u":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 9), key: "u" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 9)));
            }
            break;
          case "8":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 10), key: "8" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 10)));
            }
            break;
          case "i":
            if (!e.repeat) {
              addLog({ note: chooseNote2(firstNote2 + 11), key: "i" });
              PlaySound(getPiano().get(chooseNote2(firstNote2 + 11)));
            }
            break;
          default:
        }
      }}
    />
  );
}

function PlayPiano(props) {
  const {
    range1,
    setRange1,
    range2,
    setRange2,
    setFirstNote1,
    setFirstNote2,
  } = useContext(AppContext);

  Howler.volume(1.0);
  return (
    <>
      <HandleKeyPress range1={range1} range2={range2} />
      <div className="pianogroup">
        <PianoSettings />
        <table>
          <tr>
            <td className="firstColumn"></td>
            <td>
              <div className="pianoGroup">
                <button
                  className="arrow"
                  onClick={() => {
                    setRange1(range1 - 1);
                  }}
                  disabled={range1 <= 1}
                >
                  <MdKeyboardArrowLeft size={100} />
                </button>
                <PianoRepresentation />
                <button
                  className="arrow"
                  onClick={() => {
                    if (range1 + 1 === 6) setFirstNote1(0);
                    setRange1(range1 + 1);
                  }}
                  disabled={range1 >= 6}
                >
                  <MdKeyboardArrowRight size={100} />
                </button>
              </div>
            </td>
            <td>
              <div className="pianoGroup">
                <button
                  className="arrow"
                  onClick={() => {
                    setRange2(range2 - 1);
                  }}
                  disabled={range2 <= 1}
                >
                  <MdKeyboardArrowLeft size={100} />
                </button>
                <PianoRepresentation />
                <button
                  className="arrow"
                  onClick={() => {
                    if (range2 + 1 === 6) setFirstNote2(0);
                    setRange2(range2 + 1);
                  }}
                  disabled={range2 >= 6}
                >
                  <MdKeyboardArrowRight size={100} />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="firstColumn">Octaves:</td>
            <td>{range1}</td>
            <td>{range2}</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default PlayPiano;

/*

A# 3
G# 4

V N 6
Y N Z
N E U
            I
            E
X V N 6
Z
Y N 6
C E B
Y V N
*/
