import React, { useContext, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { TiDeleteOutline } from "react-icons/ti";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";
import { AppContext } from "../components/AppContext";
import { ApiContext } from "../components/ApiContext";
import Modal from "./Modal";
import "./SongHandler.css";

function SongListElement(props) {
  const { id, name, menuCloser } = props;
  const {
    setIsRecording,
    setIsKeyEventsDisabled,
    currentInstrument,
  } = useContext(AppContext);
  const { selectedSongID, getSong, deleteSong } = useContext(ApiContext);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setIsKeyEventsDisabled(false);
    setShowModal(false);
  };
  const displayModal = () => {
    setIsKeyEventsDisabled(true);
    setIsRecording(false);
    setShowModal(true);
  };
  const handleChooseSong = () => {
    setIsRecording(false);
    getSong(id);
    menuCloser(false);
  };
  const handleDeleteSong = () => {
    deleteSong(id);
    handleClose();
    menuCloser(false);
  };

  return (
    <>
      <div className="songLine songLineAlign">
        <button
          className={`selectSongButton ${
            selectedSongID[currentInstrument] === id ? "highlight" : ""
          }`}
          title={name}
          onClick={handleChooseSong}
        >
          {name}
        </button>
        <button className="deleteSong" onClick={displayModal}>
          <TiDeleteOutline />
        </button>
        <Modal show={showModal} handleClose={handleClose}>
          <div>
            <p>Are you sure you'd like delete your song?</p>
            <div className="modalButtons">
              <button className="modalIcon check" onClick={handleDeleteSong}>
                <BiCheckCircle />
              </button>
              <button className="modalIcon exit" onClick={handleClose}>
                <BiXCircle />
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

function SongSelector(setShowList) {
  const { songList } = useContext(ApiContext);
  const { currentInstrument } = useContext(AppContext);

  return (
    <>
      {songList.map((e) =>
        e.instrument.toLowerCase() === currentInstrument ? (
          <div className="songListElement" key={e.id}>
            <SongListElement
              id={e.id}
              name={e.songName}
              menuCloser={setShowList}
            />
          </div>
        ) : null
      )}
    </>
  );
}

function SongHandler() {
  const {
    logs,
    currentInstrument,
    setIsRecording,
    setIsKeyEventsDisabled,
  } = useContext(AppContext);
  const { addSong, updateSong, selectedSongName } = useContext(ApiContext);
  const [songName, setSongName] = useState(null);
  const [showList, setShowList] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalSave, setShowModalSave] = useState(false);
  const handleCloseAdd = () => {
    setIsKeyEventsDisabled(false);
    setShowModalAdd(false);
  };
  const displayModalAdd = () => {
    setIsKeyEventsDisabled(true);
    setIsRecording(false);
    setShowModalAdd(true);
  };
  const handleCloseSave = () => {
    setIsKeyEventsDisabled(false);
    setShowModalSave(false);
  };
  const displayModalSave = () => {
    setIsKeyEventsDisabled(true);
    setIsRecording(false);
    setShowModalSave(true);
  };

  const addNewSong = (songName) => {
    let newSong = { notes: logs[currentInstrument] };
    addSong(songName, JSON.stringify(newSong));
    handleCloseAdd();
  };

  const overwriteSong = () => {
    let updatedNotes = { notes: logs[currentInstrument] };
    updateSong(JSON.stringify(updatedNotes));
    handleCloseSave();
  };

  return (
    <ClickAwayListener onClickAway={() => setShowList(false)}>
      <div className="songLine">
        <div>Songs:</div>
        <button
          className="loggerButton saveButton addButton"
          onClick={displayModalAdd}
          disabled={logs[currentInstrument].length === 0}
        >
          Add
        </button>
        <Modal show={showModalAdd} handleClose={handleCloseAdd}>
          <div>
            <p>What's the title of your song?</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addNewSong(songName);
              }}
            >
              <div className="addModal">
                <input
                  className="form-control inputWidth"
                  name="songName"
                  type="text"
                  required
                  maxLength="48"
                  onChange={(event) => {
                    setSongName(event.target.value);
                  }}
                />
                <button className="modalIcon check" type="submit">
                  <BiCheckCircle />
                </button>
              </div>
            </form>
          </div>
        </Modal>
        <button
          className="loggerButton saveButton"
          onClick={displayModalSave}
          disabled={selectedSongName[currentInstrument] === null}
        >
          Save
        </button>
        <Modal show={showModalSave} handleClose={handleCloseSave}>
          <div>
            <p>Are you sure you'd like to save your song?</p>
            <div className="modalButtons">
              <button
                className="modalIcon check"
                onClick={() => overwriteSong()}
              >
                <BiCheckCircle />
              </button>
              <button className="modalIcon exit" onClick={handleCloseSave}>
                <BiXCircle />
              </button>
            </div>
          </div>
        </Modal>
      </div>
      <div className="selectorField">
        <button
          className="selectorDropdownButton"
          onClick={() => {
            setShowList(!showList);
          }}
        >
          <div className="songTitle">{selectedSongName[currentInstrument]}</div>
          <i className="selectorArrow"></i>
        </button>
      </div>
      <div>
        <div className={`selectorDropdown ${showList ? "show" : ""}`}>
          {SongSelector(setShowList)}
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default SongHandler;
