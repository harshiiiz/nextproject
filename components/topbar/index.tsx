import React from 'react'
import Link from 'next/link'
import styles from '../topbar/Topbar.module.scss'
import Nav from '../nav/Index'
import Group36540 from '../../public/trophy.svg'
import Image from 'next/image'
const Topbar = () => {
  return (
    <>
    <div className={styles.maincontainer}>
    <div className={styles.topcontainer}>

    <Nav/>
    <div className={styles.topcon}>
    
    <h2 className={styles.join}>
      <p>Join the uLesson</p>
      
    </h2>
    <h2 className={styles.join2}>
    <p>Schools Challenge</p>
    </h2>
    <div className={styles.represent}>
    Represent your school in the uLesson competition and win amazing prizes
    </div>
    
    <div className={styles.btn}>
    <Link href={'/'} className='btntext'>Register Now</Link>
    </div>
    </div>
    <div className={styles.person}>
     <Image src={Group36540} width={551} height={520}></Image>
    </div>
    </div>
    </div>
    </>
  )
}

export default Topbar
