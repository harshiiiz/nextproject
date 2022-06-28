import React , {useState} from 'react'
import styles from '../styles/Schoolreg.module.css'
import Registerform from '../components/registerform'
import Button from '../components/button'
import Schooldetails from '../components/schooldetails'
import Studentinfo from '../components/studentinfo'
import Link from 'next/link'


const Schoolreg = () => {

  const [counter, setCounter] = useState(1);
  
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if(counter<=0) {
    decrementCounter = () => setCounter(1);
  }
  

  return (
    <div className={styles.schcontainer}>
      <Link href='/'>
      <a  className='cross'></a>
      </Link>
    <div  className='ico'></div>
    <div className={styles.formreg}>
        <Registerform formtitle='uLesson Challenge Registration (Schools)' in1='Identify students to enter for each of the four categories.' in2='Make sure each student  has an existing free or paid uLesson account.' in3='Students who do not have existing uLesson accounts can create for free. (available on Android, iOS, and web).' in4='Fill in School details in fields provided.' in5='Please ensure that the mobile number provided for each student is the same as the contact they registered on the uLesson app.' in6='This competition is open to schools and students in Nigeria only'/>
        <div className={styles.part2school}>
        <Schooldetails/>
        </div>
        <div className={styles.part3school}>
          <div className={styles.part3title}>Student details</div>
          <div className={styles.candidateq}>
            <div className={styles.howmany}>How many candidates will you enter for the challenge?</div>
            <div className='countercontainer'>
            <div id='incrementcount'>
            <input type="image" id="plus" src="plus.png" onClick={incrementCounter} />
             </div>
             <div id='count'>
            <input  type='number' defaultValue={counter} className='countinput'  />
           </div>
           <div id='decrementcount'>
             <input type="image" id="minus" src="minus.png" onClick={decrementCounter} />
           </div>
           </div>
          </div>
          <div className="studentcontainer">{
          [...Array(counter)].map((e, i) => 
          
          <Studentinfo infonum={i+1} key={e} />)
          }
          </div>
        </div>
    
    </div>
    <div className={styles.submit}>
    <Button name='Submit' btnlink='/congratschool'/>
    </div>
    </div>
  )
}

export default Schoolreg
