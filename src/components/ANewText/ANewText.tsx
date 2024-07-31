import { useRef, useState } from "react";
import s from "./ANewText.module.css";
import song from "../../assets/audio/music.mp3";
import play from "../../assets/img/play.svg";
import pause from "../../assets/img/pause.svg";
import ornamentImg from "../../assets/img/ornament.png";
import ornamentTwoImg from "../../assets/img/ornamentwo.png";
// import calendImg from "../../assets/img/calend.png";
import { ANewTextTwo } from "../ANewTextTwo/ANewTextTwo";
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
    <div>
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
            <h1>
              ҚҰРМЕТТІ АҒАЙЫН - ТУЫС,
              <br />
              БАУЫРЛАР, ҚҰДА - ЖЕКЖАТ, <br />
              НАҒАШЫЛАР, ЖИЕН - БӨЛЕЛЕР,
              <br />
              ДОС - ЖАРАНДАР, ӘРІПТЕСТЕР,
              <br />
              КӨРШІЛЕР!
            </h1>
          </div>
          <div className={s.titlenew}>
            <h1>
              CІЗ(ДЕР)ДІ ҰЛЫМЫЗ,
              <br />
              <span>Мансур</span>
              <br />
              ПЕН КЕЛІНІМІЗ <br />
              <span>Гүлназдың</span>
              <br />
              ҮЙЛЕНУ ТОЙЫНА,
              <br />
              АРНАЛҒАН АҚ
              <br />
              ДАСТАРХАНЫМЫЗДЫҢ <br />
              ҚАДІРЛІ ҚОНАҒЫ <br />
              БОЛУҒА ШАҚЫРАМЫЗ!
            </h1>
          </div>
          <div className={s.line}></div>
        </div>
      </div>
      <ANewTextTwo />
      <div className="container">
        <div className={s.textContent}>
          <div className={s.titlenum}>
            <h1>Той иелері:</h1>
            <h2>Жасұлан-Айнұр</h2>
            <p>
              Келіңіздер, қуанышымызға <br />
              ортақ болыңыздар!
            </p>
          </div>
          <div className={s.titleTimes}>
            <h1>Той Бағдарламасы</h1>
          </div>
          <div className={s.times}>
            <p>17:00 - Қонақтардың жиналуы </p>
            <br />
            <p>17:30 - Фотосессия</p> <br />
            <p>18:00 - Тойдың басталуы</p>
          </div>
          <div className={s.ornamenttwo}>
            <img src={ornamentTwoImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
