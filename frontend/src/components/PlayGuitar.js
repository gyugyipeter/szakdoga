import React from "react";
import { Howl, Howler } from "howler";
import KeyboardEventHandler from "react-keyboard-event-handler";
import { /*getDistortedGuitar,*/ getCleanGuitar } from "../domain/NoteFilePairs";
import GuitarPic from "../pics/Strat-Neck-Style-HNK12R22F-Top.jpg";

const PlaySound = (src) => {
  const sound = new Howl({
    src,
  });
  sound.play();
};

function HandleKeyPress() {
  return(
  <KeyboardEventHandler
      handleKeys={["q", "w", "e", "r", "t", "z", "u", "i", "o", "a", "s", "d", "f", "g", "h", "j", "k", "l",
                    "y", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9"]}
      onKeyEvent={(key) => {
        switch (key) {
          case "q":
            PlaySound(getCleanGuitar().get("G2"));
            break;
          case "w":
            PlaySound(getCleanGuitar().get("Eb3"));
            break;
          case "e":
            PlaySound(getCleanGuitar().get("G3"));
            break;
          case "r":
            PlaySound(getCleanGuitar().get("D4"));
            break;
          case "a":
            PlaySound(getCleanGuitar().get("Bb2"));
            break;
          case "s":
            PlaySound(getCleanGuitar().get("Eb4"));
            break;
          case "y":
            PlaySound(getCleanGuitar().get("Bb3"));
            break;
          case "x":
            PlaySound(getCleanGuitar().get("F4"));
            break;
          case "c":
            PlaySound(getCleanGuitar().get("C3"));
            break;
          case "v":
            PlaySound(getCleanGuitar().get("F3"));
            break;
          case "b":
            PlaySound(getCleanGuitar().get("D2"));
            break;
          case "t":
            PlaySound(getCleanGuitar().get("G4"));
            break;
          default:
        }
      }}
    />)
};

function PlayGuitar(props) {
  Howler.volume(0.1);
  return (
    <><HandleKeyPress />
      <img alt="guitar" src={GuitarPic} height="200" width="1000"/>
    </>
  );
}

export default PlayGuitar;

//qwer
//ase
//eyx
//cwer
//s
//cer
//vyb
//we

//qwer
//ase
//eyx
//t
//y
//cwer
//s
//cer
//vyb
//we