import React from 'react'
import styles from '../styles/Schoolreg.module.css'
import Registerform from '../components/registerform'
import Button from '../components/button'
import Schooldetails from '../components/schooldetails'
import Studentinfo from '../components/studentinfo'

const schoolreg = () => {
  return (
    <div className={styles.schcontainer}>
      <div className='cross'></div>
    <div  className='ico'></div>
    <div className={styles.formreg}>
        <Registerform formtitle='uLesson Challenge Registration (Schools)' in1='Identify students to enter for each of the four categories.' in2='Make sure each student  has an existing free or paid uLesson account.' in3='Students who do not have existing uLesson accounts can create for free. (available on Android, iOS, and web).' in4='Fill in School details in fields provided.' in5='Please ensure that the mobile number provided for each student is the same as the contact they registered on the uLesson app.' in6='This competition is open to schools and students in Nigeria only'/>
        <div className={styles.part2school}>
        <Schooldetails/>
        </div>
        <div className={styles.part3school}>
          <div className={styles.part3title}>School details</div>
          <div className={styles.candidateq}>
            <div className={styles.howmany}>How many candidates will you enter for the challenge?</div>
          </div>
        <Studentinfo/>
        </div>
    
    </div>
    <div className={styles.submit}>
    <Button name='Submit' btnlink='/congratschool'/>
    </div>
    </div>
  )
}

export default schoolreg