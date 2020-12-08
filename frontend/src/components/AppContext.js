import React, { createContext, useState, useRef, useCallback } from "react";
import Copy from "copy-to-clipboard";
import { Howl } from "howler";
import { getStringNumber } from "../domain/GuitarHelper";
import {
  getPiano,
  getCleanGuitar,
  getDistortedGuitar,
} from "../domain/NoteFilePairs";

let timeIds = [];
let lastNotesOnString = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
};

export const AppContext = createContext();

function AppContextProvider(props) {
  const [isKeyEventsDisabled, setIsKeyEventsDisabled] = useState(false);
  // instruments
  const [currentInstrument, setCurrentInstrument] = useState("piano");
  const [instrumentSound, setInstrumentSound] = useState({
    piano: "reverb",
    guitar: "clean",
  });
  // guitar
  const [guitarTuningNotes, setGuitarTuningNotes] = useState({
    1: "E1",
    2: "A1",
    3: "D2",
    4: "G2",
    5: "B2",
    6: "E3",
  });
  const [guitarTuning, setGuitarTuning] = useState("Standard");
  const [firstFretPos, setFirstFretPos] = useState(1);
  // piano
  const [pianoRange1, setpianoRange1] = useState(3);
  const [pianoRange2, setpianoRange2] = useState(4);
  const [firstPianoNote1, setFirstPianoNote1] = useState(0);
  const [firstPianoNote2, setFirstPianoNote2] = useState(0);
  const [displayPianoNotes, setDisplayPianoNotes] = useState(true);
  const [displayPianoKeys, setDisplayPianoKeys] = useState(true);
  // logger
  const [logs, setLogs] = useState({ piano: [], guitar: [] });
  const [isRecording, setIsRecording] = useState(false);
  const [startRecording, setStartRecording] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
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

  // timing stores how much time has passed since the first note,
  // so the timings will be on point when you play it back
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

  // stops the last sound played on the same string
  // and overwrites it with the current one
  const PlayGuitarSound = (src, stringNumber) => {
    if (lastNotesOnString[stringNumber]) lastNotesOnString[stringNumber].stop();
    lastNotesOnString[stringNumber] = new Howl({
      src,
    });
    lastNotesOnString[stringNumber].play();
  };

  const stopPlaying = useCallback(() => {
    setIsPlaying(false);
    timeIds.forEach((id) => {
      clearTimeout(id);
    });
    timeIds = [];
  }, []);

  const playLogs = () => {
    if (!isPlaying && logs[currentInstrument].length !== 0) {
      setIsPlaying(true);
      logs[currentInstrument].forEach((log, index) => {
        let timeId = setTimeout(() => {
          if (index === logs[currentInstrument].length - 1) setIsPlaying(false);
          if (currentInstrument === "guitar") {
            PlayGuitarSound(
              instruments[currentInstrument].sounds[
                instrumentSound[currentInstrument]
              ]().get(log.note),
              getStringNumber(log.key)
            );
          } else {
            PlaySound(
              instruments[currentInstrument].sounds[
                instrumentSound[currentInstrument]
              ]().get(log.note)
            );
          }
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
        firstPianoNote1,
        firstPianoNote2,
        isKeyEventsDisabled,
        pianoRange1,
        pianoRange2,
        isPlaying,
        firstFretPos,
        instrumentSound,
        guitarTuning,
        guitarTuningNotes,
        LoggerRef,
        displayPianoNotes,
        displayPianoKeys,
        addLog,
        removeLog,
        setIsRecording,
        clearLogs,
        copyLogs,
        setFirstPianoNote1,
        setFirstPianoNote2,
        setIsKeyEventsDisabled,
        setpianoRange1,
        setpianoRange2,
        PlaySound,
        PlayGuitarSound,
        stopPlaying,
        playLogs,
        setFirstFretPos,
        setInstrumentSound,
        setGuitarTuning,
        setGuitarTuningNotes,
        setLogs,
        setCurrentInstrument,
        setDisplayPianoNotes,
        setDisplayPianoKeys,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
