import s from "./texttwo.module.css";
import calend from "../../assets/img/calend2.png";
import flowers from "../../assets/img/flowers.png";

export const TextTwo = () => {
  return (
    <div className="container">
      <div className={s.texttwoContent}>
        <div className={s.textData}>
          <h2>Той салтанаты:</h2>
        </div>
        <div className={s.title}>
          <h2>15 қыркүйек 2024 жыл</h2>
        </div>
        <div className={s.photoText}>
          <img src={calend} alt="" />
        </div>
        <div className={s.title}>
          <h2>Басталуы 18:00 </h2>
        </div>
        <img src={flowers} alt="Flowers" className={s.flowerstop} />
      </div>
    </div>
  );
};
