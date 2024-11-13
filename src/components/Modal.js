import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import styles from '../css/Modal.module.css';

// ESSA PORCARIA NAO FECHA

function CustomModal({ isOpen, onRequestClose, index, onComplete }) {
  const [answer, setAnswer] = useState('');
  const closeButtonRef = useRef(null); // Ref para o botão de fechar

  // Função para quando o formulário for enviado
  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    onComplete(); // Avisa que a resposta foi dada
    closeModal(); // Fecha o modal manualmente
  };

  // Função para fechar o modal manualmente
  const closeModal = () => {
    // Verifica se a função de fechamento foi passada como prop, se sim, chama ela
    if (onRequestClose) {
      onRequestClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}  // Agora chamando a função de fechamento manual
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      ariaHideApp={false}
    >
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Enigma da Ilha {index + 1}</h2>
        <button 
          className={styles.closeButton} 
          ref={closeButtonRef}  // Associando o botão de fechar com a ref
          onClick={closeModal}  // Fechar o modal ao clicar no botão
        >
          &times;
        </button>
      </div>
      
      <form onSubmit={handleAnswerSubmit}>
        <label className={styles.modalLabel}>
          Responda:
          <input 
            type="text" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)} 
            required 
            className={styles.modalInput} 
          />
        </label>
        <button type="submit" className={styles.modalButton}>Enviar</button>
      </form>
    </Modal>
  );
}

export default CustomModal;
