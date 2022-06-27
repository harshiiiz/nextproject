import React from 'react'
import styles from '../../dist/css/Navbar.module.css'
import Button from '../button'

const index = () => {
    const name='TRY IT NOW';
    
  return (
    <>
    <div className = {styles.frame19222}>
<div className= {styles.ulessonlogo}>
<div className= {styles.group3copy21}>
</div>

</div>
<div className= {styles.frame19221 }>
<div className= {styles.schoolschallenge }>
Schools Challenge
</div>
<div className = {styles.learningbundle }>
Learning Bundle
</div>
<div className= {styles.codingschool }>
Coding School
</div>
< div className= {styles.overlapgroup3}>
<Button name={name}  btnlink={'/studentreg'}/>

</div>
</div>
</div>

</>
  )
}

export default index