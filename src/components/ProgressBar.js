import React from 'react';
import styles from '../css/ProgressBar.module.css';

function ProgressBar({ completed, total }) {
  const progress = (completed / total) * 100;
  return (
    <div className={styles.progressBar}>
      <div className={styles.progress} style={{ width: `${progress}%` }}></div>
      <span className={styles.progressText}>{completed}/{total} completado</span>
    </div>
  );
}

export default ProgressBar;
