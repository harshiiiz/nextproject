import React,{FC} from 'react'
import styles from '../../dist/css/Drivelink.module.css'

interface proptype{
    txt1:string;
    txt2:string;
    linknum:number;
}

const index :FC<proptype>= (props) => {
  return (
    
            <div className={styles.link}>
                <div className={styles.junior}>
                    <div className={styles.jtext}>{props.txt1}</div>
                    </div>
                    <div className={`dlink${props.linknum}`}>
                    <div className={styles.drivelink}>{props.txt2}</div>
                    </div>
               
            </div>
        
  )
}

export default index