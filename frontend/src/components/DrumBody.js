import React from "react";
import DrumSettings from "./DrumSettings";
import PlayDrum from "./PlayDrum";

function DrumBody(props) {
  return (
    <>
      <div className="card card-stats">
        <div className="card-header">
          <div>
            <DrumSettings/>
          </div>
          <div>
            <div>
              <PlayDrum/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DrumBody;
