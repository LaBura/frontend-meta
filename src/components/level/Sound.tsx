import React, { useEffect, useState } from "react";
import muteIcon from "../../assets/boardIcons/music.png";
import unmuteIcon from "../../assets/boardIcons/music.png";

//@ts-ignore
import audioUrl from "../../assets/audio/FarmThemeSong.mp3";
import { CURSORS } from "../../data/cursors";
import "./styles.scss";

export default function Sound() {
  const [audio] = useState(new Audio(audioUrl));
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);
  useEffect(() => {
    audio.addEventListener("ended", () =>
      setTimeout(() => {
        setPlaying(true);
        audio.play();
      }, 5000)
    );
  }, [audio]);
  const toggle = () => setPlaying(!playing);
  return (
    <>
      <img
        style={{
          cursor: CURSORS.pointer.src,
        }}
        src={playing ? unmuteIcon : muteIcon}
        alt=""
        onClick={toggle}
        title="Volume"
        className="boardIcons"
      />
    </>
  );
}
