import s from "./More.module.css";
import card1 from "../../assets/img/card1.jpg";
import card2 from "../../assets/img/card2.jpg";
import card3 from "../../assets/img/card3.jpg";


export const More = () => {

  return (
    <div className="container">
      <div className={s.more}>
        <div className={s.moreContent}>
          <div className={s.textData}>
            <h2>
              Мекен <span>-</span> жаймыз:
            </h2>
          </div>
          <div className={s.title}>
            <h2>
              Атырау қаласы, <br /> Кенжебай Маденов, 5А <br />
              "Tumar Hall" <br />
              мейрамханасы
            </h2>
          </div>
          <div className={s.title}>
            <h3>
              Жетуге ыңғайлы болу үшін төмендегі <br />
              <span>2GIS</span> сілтемесін қолданыңыз:
            </h3>
          </div>
          <div className={s.moreButton}>
            <a href="https://go.2gis.com/lwvtq">
              <button> 2GIS</button>
            </a>
          </div>
          <div className={s.textDatatwo}>
            <h2>
              Тойдың <span>-</span> бағдарламасы:
            </h2>
          </div>
          <div className={s.cards}>
            <div className={s.card}>
              <img src={card1} alt="" />
              <h2>17:00</h2>
              <h2>Қонақтардың жиналуы</h2>
            </div>

            <div className={s.card}>
              <img src={card2} alt="" />
              <h2>17:30</h2>
              <h2>Фотосессия</h2>
            </div>

            <div className={s.card}>
              <img src={card3} alt="" />
              <h2>18:00</h2>
              <h2>Тойдың басталуы</h2>
            </div>
          </div>
          <div className={s.textData}>
            <h2>Той иелері:</h2>
          </div>
          <div className={s.title}>
            <h2>Жасұлан-Айнұр</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
