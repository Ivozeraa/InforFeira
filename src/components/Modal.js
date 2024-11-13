import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../css/Modal.module.css';

function CustomModal({ isOpen, onRequestClose, index, onComplete }) {
  const [answer, setAnswer] = useState('');

  // Função para quando o formulário for enviado
  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    onComplete();  // Avisa que a resposta foi dada
    onRequestClose();  // Fecha o modal após o envio
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}  // Esta função vai fechar o modal
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      ariaHideApp={false}  // Remove o bloqueio de acessibilidade (útil em dev)
    >
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Enigma da Ilha {index + 1}</h2>
       
        
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
