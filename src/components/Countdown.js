import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o hook de navegação, caso use React Router
import styles from "../css/countdown.module.css";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const navigate = useNavigate(); // Inicializar o hook de navegação

  useEffect(() => {
    const countDownTime = new Date("Nov 22, 2024 08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        setTimeout(() => {
          navigate("/finalcountdown"); 
        }, 500);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      <div className={styles.main}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Tempo restante</h2>
          <h1>
            Salve a <span className={styles.highlight}>Informática!</span>
          </h1>
          <div className={styles.launchTime}>
            <div>
              <p className={styles.time} id="days">
                {timeLeft.days}
                <span className={styles.timeLabel}>D</span>
              </p>
            </div>
            <div>
              <p className={styles.time} id="hours">
                {timeLeft.hours}
                <span className={styles.timeLabel}>H</span>
              </p>
            </div>
            <div>
              <p className={styles.time} id="minutes">
                {timeLeft.minutes}
                <span className={styles.timeLabel}>M</span>
              </p>
            </div>
            <div>
              <p className={styles.time} id="seconds">
                {timeLeft.seconds}
                <span className={styles.timeLabel}>S</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
