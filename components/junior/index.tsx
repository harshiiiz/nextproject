import React,{FC} from 'react'
import styles from '../junior/Junior.module.scss'
interface proptype{
    boxnum:number;
    title:string;
    sub1:string;
    sub2:string;
    sub3:string;
}
const index:FC<proptype> = (props) => {
  return (
    <div className={`seniorbox${props.boxnum}`}>
        <h2 className={styles.titlebox}>Senior</h2>
        <div className={styles.flex}>
            <div className={styles.subtitle}>
                <p className={styles.stitle}>{props.title}</p>
            </div>
                <p className={styles.subjects}>Mathematics</p>
                <p className={styles.subjects}>English Language</p>
                <p className={styles.subjects}>{props.sub1}</p>
                <p className={styles.subjects}>{props.sub2}</p>
                <p className={styles.subjects}>{props.sub3}</p>
            
        </div>
    </div>
  )
}

export default index