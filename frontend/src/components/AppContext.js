import React, { createContext, useState, useRef } from "react";
import Copy from "copy-to-clipboard";
import { Howl } from "howler";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [logs, setLogs] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const LoggerRef = useRef(null);
  const [range1, setRange1] = useState(3);
  const [range2, setRange2] = useState(4);
  const [firstNote1, setFirstNote1] = useState(0);
  const [firstNote2, setFirstNote2] = useState(0);
  const [isKeyEventsDisabled, setIsKeyEventsDisabled] = useState(false);
  const [startRecording, setStartRecording] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [firstFretPos, setFirstFretPos] = useState(1);
  const [guitarSound, setGuitarSound] = useState("clean");
  const [guitarTuning, setGuitarTuning] = useState("Standard");

  const addLog = (log) => {
    if (isRecording) {
      if(logs.length === 0) {
        setStartRecording(Date.now());
      }
      setLogs([...logs, { ...log, id: Date.now() + log.key, timing: Date.now() - (startRecording ?? Date.now()) }]);
      if (LoggerRef != null)
        LoggerRef.current.scrollLeft = LoggerRef.current.scrollWidth;
    }
  };

  const removeLog = (log) => {
    setLogs(logs.filter((currentLog) => currentLog.id !== log.id));
  };

  const clearLogs = () => {
    setLogs([]);
    setStartRecording(null);
  };

  const saveLogs = () => {
    let clipboard = "";
    logs.forEach(e => {
      clipboard += e.note + " - " + e.key + "\n";
    });
    Copy(clipboard);
  }

  const PlaySound = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const playLogs = (whichInstrument) => {
    if(!isPlaying && logs.length !== 0) {
      setIsPlaying(true);
      logs.forEach((log, index)=>{
        setTimeout(()=>{
          if(index === logs.length - 1)
          setIsPlaying(false);
          PlaySound(whichInstrument().get(log.note));
        },
        log.timing)
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
        logs,
        LoggerRef,
        isRecording,
        firstNote1,
        firstNote2,
        isKeyEventsDisabled,
        range1,
        range2,
        startRecording,
        isPlaying,
        firstFretPos,
        guitarSound,
        guitarTuning,
        setLogs,
        addLog,
        removeLog,
        setIsRecording,
        clearLogs,
        saveLogs,
        setFirstNote1,
        setFirstNote2,
        setIsKeyEventsDisabled,
        setRange1,
        setRange2,
        PlaySound,
        playLogs,
        setFirstFretPos,
        setGuitarSound,
        setGuitarTuning
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
