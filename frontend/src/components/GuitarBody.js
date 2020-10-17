import React from "react";
import GuitarSettings from "./GuitarSettings";
import PlayGuitar from "./PlayGuitar";

function GuitarBody(props) {
  return (
    <>
      <div className="card card-stats">
        <div className="card-header">
          <div>
            <GuitarSettings/>
          </div>
          <div>
            <div>
              <PlayGuitar/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuitarBody;
