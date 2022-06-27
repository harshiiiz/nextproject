import React,{FC} from 'react'
import styles from '../../dist/css/Registerform.module.css'
interface proptype{
    formtitle:string;
    in1:string;
    in2:string;
    in3:string;
    in4:string;
    in5:string;
    in6:string;

}

const index :FC<proptype>= (props) => {
  return (
    <div className={styles.formheader}>
            <div className={styles.heading}>
                <div className={styles.formtext1}>{props.formtitle}</div>
                <div className={styles.formtext2}>Please read all instructions carefully before registering for the uLesson Challenge </div>
            </div>

        
        <div className={styles.instructions}>
           
            <ul className={styles.ul}>
                <li >{props.in1}</li>
                <li>{props.in2}</li>
                <li>{props.in3}</li>
                <li>{props.in4}</li>
                <li>{props.in5}</li>
                <li>{props.in6}</li>
            </ul>
        </div>
        </div>
  )
}

export default index