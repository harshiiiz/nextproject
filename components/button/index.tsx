import React,{FC} from 'react'
import styles from '../../dist/css/Button.module.css'

interface proptype{
  name:string;
  btnlink:string;
}

const Button:FC<proptype>=(props) => {
  return (
    <div className={styles.button}>
      <a  href={props.btnlink} className={styles.buttontext}>{props.name}</a>
    </div>
  )
}

export default Button