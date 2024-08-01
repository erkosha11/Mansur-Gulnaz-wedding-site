import s from "./ANewMore.module.css";
import Countdown, { CountdownRenderProps } from "react-countdown";

const Completionist = () => <span className={s.finish}>Той басталды!</span>;

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
        <span className={s.border}></span>
        <div className={s.timeUnit}>
          <div>
            <span>{hours}</span>
            <span>Сағат</span>
          </div>
        </div>
        <span className={s.border}></span>
        <div className={s.timeUnit}>
          <div>
            <span>{minutes}</span>
            <span>Минут</span>
          </div>
        </div>
        <span className={s.border}></span>
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

export const ANewMore = () => {
  const weddingDate = new Date("2024-09-15T18:00:00");
  return (
    <div className={s.timer}>
      <div className="container">
        <div className={s.textContent}>
          <div className={s.textData}>
            <h2>Тойға дейін қалды:</h2>
          </div>
          <div className={s.otchet}>
            <Countdown date={weddingDate} renderer={renderer} />
          </div>
        </div>
      </div>
    </div>
  );
};
