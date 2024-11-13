import React, { useState } from "react";
import Island from "../components/Island";
import ProgressBar from "../components/ProgressBar";
import styles from "../css/Index.module.css";
import { Footer } from "../components/Footer";

export function Index() {
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const totalChallenges = 5;

  const handleChallengeComplete = () => {
    setCompletedChallenges((prev) => prev + 1);
  };

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>Desafios a concluir</h1>
        <ProgressBar completed={completedChallenges} total={totalChallenges} />
        <div className={styles.islandsContainer}>
          {[...Array(totalChallenges)].map((_, index) => (
            <Island
              key={index}
              index={index}
              onComplete={handleChallengeComplete}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
