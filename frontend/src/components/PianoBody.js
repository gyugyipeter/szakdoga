import React from "react";
import PianoLogger from "./PianoLogger";
import PlayPiano from "./PlayPiano";
import "./PianoBody.css"

function PianoBody(props) {
  return (
    <>
        <div>
          <div>
            <PianoLogger/>
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
