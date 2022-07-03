import React from 'react'
import styles from '../frame3/Frame3.module.scss'
import senior from '../../public/senior.svg'
import Image from 'next/image'
import eligibility from '../../public/Frame19652.svg'
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

        <div className={styles.senior}>
          <Image src={senior}></Image>
        </div>
        <div className={styles.eligibility}>
          <Image src={eligibility}></Image>
        </div>
    </div>
  )
}

export default index