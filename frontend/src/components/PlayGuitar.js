import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { Howler } from "howler";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { getDistortedGuitar, getCleanGuitar } from "../domain/NoteFilePairs";
import GuitarSettings from "./GuitarSettings";
import GuitarNeck from "./GuitarNeck";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

function HandleKeyPress(props) {
  const {
    addLog,
    firstNote1,
    range1,
    isKeyEventsDisabled,
    PlaySound,
  } = useContext(AppContext);

  function chooseNote(index) {
    if (index < 12) return notes[index] + range1;
    else return notes[index % 12] + (range1 + 1);
  }

  function keyDownEvent(indexToAdd, keyPressed, querySelector, event, whichFirstNote, whichFunction, whichGuitarSound) {
    if (!event.repeat) {
        addLog({ note: whichFunction(whichFirstNote + indexToAdd), key: keyPressed });
        PlaySound(whichGuitarSound().get(whichFunction(whichFirstNote + indexToAdd)));
        document.querySelector(querySelector).classList.add("pressed");
    }
  }

  return (
    <>
    <KeyboardEventHandler
      handleFocusableElements
      isDisabled={isKeyEventsDisabled}
      handleKeys={["all"]}
      onKeyEvent={(key, e) => {
        switch (key) {
          case "y":
            keyDownEvent(0, "y", "#string1Note1", e, firstNote1, chooseNote, getDistortedGuitar);
            break;
          case "s":
            keyDownEvent(1, "s", "#string1Note2", e, firstNote1, chooseNote, getCleanGuitar);
            break;
          case "x":
            keyDownEvent(2, "x", "#string1Note3", e, firstNote1, chooseNote, getDistortedGuitar);
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
            document.querySelector("#string1Note1").classList.remove("pressed");
            break;
          case "s":
            document.querySelector("#string1Note2").classList.remove("pressed");
            break;
          case "x":
            document.querySelector("#string1Note3").classList.remove("pressed");
            break;
          default:
        }
      }}
    />
    </>
  );
}

function PlayGuitar(props) {
  const { firstFretPos, setFirstFretPos } = useContext(AppContext);
  Howler.volume(0.1);
  return (
    <>
      <HandleKeyPress />
      <GuitarSettings />
      <div className="guitarNeckPosition">
        <button
          className="guitarNeckPositionArrow"
          disabled= {firstFretPos === 1}
          onClick={() => {
            setFirstFretPos(firstFretPos - 1);
          }}
        >
          <AiOutlineArrowLeft />
        </button>
        <GuitarNeck />
        <button
          className="guitarNeckPositionArrow"
          disabled= {firstFretPos === 15}
          onClick={() => {
            setFirstFretPos(firstFretPos + 1);
          }}
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </>
  );
}

export default PlayGuitar;
