import React,{useState} from 'react'
import styles from '../../dist/css/Nav.module.css'
import Button from '../button'

const index = () => {
    const name='TRY IT NOW';
    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <div className={styles.navigation}>
        
      <div  className={styles.brandname}>
      </div>
      <button className={styles.hamburger}
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={isNavExpanded ? styles.navigationmenuexpanded : styles.navigationmenu}>
            
        <ul >
          <li className={styles.schoolschallenge}>
            <a  className={styles.navtext1} href="/">Schools Challenge</a>
          </li>
          <li className = {styles.learningbundle }>
            <a className={styles.navtext1} href="/">Learning Bundle</a>
          </li>
          <li className= {styles.codingschool }>
            <a className={styles.navtext1} href="/">Coding School</a>
          </li>
          <li className= {styles.overlapgroup3}>
          
          <Button name={name} />
          
          </li>
        </ul>
        </div>
      
    
    </div>
  )
}

export default index