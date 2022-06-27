import React from 'react'
import styles from '../../dist/css/Frame3.module.css'
const index = () => {
  return (
    <div className={styles.frame3container}>
        <div className={styles.competition}>Competition Categories</div>
        <div className={styles.frame19724junior}>
            
            <div className={styles.subjects}>
                <div className={styles.frame19769}>
                    
                    <div className={styles.maths}>Mathematics</div> 
                    <div className={styles.lang}>English Language</div> 
                    
                    </div>
            </div>

            <div className={styles.title}>
                
                <div className={styles.titlename}>Junior</div>
                <div className={styles.basicscience}>Basic Science</div>
            </div>
        </div>

        <div className={styles.senior}></div>
        <div className={styles.eligibility}></div>
    </div>
  )
}

export default index