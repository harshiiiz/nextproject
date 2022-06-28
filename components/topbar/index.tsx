import React from 'react'
import Button from '../button'
import styles from '../../dist/css/Topbar.module.css'
import Nav from '../nav/Index'

const Topbar = () => {
  return (
    <>
    <div className={styles.topcontainer}>

    <Nav/>
    
    <div className={styles.join}>
    Join the uLesson Schools Challenge
    </div>
    <div className={styles.represent}>
    Represent your school in the uLesson competition and win amazing prizes
    </div>
    <div className={styles.person}>

    </div>
    <div className={styles.btn}>
    <Button name={'Register Now'} btnlink={'/Studentreg'}/>
    </div>
    </div>
    
    </>
  )
}

export default Topbar
