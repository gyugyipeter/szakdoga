import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { MdContentCopy, MdFiberManualRecord, MdClear } from "react-icons/md";
import { BsPlay, BsPlayFill } from "react-icons/bs";
import "./Logger.css";

function Logger(props) {
  const {
    logs,
    currentInstrument,
    LoggerRef,
    removeLog,
    isRecording,
    setIsRecording,
    isPlaying,
    clearLogs,
    copyLogs,
    playLogs,
    stopPlaying
  } = useContext(AppContext);

  return (
    <>
      <div className="row">
        <div ref={LoggerRef} className="logger">
          {logs[currentInstrument].length === 0 ? (
            <></>
          ) : (
            logs[currentInstrument].map((log) => {
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
        <div className="loggerButtonGroup">
          <div>
            <button
              className="loggerButton"
              title="Turn recording on/off"
              onClick={() => setIsRecording(!isRecording)}
              disabled={isPlaying}
            >
              record{" "}
              <MdFiberManualRecord
                className={`MdFiberManualRecord ${
                  isRecording ? "recording" : ""
                }`}
              />
            </button>
          </div>
          <div>
            <button
              className="loggerButton"
              title="Copy notes to clipboard"
              onClick={() => copyLogs()}
            >
              copy <MdContentCopy className="MdContentCopy" />
            </button>
          </div>
          <div>
            <button
              className="loggerButton"
              title="Delete your recording"
              onClick={() => clearLogs()}
            >
              clear <MdClear className="MdClear" />
            </button>
          </div>
          <div>
            <button
              className="loggerButton"
              title="Play/pause your recording"
              onClick={isPlaying ? () => stopPlaying() : () => playLogs()}
              disabled={isRecording}
            >
              {isPlaying ? <>stop <BsPlayFill /></> : <>play <BsPlay /></> }
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logger;
