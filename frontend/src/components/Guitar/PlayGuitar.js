import React, { useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Howler } from "howler";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { getDistortedGuitar, getCleanGuitar, getNotes } from "../../domain/NoteFilePairs";
import GuitarSettings from "./GuitarSettings";
import GuitarNeck from "./GuitarNeck";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

function HandleKeyPress(props) {
  const {
    addLog,
    firstNote1,
    range1,
    isKeyEventsDisabled,
    PlaySound,
    instrumentSound
  } = useContext(AppContext);

  function chooseNote(index) {
    if (index < 12) return getNotes()[index] + range1;
    else return getNotes()[index % 12] + (range1 + 1);
  }

  function keyDownEvent(indexToAdd, keyPressed, querySelector, event, whichFirstNote) {
    if (!event.repeat) {
        addLog({ note: chooseNote(whichFirstNote + indexToAdd), key: keyPressed });
        if(instrumentSound.guitar === "clean")
          PlaySound(getCleanGuitar().get(chooseNote(whichFirstNote + indexToAdd)));
        if(instrumentSound.guitar === "distorted")
          PlaySound(getDistortedGuitar().get(chooseNote(whichFirstNote + indexToAdd)));
        document.querySelector(querySelector).classList.add("pressed");
    }
  }

  useEffect(() => {Howler.stop()}, [])

  return (
    <>
    <KeyboardEventHandler
      handleFocusableElements
      isDisabled={isKeyEventsDisabled}
      handleKeys={["all"]}
      onKeyEvent={(key, e) => {
        switch (key) {
          case "y":
            keyDownEvent(0, "y", "#string1Note1", e, firstNote1);
            break;
          case "x":
            keyDownEvent(1, "s", "#string1Note2", e, firstNote1);
            break;
          case "c":
            keyDownEvent(2, "x", "#string1Note3", e, firstNote1);
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
          case "x":
            document.querySelector("#string1Note2").classList.remove("pressed");
            break;
          case "c":
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
          className="guitarNeckPositionArrow leftNeckArrow"
          disabled= {firstFretPos === 1}
          onClick={() => {
            setFirstFretPos(firstFretPos - 1);
          }}
        >
          <AiOutlineArrowLeft />
        </button>
        <GuitarNeck />
        <button
          className="guitarNeckPositionArrow rightNeckArrow"
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
