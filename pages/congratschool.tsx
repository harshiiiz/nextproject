import React from 'react'
//import styles from '../styles/Congratschool.module.css'
import Successreg from '../components/successreg'

const congratschool = () => {
    const regtext='You have successfully registered for the uLesson schools challenge';
    const followlink1="Please follow the link below to register each of your students on the uLesson app for their first stage examination.";
    const followlink2="Use each student's phone number as you have entered on the form to access the app"
  return (
    <Successreg regtext={regtext} followlink1={followlink1} followlink2={followlink2} num={1}/>
  )
}

export default congratschool