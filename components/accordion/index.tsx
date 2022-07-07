import React, { useState } from 'react';
import styles from '../accordion/Accordion.module.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accitem}>
        
      <div className={styles.acctitle} onClick={() => setIsActive(!isActive)}>
        <p className={isActive ? 'blue' : 'black'}>{title}</p>
        <div className={isActive ? 'minus' : 'plus'}></div>
        </div>
      
      {isActive && <div className={styles.acccontent}>{content}</div>}
    </div>
  );
};

export default Accordion;