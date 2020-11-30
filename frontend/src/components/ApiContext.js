import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./AppContext";

export const ApiContext = createContext();

function ApiContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("userID") ? true : false
  );
  const [songList, setSongList] = useState([]);
  const [selectedSongName, setSelectedSongName] = useState({ piano: null, guitar: null });
  const [selectedSongID, setSelectedSongID] = useState({ piano: null, guitar: null });
  const { setIsKeyEventsDisabled, currentInstrument, logs, setLogs } = useContext(AppContext);

  const http = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
      "Content-type": "application/json",
    },
  });

  const register = async (username, password) => {
    try {
      const response = await http.post("/user/register", {
        userName: username,
        password: password,
      });
      alert(response.data + "\nYou can log in now!");
      setIsKeyEventsDisabled(false);
    } catch (e) {
      alert("This username is taken. Try another.\n");
    }
  };

  const login = async (username, password) => {
    try {
      const response = await http.post("/user/login", {
        userName: username,
        password: password,
      });
      localStorage.setItem("userID", response.data.id);
      setIsLoggedIn(true);
      setIsKeyEventsDisabled(false);
    } catch (e) {
      alert(e);
    }
  };

  const logout = () => {
    localStorage.removeItem("userID");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      try {
        http
          .get(`/songs/user/${localStorage.getItem("userID")}`)
          .then((response) => setSongList(response.data));
      } catch (e) {
        alert(e);
      }
    }
  }, []);

  const getSong = async (id) => {
    try {
      const response = await http.get(`/songs/${id}`);
      setSelectedSongID({ ...selectedSongID, [currentInstrument]: response.data.id });
      setSelectedSongName({ ...selectedSongName, [currentInstrument]: response.data.songName });
      setLogs({ ...logs, [currentInstrument]: JSON.parse(response.data.songObject).notes });
    } catch (e) {
      alert(e);
    }
  };

  const addSong = async (name, notes) => {
    try {
      const response = await http.post("/songs", {
        songName: name,
        instrument: currentInstrument.toUpperCase(),
        songObject: notes,
        userID: localStorage.getItem("userID"),
      });
      setSelectedSongName({ ...selectedSongName, [currentInstrument]: name });
      setSelectedSongID({ ...selectedSongID, [currentInstrument]: response.data.id });
    } catch (e) {
      alert(e);
    }
  };

  const updateSong = async (notes) => {
    try {
      const response = await http.put(`/songs/${selectedSongID[currentInstrument]}`, notes);
    } catch (e) {
      alert(e);
    }
  }

  const deleteSong = async (id) => {
    try {
      const response = await http.delete(`/songs/${id}`);
      if(selectedSongID[currentInstrument] === id) {
        setSelectedSongName({ ...selectedSongName, [currentInstrument]: null });
        setSelectedSongID({ ...selectedSongID, [currentInstrument]: null });
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <ApiContext.Provider
      value={{
        isLoggedIn,
        songList,
        selectedSongName,
        setIsLoggedIn,
        register,
        login,
        logout,
        getSong,
        addSong,
        updateSong,
        deleteSong,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
}

export default ApiContextProvider;
