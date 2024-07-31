import { useState, ChangeEvent, FormEvent } from "react";
import s from "./ANewForm.module.css";

export const ANewForm = () => {
  const [attendance, setAttendance] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAttendanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAttendance(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const botToken = "7009623358:AAGiZG33iA6lD93QD4ULSPGp5B906VxRGAg";
    const chatId = "-4282477877";
    const message = `Аты-жөніңіз: ${name}\nТойға келесіз бе: ${attendance}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className={s.forms}>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className={s.title}>
              <h1>Тойға Қатысуыңыз</h1>
            </div>

            <div className={s.subtitle}>
              <p>
                Аты-жөніңізді жазыңыз (Жұбайыңызбен келетін болсаңыз,
                есімдеріңізді бірге жазуды өтінеміз)
              </p>
            </div>
            <input
              placeholder="Аты-жөніңіз"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className={s.formcheckboxs}>
              <p>Тойға келесіз бе?</p>
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  onChange={handleAttendanceChange}
                />
                Ия, әрине келемін
              </label>
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="with_partner"
                  onChange={handleAttendanceChange}
                />
                Жұбайыммен келемін
              </label>
              <label>
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  onChange={handleAttendanceChange}
                />
                Өкінішке орай келе алмаймыз
              </label>
            </div>
            <button type="submit">Жіберу</button>
          </form>
        ) : (
          <div className={s.submittedMessage}>
            <p>Жауабыңыз жіберілді!</p>
          </div>
        )}
      </div>
    </div>
  );
};
