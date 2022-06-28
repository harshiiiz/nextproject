import React,{FC} from 'react'
import styles from '../../dist/css/Button.module.css'
import Link from 'next/link'

interface proptype{
  name:string;
  btnlink:string;
}

const Button:FC<proptype>=(props) => {
  return (
    <div className={styles.button}>
      <Link  href={props.btnlink}>
      <a   className={styles.buttontext}>{props.name}</a>
      </Link>
    </div>
  )
}

export default Button