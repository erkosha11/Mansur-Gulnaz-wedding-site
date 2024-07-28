import { useState, ChangeEvent, FormEvent } from "react";
import s from "./Forms.module.css";

export const Forms = () => {
  const [attendance, setAttendance] = useState("");
  const [customAnswer, setCustomAnswer] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wish, setWish] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAttendanceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAttendance(e.target.value);
  };

  const handleCustomAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomAnswer(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const botToken = "7009623358:AAGiZG33iA6lD93QD4ULSPGp5B906VxRGAg";
    const chatId = "-4282477877";
    const message = `
      Аты-жөніңіз: ${name}
      Тойға келесіз бе: ${
        attendance === "undecided" ? customAnswer : attendance
      }
      Телефон номеріңіз: ${phone}
      Тойға тілегіңіз: ${wish}
    `;

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
    <div className={s.forms}>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Аты-жөніңізді жазыңыз
            <br />
            (Жұбайыңызбен келетін болсаңыз, есімдеріңізді бірге жазуды өтінеміз)
          </label>
          <input
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
            <label>
              <input
                type="radio"
                name="attendance"
                value="undecided"
                onChange={handleAttendanceChange}
              />
              Өз жауабымыз
            </label>
            {attendance === "undecided" && (
              <input
                type="text"
                name="customAnswer"
                placeholder="Өз жауабыңызды жазыңыз"
                value={customAnswer}
                onChange={handleCustomAnswerChange}
              />
            )}
          </div>
          <label>
            Телефон номеріңіз:
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
            Тойға тілегіңіз:
            <textarea
              name="wish"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
            ></textarea>
          </label>
          <button type="submit">Жіберу</button>
        </form>
      ) : (
        <div className={s.submittedMessage}>
          <p>Жауабыңыз жіберілді!</p>
        </div>
      )}
    </div>
  );
};
