import React from "react";
import "./PianoRepresentation.css";

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function PianoRepresentation(props) {
  const {firstNote, id} = props;

  return (
    <div className="pianoBody">
      <div className="pianoKey whiteButton" id= {id + "note-1" }> {notes[firstNote]} </div>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-2" }> {notes[(firstNote + 1) % notes.length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-3" }> {notes[(firstNote + 2) % notes.length]} </div>
      </span>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-4"}> {notes[(firstNote + 3) % notes.length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-5"}> {notes[(firstNote + 4) % notes.length]} </div>
      </span>
      <div className="pianoKey whiteButton" id= {id + "note-6"}> {notes[(firstNote + 5) % notes.length]} </div>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-7"}> {notes[(firstNote + 6) % notes.length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-8"}> {notes[(firstNote + 7) % notes.length]} </div>
      </span>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-9"}> {notes[(firstNote + 8) % notes.length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-10"}> {notes[(firstNote + 9) % notes.length]} </div>
      </span>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-11"}> {notes[(firstNote + 10) % notes.length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-12"}> {notes[(firstNote + 11) % notes.length]} </div>
      </span>
    </div>
  );
}

export default PianoRepresentation;
