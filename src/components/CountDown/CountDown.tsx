"use client";
import { useEffect, useState } from "react";
import styles from "./CountDown.module.scss";
import Link from "next/link";
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className={styles["countdown-timer"]}>
      <div className={styles["countdown-title"]}>
        <Link style={{textDecoration:"none", color:"white" }}href={"/event"}>
        <span className={styles["countdown-text"]}>Event Title</span>
        </Link>
      </div>
      <div className={styles["countdown"]}>
        <div className={styles["countdown-item"]}>
          <span
            className={`${styles["countdown-value"]} ${styles["black-bg"]}`}
          >
            {timeLeft.days}
          </span>
          <span className={styles["countdown-label"]}>Days</span>
        </div>
        <div className={styles["countdown-item"]}>
          <span
            className={`${styles["countdown-value"]} ${styles["black-bg"]}`}
          >
            {timeLeft.hours}
          </span>
          <span className={styles["countdown-label"]}>Hours</span>
        </div>
        <div className={styles["countdown-item"]}>
          <span className={`${styles["countdown-value"]}`}>
            {timeLeft.minutes}
          </span>
          <span className={styles["countdown-label"]}>Mins</span>
        </div>
        <div className={styles["countdown-item"]}>
          <span
            className={`${styles["countdown-value"]} ${styles["black-bg"]}`}
          >
            {timeLeft.seconds}
          </span>
          <span className={styles["countdown-label"]}>Secs</span>
        </div>
      </div>
    </div>
  );
};
export default CountdownTimer;
