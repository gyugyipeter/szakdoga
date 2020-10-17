import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "./PianoLogger.css";

function PianoLogger(props) {
  const {
    logs,
    LoggerRef,
    removeLog,
    isRecording,
    setIsRecording,
    clearLogs,
    saveLogs,
  } = useContext(AppContext);

  return (
    <>
      <div className="row">
        <h5>Log:</h5>
        <div ref={LoggerRef} className="logger">
          {logs.length === 0 ? (
            <div>
              <div>empty</div>
              <div>log</div>
            </div>
          ) : (
            logs.map((log) => {
              return (
                <div
                  onClick={() => removeLog(log)}
                  className="log"
                  key={log.id}
                >
                  <div className="note">{log.note}</div>
                  <div className="key">{log.key}</div>
                </div>
              );
            })
          )}
        </div>
        <div className="logger-btn">
          <div className="record-btn"><button onClick={() => setIsRecording(!isRecording)}>record</button></div>
          <div className="copy-btn"><button onClick={() => saveLogs()}>copy</button></div>
          <div className="clear-btn"><button onClick={() => clearLogs()}>clear</button></div>
        </div>
      </div>
    </>
  );
}

export default PianoLogger;
