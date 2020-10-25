import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import { MdContentCopy, MdFiberManualRecord, MdClear } from "react-icons/md";
import { BsPlay, BsPlayFill } from "react-icons/bs";
import { getPiano } from "../domain/NoteFilePairs";
import "./Logger.css";

function Logger(props) {
  const {
    logs,
    LoggerRef,
    removeLog,
    isRecording,
    setIsRecording,
    isPlaying,
    clearLogs,
    saveLogs,
    playLogs,
  } = useContext(AppContext);

  return (
    <>
      <div className="row">
        Log:
        <div ref={LoggerRef} className="logger">
          {logs.length === 0 ? (
            <>
            </>
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
        <div className="loggerButtonGroup">
          <div><button className="loggerButton" onClick={() => setIsRecording(!isRecording)} disabled={isPlaying} >record <MdFiberManualRecord className={`MdFiberManualRecord ${isRecording?"recording" : ""}`}/></button></div>
          <div><button className="loggerButton" onClick={() => saveLogs()}>copy <MdContentCopy className="MdContentCopy"/></button></div>
          <div><button className="loggerButton" onClick={() => clearLogs()}>clear <MdClear className="MdClear"/></button></div>
          <div><button className="loggerButton" onClick={() => playLogs(getPiano)}  disabled={isRecording} >play {isPlaying ? <BsPlayFill/> : <BsPlay/> } </button></div>
        </div>
      </div>
    </>
  );
}

export default Logger;
