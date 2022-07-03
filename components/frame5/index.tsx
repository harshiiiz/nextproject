import React from 'react'
import styles from '../frame5/Frame5.module.scss'
import Register from '../register'

const index = () => {
  return (
    <div className={styles.frame5container}>
        <Register boxnum={1} textreg={'Register as a Student'} btnlink={'/Studentreg'} src={'/student.svg'}/>
        <Register boxnum={2} textreg={'Register as a School'} btnlink={'/Schoolreg'} src={'/school.svg'}/>
    </div>
  )
}

export default index