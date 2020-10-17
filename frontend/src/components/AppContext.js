import React, { createContext, useState, useRef } from "react";
import Copy from "copy-to-clipboard";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [logs, setLogs] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const LoggerRef = useRef(null);
  const [firstNote1, setFirstNote1] = useState(0);
  const [firstNote2, setFirstNote2] = useState(0);
  const [isKeyEventsDisabled, setIsKeyEventsDisabled] = useState(false);

  const addLog = (log) => {
    if (isRecording) {
      setLogs([...logs, { ...log, id: Date.now() + log.key }]);
      if (LoggerRef != null)
        LoggerRef.current.scrollLeft = LoggerRef.current.scrollWidth;
    }
  };

  const removeLog = (log) => {
    setLogs(logs.filter((currentLog) => currentLog.id !== log.id));
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const saveLogs = () => {
    let clipboard = "";
    logs.forEach(e => {
      clipboard += e.note + " - " + e.key + "\n";
    });
    Copy(clipboard);
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
        setLogs,
        addLog,
        removeLog,
        setIsRecording,
        clearLogs,
        saveLogs,
        setFirstNote1,
        setFirstNote2,
        setIsKeyEventsDisabled
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
