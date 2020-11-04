import React, {useContext} from "react";
import { AppContext } from "../AppContext";
import { getNotes } from "../../domain/NoteFilePairs";
import "./PianoRepresentation.css";

function WhiteButton(props) {
  const { firstNote, id, keyPressed } = props;
  const { displayNotes, displayKeys } = useContext(AppContext);

  return(
    <div className="pianoKey whiteButton" id= {id}>
      <div>{displayNotes && getNotes()[firstNote] }</div>
      <div className="keyBinding">{displayKeys && keyPressed}</div>
    </div>
  );
}

function BlackButton(props) {
  const {firstNote, id, keyPressed } = props;
  const { displayNotes, displayKeys } = useContext(AppContext);

  return(
    <div className="blackButtonBox">
      <div className="pianoKey blackButton" id= {id}>
        <div>{displayNotes && getNotes()[firstNote]}</div>
        <div className="keyBinding">{displayKeys && keyPressed}</div>
      </div>
    </div>
  );
}

function PianoRepresentation(props) {
  const { firstNote, id, keyBindings } = props;
  let keyBindingsIndex = 0;

  return (
    <div className="pianoBody">
      <WhiteButton firstNote={firstNote} id={id + "note-1"} keyPressed={keyBindings[keyBindingsIndex++]} />
      <span>
        <BlackButton firstNote={(firstNote + 1) % getNotes().length} id={id + "note-2"} keyPressed={keyBindings[keyBindingsIndex++]} />
        <WhiteButton firstNote={(firstNote + 2) % getNotes().length} id={id + "note-3"} keyPressed={keyBindings[keyBindingsIndex++]} />
      </span>
      <span>
        <BlackButton firstNote={(firstNote + 3) % getNotes().length} id={id + "note-4"} keyPressed={keyBindings[keyBindingsIndex++]} />
        <WhiteButton firstNote={(firstNote + 4) % getNotes().length} id={id + "note-5"} keyPressed={keyBindings[keyBindingsIndex++]} />
      </span>
      <WhiteButton firstNote={(firstNote + 5) % getNotes().length} id={id + "note-6"} keyPressed={keyBindings[keyBindingsIndex++]} />
      <span>
        <BlackButton firstNote={(firstNote + 6) % getNotes().length} id={id + "note-7"} keyPressed={keyBindings[keyBindingsIndex++]} />
        <WhiteButton firstNote={(firstNote + 7) % getNotes().length} id={id + "note-8"} keyPressed={keyBindings[keyBindingsIndex++]}/>
      </span>
      <span>
        <BlackButton firstNote={(firstNote + 8) % getNotes().length} id={id + "note-9"} keyPressed={keyBindings[keyBindingsIndex++]}/>
        <WhiteButton firstNote={(firstNote + 9) % getNotes().length} id={id + "note-10"} keyPressed={keyBindings[keyBindingsIndex++]} />
      </span>
      <span>
        <BlackButton firstNote={(firstNote + 10) % getNotes().length} id={id + "note-11"} keyPressed={keyBindings[keyBindingsIndex++]}/>
        <WhiteButton firstNote={(firstNote + 11) % getNotes().length} id={id + "note-12"} keyPressed={keyBindings[keyBindingsIndex++]}/>
      </span>
    </div>
  );
}

export default PianoRepresentation;
