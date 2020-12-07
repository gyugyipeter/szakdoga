import React, {useContext} from "react";
import { AppContext } from "../AppContext";
import { getNotes } from "../../domain/NoteFilePairs";
import "./PianoRepresentation.css";

function WhiteButton(props) {
  const { note, id, keyPressed } = props;
  const { displayPianoNotes, displayPianoKeys } = useContext(AppContext);

  return (
    <div className="pianoKey whiteButton" id={id}>
      <div className="noteToCenter">
        {displayPianoNotes && getNotes()[note]}
      </div>
      <div className="keyBinding">{displayPianoKeys && keyPressed}</div>
    </div>
  );
}

function BlackButton(props) {
  const { note, id, keyPressed } = props;
  const { displayPianoNotes, displayPianoKeys } = useContext(AppContext);

  return (
    <div className="blackButtonBox">
      <div className="pianoKey blackButton" id={id}>
        <div className="noteToCenter">
          {displayPianoNotes && getNotes()[note]}
        </div>
        <div className="keyBinding">{displayPianoKeys && keyPressed}</div>
      </div>
    </div>
  );
}

function PianoRepresentation(props) {
  const { firstNote, id, keyBindings } = props;

  return (
    <div className="pianoBody">
      <WhiteButton note={firstNote} id={id + "note-1"} keyPressed={keyBindings[0]} />
      <span>
        <BlackButton note={(firstNote + 1) % getNotes().length} id={id + "note-2"} keyPressed={keyBindings[1]} />
        <WhiteButton note={(firstNote + 2) % getNotes().length} id={id + "note-3"} keyPressed={keyBindings[2]} />
      </span>
      <span>
        <BlackButton note={(firstNote + 3) % getNotes().length} id={id + "note-4"} keyPressed={keyBindings[3]} />
        <WhiteButton note={(firstNote + 4) % getNotes().length} id={id + "note-5"} keyPressed={keyBindings[4]} />
      </span>
      <WhiteButton note={(firstNote + 5) % getNotes().length} id={id + "note-6"} keyPressed={keyBindings[5]} />
      <span>
        <BlackButton note={(firstNote + 6) % getNotes().length} id={id + "note-7"} keyPressed={keyBindings[6]} />
        <WhiteButton note={(firstNote + 7) % getNotes().length} id={id + "note-8"} keyPressed={keyBindings[7]}/>
      </span>
      <span>
        <BlackButton note={(firstNote + 8) % getNotes().length} id={id + "note-9"} keyPressed={keyBindings[8]}/>
        <WhiteButton note={(firstNote + 9) % getNotes().length} id={id + "note-10"} keyPressed={keyBindings[9]} />
      </span>
      <span>
        <BlackButton note={(firstNote + 10) % getNotes().length} id={id + "note-11"} keyPressed={keyBindings[10]}/>
        <WhiteButton note={(firstNote + 11) % getNotes().length} id={id + "note-12"} keyPressed={keyBindings[11]}/>
      </span>
    </div>
  );
}

export default PianoRepresentation;
