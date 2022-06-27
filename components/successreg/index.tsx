import React,{FC} from 'react'
import styles from '../../dist/css/Successreg.module.css'
import Drivelink from '../drivelink'

interface proptype{
    regtext:string;
    followlink:string

}

const index :FC<proptype>= (props) => {
  return (
    <div className={styles.congocontainer}>
        <div className="cross"></div>
        <div className="ico"></div>
        <div className={styles.congoicon}></div>
        <div className={styles.reg}>
            <div className={styles.regtext1}>Registration Successful</div>
            <div className={styles.regtext2}>{ props.regtext}</div>

        </div>
        
        <div className={styles.followlink}>{props.followlink}</div>
        <div className={styles.links}>
        <Drivelink txt1='Junior' txt2='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/>
        <Drivelink txt1='Senior (Science)' txt2='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/>
        <Drivelink txt1='Senior (Business)' txt2='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/>
        <Drivelink txt1='Senior (Humanities)' txt2='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'/>
        </div>
    </div>
  )

}

export default index