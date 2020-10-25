import React from "react";
import Logger from "../Logger";
import PlayGuitar from "./PlayGuitar";

function GuitarBody(props) {
  return (
    <>
      <div className="card card-stats">
        <div className="card-header">
          <div>
            <Logger/>
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
