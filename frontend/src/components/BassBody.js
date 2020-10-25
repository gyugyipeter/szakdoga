import React from "react";
import BassSettings from "./BassSettings";
import PlayBass from "./PlayBass";

function BassBody(props) {
  return (
    <>
      <div className="card card-stats">
        <div className="card-header">
          <div>
            <BassSettings/>
          </div>
          <div>
            <div>
              <PlayBass/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BassBody;
