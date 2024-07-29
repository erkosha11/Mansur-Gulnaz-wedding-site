import s from "./ANewHeader.module.css";
import headerIMG from "../../assets/img/mans.jpg";

export const ANewHeader = () => {
  return (
    <div className={s.anewHeader}>
      <img src={headerIMG} alt="Header" className={s.headerIMG} />
    </div>
  );
};
