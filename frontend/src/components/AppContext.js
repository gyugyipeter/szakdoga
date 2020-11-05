import React, { createContext, useState, useRef } from "react";
import Copy from "copy-to-clipboard";
import { Howl } from "howler";
import {
  getPiano,
  getCleanGuitar,
  getDistortedGuitar,
} from "../domain/NoteFilePairs";

let timeIds = [];

export const AppContext = createContext();

function AppContextProvider(props) {
  const [logs, setLogs] = useState({ piano: [], guitar: [] });
  const [currentInstrument, setCurrentInstrument] = useState("piano");
  const [isRecording, setIsRecording] = useState(false);
  const [instrumentSound, setInstrumentSound] = useState({
    piano: "reverb",
    guitar: "clean",
  });
  const [guitarRange, setGuitarRange] = useState({
    string1: 1,
    string2: 1,
    string3: 2,
    string4: 2,
    string5: 2,
    string6: 3,
  });
  const [guitarTuningNotes, setGuitarTuningNotes] = useState({
    1: "E1",
    2: "A1",
    3: "D2",
    4: "G2",
    5: "B2",
    6: "E3",
  });
  const [activeFrets, setActiveFrets] = useState({
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
  });
  const [guitarTuning, setGuitarTuning] = useState("Standard");
  const [firstFretPos, setFirstFretPos] = useState(1);
  const [pianoRange1, setpianoRange1] = useState(3);
  const [pianoRange2, setpianoRange2] = useState(4);
  const [firstNote1, setFirstNote1] = useState(0);
  const [firstNote2, setFirstNote2] = useState(0);
  const [isKeyEventsDisabled, setIsKeyEventsDisabled] = useState(false);
  const [startRecording, setStartRecording] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayNotes, setDisplayNotes] = useState(true);
  const [displayKeys, setDisplayKeys] = useState(true);
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
    stopPlaying();
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

  const stopPlaying = () => {
    setIsPlaying(false);
    timeIds.forEach((id) => {
      clearTimeout(id);
    });
    timeIds = [];
  };

  const playLogs = () => {
    if (!isPlaying && logs[currentInstrument].length !== 0) {
      setIsPlaying(true);
      logs[currentInstrument].forEach((log, index) => {
        let timeId = setTimeout(() => {
          if (index === logs[currentInstrument].length - 1) setIsPlaying(false);
          PlaySound(
            instruments[currentInstrument].sounds[
              instrumentSound[currentInstrument]
            ]().get(log.note)
          );
        }, log.timing);
        timeIds.push(timeId);
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        logs,
        currentInstrument,
        isRecording,
        guitarRange,
        firstNote1,
        firstNote2,
        isKeyEventsDisabled,
        pianoRange1,
        pianoRange2,
        startRecording,
        isPlaying,
        firstFretPos,
        instrumentSound,
        guitarTuning,
        guitarTuningNotes,
        activeFrets,
        LoggerRef,
        displayNotes,
        displayKeys,
        addLog,
        removeLog,
        setIsRecording,
        clearLogs,
        copyLogs,
        setFirstNote1,
        setFirstNote2,
        setIsKeyEventsDisabled,
        setpianoRange1,
        setpianoRange2,
        setGuitarRange,
        PlaySound,
        stopPlaying,
        playLogs,
        setFirstFretPos,
        setInstrumentSound,
        setGuitarTuning,
        setGuitarTuningNotes,
        setActiveFrets,
        setLogs,
        setCurrentInstrument,
        setDisplayNotes,
        setDisplayKeys,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
