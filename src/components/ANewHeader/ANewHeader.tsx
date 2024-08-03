import s from "./ANewHeader.module.css";
import headerNewIMG from "../../assets/img/header.png";

export const ANewHeader = () => {
  return (
    <div className={s.anewHeader}>
      <img src={headerNewIMG} alt="Header" className={s.headerIMG} />
    </div>
  );
};
