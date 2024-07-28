import s from "./count.module.css";
import flowers from "../../assets/img/flowers.png";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { Forms } from "../Forms/Forms";

const Completionist = () => <span>Той басталды!</span>;

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRenderProps) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className={s.countdown}>
        <div className={s.timeUnit}>
          <div>
            <span>{days}</span>
            <span>Күн</span>
          </div>
        </div>
        <span>:</span>
        <div className={s.timeUnit}>
          <div>
            <span>{hours}</span>
            <span>Сағат</span>
          </div>
        </div>
        <span>:</span>
        <div className={s.timeUnit}>
          <div>
            <span>{minutes}</span>
            <span>Минут</span>
          </div>
        </div>
        <span>:</span>
        <div className={s.timeUnit}>
          <div>
            <span>{seconds}</span>
            <span>Секунд</span>
          </div>
        </div>
      </div>
    );
  }
};

export const Count = () => {
  const weddingDate = new Date("2024-09-15T20:00:00");
  return (
    <div className="container">
      <div className={s.countContent}>
        <div className={s.textData}>
          <h2>Той дейін қалды:</h2>
        </div>
        <div className={s.otchet}>
          <Countdown date={weddingDate} renderer={renderer} />
        </div>
        <div className={s.flowerImg}>
          <img src={flowers} alt="Flowers" className={s.flowersbottom} />
        </div>
        <div className={s.textDataTwo}>
          <h2>Той дейін қалды:</h2>
        </div>
        <div className={s.title}>
          <h2>
            Төмендегі форманы
            <br /> Толтырып тойға
            <br /> Қатысуыңызды сұраймыз:
          </h2>
        </div>
        <div className={s.titleTwo}>
          <h2>
            Жауабыңызды 01.09.2024 Ж. дейін <br />
            күтеміз
          </h2>
        </div>
        <Forms />
      </div>
    </div>
  );
};
