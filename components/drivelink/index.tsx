import React,{FC} from 'react'
import styles from '../../dist/css/Drivelink.module.css'

interface proptype{
    txt1:string;
    txt2:string;
}

const index :FC<proptype>= (props) => {
  return (
    
            <div className={styles.link}>
                <div className={styles.junior}>
                    <div className={styles.jtext}>{props.txt1}</div>
                    </div>
                    <div className={styles.dlink}>
                    <a className={styles.drivelink}>{props.txt2}</a>
                    </div>
               
            </div>
        
  )
}

export default index