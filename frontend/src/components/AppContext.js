import React, { createContext, useState, useRef } from "react";
import Copy from "copy-to-clipboard";
import { Howl } from "howler";
import {
  getPiano,
  getCleanGuitar,
  getDistortedGuitar,
} from "../domain/NoteFilePairs";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [logs, setLogs] = useState({ piano: [], guitar: [] });
  const [currentInstrument, setCurrentInstrument] = useState("piano");
  const [instrumentSound, setInstrumentSound] = useState({
    piano: "reverb",
    guitar: "clean",
  });
  const [isRecording, setIsRecording] = useState(false);
  const [range1, setRange1] = useState(3);
  const [range2, setRange2] = useState(4);
  const [firstNote1, setFirstNote1] = useState(0);
  const [firstNote2, setFirstNote2] = useState(0);
  const [isKeyEventsDisabled, setIsKeyEventsDisabled] = useState(false);
  const [startRecording, setStartRecording] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [firstFretPos, setFirstFretPos] = useState(1);
  const [guitarTuning, setGuitarTuning] = useState("Standard");
  const LoggerRef = useRef(null);

  const instruments = {
    piano: {
      logs: logs.piano,
      sounds: { reverb: getPiano },
    },
    guitar: {
      logs: logs.guitar,
      sounds: { clean: getCleanGuitar, distorted: getDistortedGuitar },
    },
  };

  const addLog = (log) => {
    if (isRecording) {
      if (logs[currentInstrument].length === 0) {
        setStartRecording(Date.now());
      }
      setLogs({
        ...logs,
        [currentInstrument]: [
          ...logs[currentInstrument],
          {
            ...log,
            id: Date.now() + log.key,
            timing: Date.now() - (startRecording ?? Date.now()),
          },
        ],
      });
      if (LoggerRef != null)
        LoggerRef.current.scrollLeft = LoggerRef.current.scrollWidth;
    }
  };

  const removeLog = (log) => {
    setLogs({
      ...logs,
      [currentInstrument]: logs[currentInstrument].filter(
        (currentLog) => currentLog.id !== log.id
      ),
    });
  };

  const clearLogs = () => {
    setLogs({ ...logs, [currentInstrument]: [] });
    setStartRecording(null);
  };

  const copyLogs = () => {
    let clipboard = "";
    logs[currentInstrument].forEach((e) => {
      clipboard += e.note + " - " + e.key + "\n";
    });
    Copy(clipboard);
  };

  const PlaySound = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const playLogs = () => {
    if (!isPlaying && logs[currentInstrument].length !== 0) {
      setIsPlaying(true);
      logs[currentInstrument].forEach((log, index) => {
        setTimeout(() => {
          if (index === logs[currentInstrument].length - 1) setIsPlaying(false);
          PlaySound(
            instruments[currentInstrument].sounds[
              instrumentSound[currentInstrument]
            ]().get(log.note)
          );
        }, log.timing);
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        logs,
        currentInstrument,
        isRecording,
        firstNote1,
        firstNote2,
        isKeyEventsDisabled,
        range1,
        range2,
        startRecording,
        isPlaying,
        firstFretPos,
        instrumentSound,
        guitarTuning,
        LoggerRef,
        addLog,
        removeLog,
        setIsRecording,
        clearLogs,
        copyLogs,
        setFirstNote1,
        setFirstNote2,
        setIsKeyEventsDisabled,
        setRange1,
        setRange2,
        PlaySound,
        playLogs,
        setFirstFretPos,
        setInstrumentSound,
        setGuitarTuning,
        setLogs,
        setCurrentInstrument,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
