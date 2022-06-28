
import React,{FC} from 'react'
import styles from '../../dist/css/Register.module.css'
import Button from '../button';
interface proptype{
    textreg:string;
    boxnum:number;
    btnlink:string;
}

const index :FC<proptype>= (props) => {
  return (
    
        <div className={`box${props.boxnum}`}>
        <div className={styles.grp36517}>
        <div className={styles.textreg}>{props.textreg}</div>
        <div className={styles.buttn}>
          
        <Button name={'REGISTER NOW'} btnlink={props.btnlink}/>
        
        </div>
        </div>
        
            <div className={`img${props.boxnum}`}></div>
        
        </div>
    
  )
}

export default index