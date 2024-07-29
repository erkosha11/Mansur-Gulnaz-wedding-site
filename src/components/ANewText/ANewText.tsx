import { useRef, useState } from "react";
import s from "./ANewText.module.css";
import song from "../../assets/audio/music.mp3";
import play from "../../assets/img/play.svg";
import pause from "../../assets/img/pause.svg";
import ornamentImg from "../../assets/img/ornament.png";
import ornamentTwoImg from "../../assets/img/ornamentwo.png";
import calendImg from "../../assets/img/calend.png";
export const ANewText = () => {
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
      <div className={s.textContent}>
        <div className={s.line}></div>
        <div className={s.text}>
          <h1>Жоғары көтеріңіз</h1>
        </div>
        <button className={s.musicButton} onClick={togglePlayPause}>
          <img src={isPlaying ? pause : play} alt="Play/Pause" />
        </button>
        <div className={s.textTwo}>
          <h2>
            МУЗЫКАНЫ, ҚОСУ ҮШІН <br />
            БАТАРЫМАНЫ БАСЫҢЫЗ
          </h2>
        </div>
        <div className={s.ornament}>
          <img src={ornamentImg} alt="Ornament" />
        </div>
        <div className={s.title}>
          <h1>ҚҰРМЕТТІ ҚОНАҚТАР !</h1>
          <p>
            СІЗДЕРДІ МАНСУР МЕН ГҮЛНАЗДЫҢ
            <br />
            ҮЙЛЕНУ ТОЙЫНА ШАҚЫРАМЫЗ <br />
            ТОЙЫНА АРНЛАҒАН АҚ ДАСТРАХАНЫМЫЗДЫҢ
            <br />
            ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА ШАҚЫРАМЫЗ!
          </p>
        </div>
        <div className={s.titlenum}>
          <h1>15.09.2024</h1>
          <h2>Атырау</h2>
          <img src={calendImg} alt="calendImg" />
        </div>
        <div className={s.title}>
          <h1>ТОЙ БАҒДАРЛАМАСЫ</h1>
        </div>
        <div className={s.times}>
          <p>17:00 - Қонақтардың жиналуы </p><br />
          <p>17:30 - Фотосессия</p> <br />
          <p>18:00 - Тойдың басталуы</p>
        </div>
        <div className={s.ornamenttwo}>
          <img src={ornamentTwoImg} alt="" />
        </div>
      </div>
    </div>
  );
};
