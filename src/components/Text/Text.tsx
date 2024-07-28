import s from "./Text.module.css";
import flowers from "../../assets/img/flowers.png";
import spin from "../../assets/img/spin.png";
export const Text = () => {
  return (
    <div className="container">
      <div className={s.textContent}>
        <div className={s.textData}>
          <h1>
            Ұлы тойдың келтіргендей <br />
            орайын,
            <br />
            Қуанышқа толды міне
            <br />
            маңайым. <br />
            Бір баламыз екеу болды <br />
            мінекей, <br />
            Тойға келіп батаңды бер <br />
            ағайын!
          </h1>
        </div>
        <div className={s.title}>
          <h2>
            Құрметті ағайын - туыс,
            <br /> бауырлар, құда - жекжат,
            <br /> нағашы - жиен, бөлелер,
            <br />
            құрбы - құрдас,дос-жарандар,
            <br /> ұжымдастар,көршілер!
          </h2>
        </div>
        <div className={s.subtitle}>
          <h2>
            Cіз(дер)ді <br />
            ұлымыз бен келініміз
          </h2>
        </div>
        <div className={s.textData}>
          <h2>Мансур мен Гүлназ</h2>
        </div>
        <div className={s.title}>
          <h2>
            үйлену тойына арналған <br />
            салтанатты ақ
            <br />
            дастарханымыздың қадірлі <br /> қонағы болуға шақырамыз!
          </h2>
        </div>
        <img src={spin} alt="spin" className={s.spin} />

        <img src={flowers} alt="Flowers" className={s.flowersbottom} />
      </div>
    </div>
  );
};
