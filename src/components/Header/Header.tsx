import { useState, useRef } from "react";
import s from "./Header.module.css";
import play from "../../assets/img/play.svg";
import pause from "../../assets/img/pause.svg";
import ormanents from "../../assets/img/ornaments.png";
import song from "../../assets/audio/music.mp3";

export const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(song));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container">
      <div className={s.header}>
        <div className={s.headerContent}>
          <div className={s.headerData}>
            <h1>
              15 <br />
              09 <br />
              24
            </h1>
          </div>
          <div className={s.title}>
            <h2>Мансур & Гүлназ</h2>
            <p>Тойға шақыру</p>
          </div>
          <button className={s.musicButton} onClick={togglePlayPause}>
            <img src={isPlaying ? pause : play} alt="Play/Pause" />
          </button>
        </div>
        <img src={ormanents} alt="Flowers" className={s.flowerstop} />
        <img src={ormanents} alt="Flowers" className={s.flowersbottom} />
      </div>
    </div>
  );
};
