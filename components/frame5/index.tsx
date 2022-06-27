import React from 'react'
import styles from '../../dist/css/Frame5.module.css'
import Register from '../register'

const index = () => {
  return (
    <div className={styles.frame5container}>
        <Register boxnum={1} textreg={'Register as a Student'} btnlink={'/studentreg'}/>
        <Register boxnum={2} textreg={'Register as a School'} btnlink={'/schoolreg'}/>
    </div>
  )
}

export default index