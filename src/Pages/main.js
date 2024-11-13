import React, { useState, useEffect } from "react";
import Island from "../components/Island";
import ProgressBar from "../components/ProgressBar";
import styles from "../css/Index.module.css";
import { Footer } from "../components/Footer";
import Confetti from 'react-confetti';  // Pacote para confetes

export function Index() {
  const [completedChallenges, setCompletedChallenges] = useState(0);
  const totalChallenges = 5;
  const [showCongrats, setShowCongrats] = useState(false); // Estado para exibir a mensagem de parabéns

  // Função que é chamada ao completar um desafio
  const handleChallengeComplete = () => {
    setCompletedChallenges((prev) => prev + 1);
  };

  // Verifica se todos os desafios foram completados
  useEffect(() => {
    if (completedChallenges === totalChallenges) {
      setShowCongrats(true); // Exibe a mensagem de parabéns
      setTimeout(() => {
        setShowCongrats(false); // Esconde a mensagem após 5 segundos
      }, 5000); // Tempo de duração da mensagem (em milissegundos)
    }
  }, [completedChallenges]);

  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.title}>Desafios a concluir</h1>
        <ProgressBar completed={completedChallenges} total={totalChallenges} />
        
        {/* Exibe a animação de confetes e a mensagem de parabéns quando todos os desafios são completados */}
        {showCongrats && (
          <div className={styles.congratsMessage}>
            <h2>Parabéns!</h2>
            <p>Você completou todos os desafios!</p>
          </div>
        )}

        {/* Confetes ocupando toda a tela */}
        {showCongrats && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}

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
