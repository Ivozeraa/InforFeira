import React, { useState } from 'react';
import CustomModal from './Modal'; // Componente do modal importado
import styles from '../css/Island.module.css';

function Island({ index, onComplete }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.island} onClick={handleOpenModal}>
      <img src={`path/to/island${index + 1}.jpg`} alt={`Ilha ${index + 1}`} />
      
      <CustomModal
        isOpen={modalIsOpen}            // Passando o estado de abertura do modal
        onRequestClose={handleCloseModal} // Passando a função de fechamento
        index={index} 
        onComplete={onComplete} 
      />
    </div>
  );
}

export default Island;
