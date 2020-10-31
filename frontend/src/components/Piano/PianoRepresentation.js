import React, {useContext} from "react";
import { AppContext } from "../AppContext";
import { getNotes } from "../../domain/NoteFilePairs";
import "./PianoRepresentation.css";

function WhiteButton(props) {
  const {firstNote, id} = props;
  const { displayNotes } = useContext(AppContext);

  return(
    <div className="pianoKey whiteButton" id= {id}> {displayNotes && getNotes()[firstNote]} </div>
  );
}

function BlackButton(props) {
  const {firstNote, id} = props;
  const { displayNotes } = useContext(AppContext);

  return(
    <div className="blackButtonBox">
      <div className="pianoKey blackButton" id= {id}> {displayNotes && getNotes()[firstNote]} </div>
    </div>
  );
}

function PianoRepresentation(props) {
  const {firstNote, id} = props;

  return (
    <div className="pianoBody">
      <WhiteButton firstNote={firstNote} id={id + "note-1"}/>
      <span>
        <BlackButton firstNote={(firstNote + 1) % getNotes().length} id={id + "note-2"}/>
        <WhiteButton firstNote={(firstNote + 2) % getNotes().length} id={id + "note-3"}/>
      </span>
      <span>
        <BlackButton firstNote={(firstNote + 3) % getNotes().length} id={id + "note-4"}/>
        <WhiteButton firstNote={(firstNote + 4) % getNotes().length} id={id + "note-5"}/>
      </span>
      <WhiteButton firstNote={(firstNote + 5) % getNotes().length} id={id + "note-6"}/>
      <span>
        <BlackButton firstNote={(firstNote + 6) % getNotes().length} id={id + "note-7"}/>
        <WhiteButton firstNote={(firstNote + 7) % getNotes().length} id={id + "note-8"}/>
      </span>
      <span>
        <BlackButton firstNote={(firstNote + 8) % getNotes().length} id={id + "note-9"}/>
        <WhiteButton firstNote={(firstNote + 9) % getNotes().length} id={id + "note-10"}/>
      </span>
      <span>
        <BlackButton firstNote={(firstNote + 10) % getNotes().length} id={id + "note-11"}/>
        <WhiteButton firstNote={(firstNote + 11) % getNotes().length} id={id + "note-12"}/>
      </span>
    </div>
  );
}

export default PianoRepresentation;
