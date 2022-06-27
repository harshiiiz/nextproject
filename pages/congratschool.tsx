import React from 'react'
//import styles from '../styles/Congratschool.module.css'
import Successreg from '../components/successreg'

const congratschool = () => {
    const regtext='You have successfully registered for the uLesson schools challenge';
    const followlink="Please follow the link below to register each of your students on the uLesson app for their first stage examination. Use each student's phone number as you have entered on the form to access the app";
  return (
    <Successreg regtext={regtext} followlink={followlink}/>
  )
}

export default congratschool