import React from 'react'
import styles from '../../dist/css/Frame4.module.css'
import Stages from '../stages'

const index = () => {
  return (
    <div className={styles.frame4container}>
        <div className={styles.frame4title}>Challenge Stages</div>
        <div className={styles.dottedline1}></div>
        <div className={styles.dottedline2}></div>
        <div className={styles.stage1}>
          
          <Stages stageno={1} date={'Saturday, July 2nd, 2022; 10:00am.'} text1={'VIRTUAL contest to be taken on the uLesson app - available on Android, iOS (phones and tablets) and web (laptops, desktop computers). '} text2={'Stage One is open to all registered candidates. '} icon={'../../public/'} stage={'Stage 1'}/>
          </div>
        
        <div className={styles.stage2}>
           <Stages stageno={2} date={'Saturday, July 16th, 2022'} text1={'PHYSICAL contest to be held at locations in Lagos, Abuja, and Port Harcourt. Schools or parents will be responsible for bringing invited candidates to these locations. '} text2={'Top 30 candidates in each of the four categories (Junior, Senior Business, Senior Science, Senior Humanities) will be invited to proceed to Stage Two. '} icon={'../../public/'} stage={'Stage 2'}/>
           </div>
        <div className={styles.stage3}>
        <Stages stageno={3} date={'Saturday, July 30th, 2022.'} text1={' PHYSICAL quiz show to be held in Lagos or Abuja. Arrangements will be made by the uLesson team to cover transport and welfare costs for successful candidates who do not reside in the host city.'} text2={'Top 10 candidates in each of the four categories (Junior, Senior - Business, Senior -  Science, Senior - Humanities) will be invited to proceed to the final stage. '} icon={'../../public/'} stage={'Final Stage'}/>
        </div>
    </div>
  )
}

export default index