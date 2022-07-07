import React, { useState } from 'react';
import styles from '../accordion/Accordion.module.scss';
import Image from 'next/image';


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accitem}>
        
      <div className={styles.acctitle} onClick={() => setIsActive(!isActive)}>
        <p className={isActive ? 'blue' : 'black'}>{title}</p>
        <Image src={isActive ? '/minus.svg' : '/plusbig.svg'} width={18} height={16}></Image>
        </div>
      
      {isActive && <div className={styles.acccontent}>{content}</div>}
    </div>
  );
};

export default Accordion;