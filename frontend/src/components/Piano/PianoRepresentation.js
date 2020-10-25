import React from "react";
import { getNotes } from "../../domain/NoteFilePairs";
import "./PianoRepresentation.css";

function PianoRepresentation(props) {
  const {firstNote, id} = props;

  return (
    <div className="pianoBody">
      <div className="pianoKey whiteButton" id= {id + "note-1" }> {getNotes()[firstNote]} </div>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-2" }> {getNotes()[(firstNote + 1) % getNotes().length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-3" }> {getNotes()[(firstNote + 2) % getNotes().length]} </div>
      </span>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-4"}> {getNotes()[(firstNote + 3) % getNotes().length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-5"}> {getNotes()[(firstNote + 4) % getNotes().length]} </div>
      </span>
      <div className="pianoKey whiteButton" id= {id + "note-6"}> {getNotes()[(firstNote + 5) % getNotes().length]} </div>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-7"}> {getNotes()[(firstNote + 6) % getNotes().length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-8"}> {getNotes()[(firstNote + 7) % getNotes().length]} </div>
      </span>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-9"}> {getNotes()[(firstNote + 8) % getNotes().length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-10"}> {getNotes()[(firstNote + 9) % getNotes().length]} </div>
      </span>
      <span>
        <div className="blackButtonBox">
          <div className="pianoKey blackButton" id= {id + "note-11"}> {getNotes()[(firstNote + 10) % getNotes().length]} </div>
        </div>
        <div className="pianoKey whiteButton" id= {id + "note-12"}> {getNotes()[(firstNote + 11) % getNotes().length]} </div>
      </span>
    </div>
  );
}

export default PianoRepresentation;
