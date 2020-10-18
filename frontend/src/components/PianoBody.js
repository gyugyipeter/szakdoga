import React from "react";
import Logger from "./Logger";
import PlayPiano from "./PlayPiano";
import "./PianoBody.css"

function PianoBody(props) {
  return (
    <>
        <div>
          <div>
            <Logger/>
          </div>
          <div>
            <div>
              <PlayPiano/>
            </div>
          </div>
        </div>
    </>
  );
}

export default PianoBody;
