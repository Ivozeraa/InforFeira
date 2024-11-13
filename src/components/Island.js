import React, { useState } from 'react';
import CustomModal from './Modal'; // Componente do modal importado
import styles from '../css/Island.module.css';

function Island({ index, onComplete }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false); // Estado para verificar se o desafio já foi concluído

  // Função para abrir o modal
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  // Função chamada ao completar o desafio
  const handleComplete = () => {
    if (!isCompleted) {
      setIsCompleted(true); // Marca o desafio como concluído
      onComplete(); // Chama a função de progresso apenas uma vez
    }
    handleCloseModal(); // Fecha o modal
  };

  return (
    <div
      className={`${styles.island} ${isCompleted ? styles.completed : ''}`}
      onClick={handleOpenModal}
    >
      <img src={`path/to/island${index + 1}.jpg`} alt={`Ilha ${index + 1}`} />
      {isCompleted && <div className={styles.overlay}>
        <h3 className={styles.Concluido}>Concluído</h3></div>}
      
      <CustomModal
        isOpen={modalIsOpen}            // Passando o estado de abertura do modal
        onRequestClose={handleCloseModal} // Passando a função de fechamento
        index={index} 
        onComplete={handleComplete} // Passando a função ajustada para completar o desafio
      />
    </div>
  );
}

export default Island;
