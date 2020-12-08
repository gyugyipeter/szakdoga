import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../AppContext";
import { Howler } from "howler";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { getDistortedGuitar, getCleanGuitar, getNotes } from "../../domain/NoteFilePairs";
import { getStringNumber } from "../../domain/GuitarHelper";
import GuitarSettings from "./GuitarSettings";
import GuitarNeck from "./GuitarNeck";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

function HandleKeyPress(props) {
  const {
    addLog,
    isKeyEventsDisabled,
    PlayGuitarSound,
    instrumentSound,
    guitarTuningNotes,
    firstFretPos,
  } = useContext(AppContext);

  // generates the name of the audio file
  function chooseNote(firstNote, indexToAdd) {
    const note = firstNote.slice(0, -1);
    const noteIndex = getNotes().indexOf(note);
    // fret number
    let newIndex = noteIndex + indexToAdd;
    // hand position on neck
    if (indexToAdd !== 0) newIndex += firstFretPos - 1;
    const octave = firstNote.charAt(firstNote.length - 1);
    // decides how many octaves to add to the note
    if (newIndex < 12) return getNotes()[newIndex] + octave;
    else if (newIndex < 24)
      return getNotes()[newIndex % 12] + (parseInt(octave) + 1);
    else return getNotes()[newIndex % 12] + (parseInt(octave) + 2);
  }

  function keyDownEvent(indexToAdd, keyPressed, querySelector, event, firstNote) {
    if (!event.repeat) {
      addLog({ note: chooseNote(firstNote, indexToAdd), key: keyPressed });
      if (instrumentSound.guitar === "clean")
        PlayGuitarSound(
          getCleanGuitar().get(chooseNote(firstNote, indexToAdd)),
          getStringNumber(keyPressed)
        );
      if (instrumentSound.guitar === "distorted")
        PlayGuitarSound(
          getDistortedGuitar().get(chooseNote(firstNote, indexToAdd)),
          getStringNumber(keyPressed)
        );
      document.querySelector(querySelector).classList.add("pressed");
    }
  }

  useEffect(() => {Howler.stop()}, [])

  return (
    <>
    <KeyboardEventHandler
      handleFocusableElements
      isDisabled={isKeyEventsDisabled}
      handleKeys={["alphanumeric", ".", ",", "shift+q", "shift+w", "shift+e", "shift+r", "shift+t", "shift+z", "shift+u", "shift+i", "shift+o",
                  "shift+1", "shift+2", "shift+3", "shift+4", "shift+5", "shift+6", "shift+7", "shift+8", "shift+9"]}
      onKeyEvent={(key, e) => {
        switch (key) {
          //string1
          case "y":
            keyDownEvent(0, "y", "#string1Note1", e, guitarTuningNotes[1]);
            break;
          case "x":
            keyDownEvent(1, "x", "#string1Note2", e, guitarTuningNotes[1]);
            break;
          case "c":
            keyDownEvent(2, "c", "#string1Note3", e, guitarTuningNotes[1]);
            break;
          case "v":
            keyDownEvent(3, "v", "#string1Note4", e, guitarTuningNotes[1]);
            break;
          case "b":
            keyDownEvent(4, "b", "#string1Note5", e, guitarTuningNotes[1]);
            break;
          case "n":
            keyDownEvent(5, "n", "#string1Note6", e, guitarTuningNotes[1]);
            break;
          case "m":
            keyDownEvent(6, "m", "#string1Note7", e, guitarTuningNotes[1]);
            break;
          case ",":
            keyDownEvent(7, ",", "#string1Note8", e, guitarTuningNotes[1]);
            break;
          case ".":
            keyDownEvent(8, ".", "#string1Note9", e, guitarTuningNotes[1]);
            break;
          //string2
          case "a":
            keyDownEvent(0, "a", "#string2Note1", e, guitarTuningNotes[2]);
            break;
          case "s":
            keyDownEvent(1, "s", "#string2Note2", e, guitarTuningNotes[2]);
            break;
          case "d":
            keyDownEvent(2, "d", "#string2Note3", e, guitarTuningNotes[2]);
            break;
          case "f":
            keyDownEvent(3, "f", "#string2Note4", e, guitarTuningNotes[2]);
            break;
          case "g":
            keyDownEvent(4, "g", "#string2Note5", e, guitarTuningNotes[2]);
            break;
          case "h":
            keyDownEvent(5, "h", "#string2Note6", e, guitarTuningNotes[2]);
            break;
          case "j":
            keyDownEvent(6, "j", "#string2Note7", e, guitarTuningNotes[2]);
            break;
          case "k":
            keyDownEvent(7, "k", "#string2Note8", e, guitarTuningNotes[2]);
            break;
          case "l":
            keyDownEvent(8, "l", "#string2Note9", e, guitarTuningNotes[2]);
            break;
          //string3
          case "q":
            keyDownEvent(0, "q", "#string3Note1", e, guitarTuningNotes[3]);
            break;
          case "w":
            keyDownEvent(1, "w", "#string3Note2", e, guitarTuningNotes[3]);
            break;
          case "e":
            keyDownEvent(2, "e", "#string3Note3", e, guitarTuningNotes[3]);
            break;
          case "r":
            keyDownEvent(3, "r", "#string3Note4", e, guitarTuningNotes[3]);
            break;
          case "t":
            keyDownEvent(4, "t", "#string3Note5", e, guitarTuningNotes[3]);
            break;
          case "z":
            keyDownEvent(5, "z", "#string3Note6", e, guitarTuningNotes[3]);
            break;
          case "u":
            keyDownEvent(6, "u", "#string3Note7", e, guitarTuningNotes[3]);
            break;
          case "i":
            keyDownEvent(7, "i", "#string3Note8", e, guitarTuningNotes[3]);
            break;
          case "o":
            keyDownEvent(8, "o", "#string3Note9", e, guitarTuningNotes[3]);
            break;
          //string4
          case "1":
            keyDownEvent(0, "1", "#string4Note1", e, guitarTuningNotes[4]);
            break;
          case "2":
            keyDownEvent(1, "2", "#string4Note2", e, guitarTuningNotes[4]);
            break;
          case "3":
            keyDownEvent(2, "3", "#string4Note3", e, guitarTuningNotes[4]);
            break;
          case "4":
            keyDownEvent(3, "4", "#string4Note4", e, guitarTuningNotes[4]);
            break;
          case "5":
            keyDownEvent(4, "5", "#string4Note5", e, guitarTuningNotes[4]);
            break;
          case "6":
            keyDownEvent(5, "6", "#string4Note6", e, guitarTuningNotes[4]);
            break;
          case "7":
            keyDownEvent(6, "7", "#string4Note7", e, guitarTuningNotes[4]);
            break;
          case "8":
            keyDownEvent(7, "8", "#string4Note8", e, guitarTuningNotes[4]);
            break;
          case "9":
            keyDownEvent(8, "9", "#string4Note9", e, guitarTuningNotes[4]);
            break;
          //string5
          case "shift+q":
            keyDownEvent(0, "shift+q", "#string5Note1", e, guitarTuningNotes[5]);
            break;
          case "shift+w":
            keyDownEvent(1, "shift+w", "#string5Note2", e, guitarTuningNotes[5]);
            break;
          case "shift+e":
            keyDownEvent(2, "shift+e", "#string5Note3", e, guitarTuningNotes[5]);
            break;
          case "shift+r":
            keyDownEvent(3, "shift+r", "#string5Note4", e, guitarTuningNotes[5]);
            break;
          case "shift+t":
            keyDownEvent(4, "shift+t", "#string5Note5", e, guitarTuningNotes[5]);
            break;
          case "shift+z":
            keyDownEvent(5, "shift+z", "#string5Note6", e, guitarTuningNotes[5]);
            break;
          case "shift+u":
            keyDownEvent(6, "shift+u", "#string5Note7", e, guitarTuningNotes[5]);
            break;
          case "shift+i":
            keyDownEvent(7, "shift+i", "#string5Note8", e, guitarTuningNotes[5]);
            break;
          case "shift+o":
            keyDownEvent(8, "shift+o", "#string5Note9", e, guitarTuningNotes[5]);
            break;
          //string6
          case "shift+1":
            keyDownEvent(0, "shift+1", "#string6Note1", e, guitarTuningNotes[6]);
            break;
          case "shift+2":
            keyDownEvent(1, "shift+2", "#string6Note2", e, guitarTuningNotes[6]);
            break;
          case "shift+3":
            keyDownEvent(2, "shift+3", "#string6Note3", e, guitarTuningNotes[6]);
            break;
          case "shift+4":
            keyDownEvent(3, "shift+4", "#string6Note4", e, guitarTuningNotes[6]);
            break;
          case "shift+5":
            keyDownEvent(4, "shift+5", "#string6Note5", e, guitarTuningNotes[6]);
            break;
          case "shift+6":
            keyDownEvent(5, "shift+6", "#string6Note6", e, guitarTuningNotes[6]);
            break;
          case "shift+7":
            keyDownEvent(6, "shift+7", "#string6Note7", e, guitarTuningNotes[6]);
            break;
          case "shift+8":
            keyDownEvent(7, "shift+8", "#string6Note8", e, guitarTuningNotes[6]);
            break;
          case "shift+9":
            keyDownEvent(8, "shift+9", "#string6Note9", e, guitarTuningNotes[6]);
            break;
          default:
        }
      }}
    />
    
    <KeyboardEventHandler
      handleFocusableElements
      isDisabled={isKeyEventsDisabled}
      handleEventType = {"keyup"}
      handleKeys={["alphanumeric", ".", ",", "shift+q", "shift+w", "shift+e", "shift+r", "shift+t", "shift+z", "shift+u", "shift+i", "shift+o",
                  "shift+1", "shift+2", "shift+3", "shift+4", "shift+5", "shift+6", "shift+7", "shift+8", "shift+9"]}
      onKeyEvent={(key, e) => {
        switch (key) {
          //string1
          case "y":
            document.querySelector("#string1Note1").classList.remove("pressed");
            break;
          case "x":
            document.querySelector("#string1Note2").classList.remove("pressed");
            break;
          case "c":
            document.querySelector("#string1Note3").classList.remove("pressed");
            break;
          case "v":
            document.querySelector("#string1Note4").classList.remove("pressed");
            break;
          case "b":
            document.querySelector("#string1Note5").classList.remove("pressed");
            break;
          case "n":
            document.querySelector("#string1Note6").classList.remove("pressed");
            break;
          case "m":
            document.querySelector("#string1Note7").classList.remove("pressed");
            break;
          case ",":
            document.querySelector("#string1Note8").classList.remove("pressed");
            break;
          case ".":
            document.querySelector("#string1Note9").classList.remove("pressed");
            break;
          //string2
          case "a":
            document.querySelector("#string2Note1").classList.remove("pressed");
            break;
          case "s":
            document.querySelector("#string2Note2").classList.remove("pressed");
            break;
          case "d":
            document.querySelector("#string2Note3").classList.remove("pressed");
            break;
          case "f":
            document.querySelector("#string2Note4").classList.remove("pressed");
            break;
          case "g":
            document.querySelector("#string2Note5").classList.remove("pressed");
            break;
          case "h":
            document.querySelector("#string2Note6").classList.remove("pressed");
            break;
          case "j":
            document.querySelector("#string2Note7").classList.remove("pressed");
            break;
          case "k":
            document.querySelector("#string2Note8").classList.remove("pressed");
            break;
          case "l":
            document.querySelector("#string2Note9").classList.remove("pressed");
            break;
          //string3
          case "q":
            document.querySelector("#string3Note1").classList.remove("pressed");
            break;
          case "w":
            document.querySelector("#string3Note2").classList.remove("pressed");
            break;
          case "e":
            document.querySelector("#string3Note3").classList.remove("pressed");
            break;
          case "r":
            document.querySelector("#string3Note4").classList.remove("pressed");
            break;
          case "t":
            document.querySelector("#string3Note5").classList.remove("pressed");
            break;
          case "z":
            document.querySelector("#string3Note6").classList.remove("pressed");
            break;
          case "u":
            document.querySelector("#string3Note7").classList.remove("pressed");
            break;
          case "i":
            document.querySelector("#string3Note8").classList.remove("pressed");
            break;
          case "o":
            document.querySelector("#string3Note9").classList.remove("pressed");
            break;
          //string4
          case "1":
            document.querySelector("#string4Note1").classList.remove("pressed");
            break;
          case "2":
            document.querySelector("#string4Note2").classList.remove("pressed");
            break;
          case "3":
            document.querySelector("#string4Note3").classList.remove("pressed");
            break;
          case "4":
            document.querySelector("#string4Note4").classList.remove("pressed");
            break;
          case "5":
            document.querySelector("#string4Note5").classList.remove("pressed");
            break;
          case "6":
            document.querySelector("#string4Note6").classList.remove("pressed");
            break;
          case "7":
            document.querySelector("#string4Note7").classList.remove("pressed");
            break;
          case "8":
            document.querySelector("#string4Note8").classList.remove("pressed");
            break;
          case "9":
            document.querySelector("#string4Note9").classList.remove("pressed");
            break;
          //string5
          case "shift+q":
            document.querySelector("#string5Note1").classList.remove("pressed");
            break;
          case "shift+w":
            document.querySelector("#string5Note2").classList.remove("pressed");
            break;
          case "shift+e":
            document.querySelector("#string5Note3").classList.remove("pressed");
            break;
          case "shift+r":
            document.querySelector("#string5Note4").classList.remove("pressed");
            break;
          case "shift+t":
            document.querySelector("#string5Note5").classList.remove("pressed");
            break;
          case "shift+z":
            document.querySelector("#string5Note6").classList.remove("pressed");
            break;
          case "shift+u":
            document.querySelector("#string5Note7").classList.remove("pressed");
            break;
          case "shift+i":
            document.querySelector("#string5Note8").classList.remove("pressed");
            break;
          case "shift+o":
            document.querySelector("#string5Note9").classList.remove("pressed");
            break;
          //string6
          case "shift+1":
            document.querySelector("#string6Note1").classList.remove("pressed");
            break;
          case "shift+2":
            document.querySelector("#string6Note2").classList.remove("pressed");
            break;
          case "shift+3":
            document.querySelector("#string6Note3").classList.remove("pressed");
            break;
          case "shift+4":
            document.querySelector("#string6Note4").classList.remove("pressed");
            break;
          case "shift+5":
            document.querySelector("#string6Note5").classList.remove("pressed");
            break;
          case "shift+6":
            document.querySelector("#string6Note6").classList.remove("pressed");
            break;
          case "shift+7":
            document.querySelector("#string6Note7").classList.remove("pressed");
            break;
          case "shift+8":
            document.querySelector("#string6Note8").classList.remove("pressed");
            break;
          case "shift+9":
            document.querySelector("#string6Note9").classList.remove("pressed");
            break;
          default:
        }
      }}
    />
    </>
  );
}

function PlayGuitar(props) {
  const { firstFretPos, setFirstFretPos, stopPlaying } = useContext(AppContext);
  Howler.volume(0.1);

  const callBack = useCallback(() => stopPlaying(), [stopPlaying]);
  useEffect(() => callBack(), [callBack]);

  return (
    <>
      <HandleKeyPress />
      <GuitarSettings />
      <div className="guitarNeckPosition">
        <button
          className="guitarNeckPositionArrow leftNeckArrow"
          disabled={firstFretPos === 1}
          onClick={() => {
            setFirstFretPos(firstFretPos - 1);
          }}
        >
          <AiOutlineArrowLeft />
        </button>
        <GuitarNeck />
        <button
          className="guitarNeckPositionArrow rightNeckArrow"
          disabled={firstFretPos === 15}
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
