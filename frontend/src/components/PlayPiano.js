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
    range1,
    range2,
    isKeyEventsDisabled,
    PlaySound,
  } = useContext(AppContext);

  function chooseNote1(index) {
    if (index < 12) return notes[index] + range1;
    else return notes[index % 12] + (range1 + 1);
  }

  function chooseNote2(index) {
    if (index < 12) return notes[index] + range2;
    else return notes[index % 12] + (range2 + 1);
  }

  function keyDownEvent(indexToAdd, keyPressed, querySelector, event, whichFirstNote, whichFunction) {
    if (!event.repeat) {
        addLog({ note: whichFunction(whichFirstNote + indexToAdd), key: keyPressed });
        PlaySound(getPiano().get(whichFunction(whichFirstNote + indexToAdd)));
        document.querySelector(querySelector).classList.add("pressed");
    }
  }

  return (
    <>
    <KeyboardEventHandler
      handleFocusableElements
      isDisabled={isKeyEventsDisabled}
      handleKeys={["alphanumeric"]}
      onKeyEvent={(key, e) => {
        switch (key) {
          //low
          case "y":
            keyDownEvent(0, "y", "#firstPianonote-1", e, firstNote1, chooseNote1);
            break;
          case "s":
            keyDownEvent(1, "s", "#firstPianonote-2", e, firstNote1, chooseNote1);
            break;
          case "x":
            keyDownEvent(2, "x", "#firstPianonote-3", e, firstNote1, chooseNote1);
            break;
          case "d":
            keyDownEvent(3, "d", "#firstPianonote-4", e, firstNote1, chooseNote1);
            break;
          case "c":
            keyDownEvent(4, "c", "#firstPianonote-5", e, firstNote1, chooseNote1);
            break;
          case "v":
            keyDownEvent(5, "v", "#firstPianonote-6", e, firstNote1, chooseNote1);
            break;
          case "g":
            keyDownEvent(6, "g", "#firstPianonote-7", e, firstNote1, chooseNote1);
            break;
          case "b":
            keyDownEvent(7, "b", "#firstPianonote-8", e, firstNote1, chooseNote1);
            break;
          case "h":
            keyDownEvent(8, "h", "#firstPianonote-9", e, firstNote1, chooseNote1);
            break;
          case "n":
            keyDownEvent(9, "n", "#firstPianonote-10", e, firstNote1, chooseNote1);
            break;
          case "j":
            keyDownEvent(10, "j", "#firstPianonote-11", e, firstNote1, chooseNote1);
            break;
          case "m":
            keyDownEvent(11, "m", "#firstPianonote-12", e, firstNote1, chooseNote1);
            break;

          //high
          case "w":
            keyDownEvent(0, "w", "#secondPianonote-1", e, firstNote2, chooseNote2);
            break;
          case "3":
            keyDownEvent(1, "3", "#secondPianonote-2", e, firstNote2, chooseNote2);
            break;
          case "e":
            keyDownEvent(2, "e", "#secondPianonote-3", e, firstNote2, chooseNote2);
            break;
          case "4":
            keyDownEvent(3, "4", "#secondPianonote-4", e, firstNote2, chooseNote2);
            break;
          case "r":
            keyDownEvent(4, "r", "#secondPianonote-5", e, firstNote2, chooseNote2);
            break;
          case "t":
            keyDownEvent(5, "t", "#secondPianonote-6", e, firstNote2, chooseNote2);
            break;
          case "6":
            keyDownEvent(6, "6", "#secondPianonote-7", e, firstNote2, chooseNote2);
            break;
          case "z":
            keyDownEvent(7, "z", "#secondPianonote-8", e, firstNote2, chooseNote2);
            break;
          case "7":
            keyDownEvent(8, "7", "#secondPianonote-9", e, firstNote2, chooseNote2);
            break;
          case "u":
            keyDownEvent(9, "u", "#secondPianonote-10", e, firstNote2, chooseNote2);
            break;
          case "8":
            keyDownEvent(10, "8", "#secondPianonote-11", e, firstNote2, chooseNote2);
            break;
          case "i":
            keyDownEvent(11, "i", "#secondPianonote-12", e, firstNote2, chooseNote2);
            break;
          default:
        }
      }}
    />
    <KeyboardEventHandler
      handleFocusableElements
      isDisabled={isKeyEventsDisabled}
      handleEventType = {"keyup"}
      handleKeys={["alphanumeric"]}
      onKeyEvent={(key, e) => {
        switch (key) {
          
          case "y":
            document.querySelector("#firstPianonote-1").classList.remove("pressed");
            break;
          case "s":
            document.querySelector("#firstPianonote-2").classList.remove("pressed");
            break;
          case "x":
            document.querySelector("#firstPianonote-3").classList.remove("pressed");
            break;
          case "d":
            document.querySelector("#firstPianonote-4").classList.remove("pressed");
            break;
          case "c":
            document.querySelector("#firstPianonote-5").classList.remove("pressed");
            break;
          case "v":
            document.querySelector("#firstPianonote-6").classList.remove("pressed");
            break;
          case "g":
            document.querySelector("#firstPianonote-7").classList.remove("pressed");
            break;
          case "b":
            document.querySelector("#firstPianonote-8").classList.remove("pressed");
            break;
          case "h":
            document.querySelector("#firstPianonote-9").classList.remove("pressed");
            break;
          case "n":
            document.querySelector("#firstPianonote-10").classList.remove("pressed");
            break;
          case "j":
            document.querySelector("#firstPianonote-11").classList.remove("pressed");
            break;
          case "m":
            document.querySelector("#firstPianonote-12").classList.remove("pressed");
            break;
            
          case "w":
            document.querySelector("#secondPianonote-1").classList.remove("pressed");
            break;
          case "3":
            document.querySelector("#secondPianonote-2").classList.remove("pressed");
            break;
          case "e":
            document.querySelector("#secondPianonote-3").classList.remove("pressed");
            break;
          case "4":
            document.querySelector("#secondPianonote-4").classList.remove("pressed");
            break;
          case "r":
            document.querySelector("#secondPianonote-5").classList.remove("pressed");
            break;
          case "t":
            document.querySelector("#secondPianonote-6").classList.remove("pressed");
            break;
          case "6":
            document.querySelector("#secondPianonote-7").classList.remove("pressed");
            break;
          case "z":
            document.querySelector("#secondPianonote-8").classList.remove("pressed");
            break;
          case "7":
            document.querySelector("#secondPianonote-9").classList.remove("pressed");
            break;
          case "u":
            document.querySelector("#secondPianonote-10").classList.remove("pressed");
            break;
          case "8":
            document.querySelector("#secondPianonote-11").classList.remove("pressed");
            break;
          case "i":
            document.querySelector("#secondPianonote-12").classList.remove("pressed");
            break;
          default:
        }
      }}
    />
    </>
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
    firstNote1,
    firstNote2
  } = useContext(AppContext);

  Howler.volume(1.0);
  return (
    <>
      <HandleKeyPress />
      <div className="pianogroup">
        <PianoSettings />
        <table>
          <tbody>
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
                  <PianoRepresentation firstNote={firstNote1} id={"firstPiano"}/>
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
                  <PianoRepresentation firstNote={firstNote2} id={"secondPiano"}/>
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
          </tbody>
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
