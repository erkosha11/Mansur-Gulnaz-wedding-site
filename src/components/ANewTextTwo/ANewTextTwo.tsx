import s from "./ANewTextTwo.module.css";

export const ANewTextTwo = () => {
  return (
    <div className={s.anewTextTwo}>
      <div className="container">
        <div className={s.textContent}>
          <div className={s.textData}>
            <h1>МЕКЕН - ЖАЙМЫЗ</h1>
          </div>
          <div className={s.title}>
            <h2>15 қыркүйек 2024 жыл</h2>
          </div>
          <div className={s.title}>
            <h2>Сағат 18:00 </h2>
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
        </div>
      </div>
    </div>
  );
};
