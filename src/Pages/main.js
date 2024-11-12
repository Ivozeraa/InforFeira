import React, { useState } from "react";
import ProgressBar from 'react-progressbar'; // Importando a biblioteca de barra de progresso
import styles from "../css/Index.module.css"; // Estilos da aplicação

export function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [userInput, setUserInput] = useState("");

  // Progresso das ilhas (exemplo)
  const [progress, setProgress] = useState({
    "Ilha 1": 0,
    "Ilha 2": 0,
    "Ilha 3": 0,
    "Ilha 4": 0,
    "Ilha 5": 0,
  });

  // Função para abrir o modal quando uma imagem for clicada
  const handleIslandClick = (island) => {
    setSelectedIsland(island);
    setModalVisible(true);
  };

  // Função para lidar com a mudança no input do modal
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Função para fechar o modal
  const handleModalClose = () => {
    setModalVisible(false);
    setUserInput(""); // Limpar o input ao fechar
  };

  // Função para enviar o conteúdo do modal e atualizar o progresso
  const handleSubmit = () => {
    alert(`Informação da Ilha ${selectedIsland}: ${userInput}`);
    setProgress({
      ...progress,
      [selectedIsland]: 100, // Atualiza o progresso da ilha selecionada
    });
    setModalVisible(false);
  };

  // Função para calcular o progresso total (média dos progressos das ilhas)
  const calculateTotalProgress = () => {
    const total = Object.values(progress).reduce((acc, curr) => acc + curr, 0);
    return total / 5; // Média do progresso das 5 ilhas
  };

  return (
    <>
      <div className={styles.main}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Clique nas ilhas</h2>
          <div className={styles.islandsContainer}>
            {["Ilha 1", "Ilha 2", "Ilha 3", "Ilha 4", "Ilha 5"].map((island, index) => (
              <div
                key={index}
                className={styles.island}
                onClick={() => handleIslandClick(island)}
              >
                <img
                  src={`../imgs/ilha${index + 1}.jpeg`} // Certifique-se de que as imagens estão no caminho correto
                  alt={`Imagem da ${island}`}
                  className={styles.islandImage}
                />
                {/* Barra de progresso individual para cada ilha */}
                <ProgressBar
                  completed={progress[island]}
                  height={10}
                  color="green"
                  bgColor="#ddd"
                  className={styles.progressBar}
                  animateOnRender={true}
                />
              </div>
            ))}
          </div>

          {/* Barra de progresso geral */}
          <div className={styles.totalProgressContainer}>
            <span>Progresso Geral</span>
            <ProgressBar
              completed={calculateTotalProgress()}
              height={20}
              color="#4caf50"
              bgColor="#ddd"
              className={styles.totalProgressBar}
              animateOnRender={true}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Informação sobre {selectedIsland}</h3>
            <textarea
              value={userInput}
              onChange={handleInputChange}
              placeholder="Digite sua informação..."
            />
            <div className={styles.modalButtons}>
              <button onClick={handleSubmit}>Enviar</button>
              <button onClick={handleModalClose}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
