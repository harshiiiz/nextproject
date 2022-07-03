import React from 'react'
import styles from '../styles/Studentreg.module.css'
import Registerform from '../components/registerform'
import Button from '../components/button'
import Schooldetails from '../components/schooldetails'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logotransparent.svg'
import cros from '../public/cross.svg'

const studentreg = () => {
  return (
    <div className={styles.regcontainer}>
    <div className={styles.container}>
      <Link href={'/'}>
      <a  className='cross'>
        <Image src={cros} width={32} height={32} alt=''></Image>
      </a>
      </Link>
      <div className="ico">
    <Image src={logo}  width={133} height={22}  alt='' ></Image>
    </div>
    <div className={styles.form}>
        <Registerform formtitle='uLesson Challenge Registration (Student)' in1='Student MUST have an accessible uLesson account. Don’t have an account? Click here to sign up on uLesson.' in2='Fill in School details in fields provided.' in3='Complete your personal details' in4='Please ensure that the mobile number you provide is the same as the contact on your uLesson account. ' in5='Review and submit your details.' in6='This competition is open to schools and students in Nigeria only'/>
        
        <div className={styles.studetails}>
          <div className={styles.stutitle}>Student Details</div>
          <div className={styles.frame19754}>
            <div className='frame19751'>
            <div className='gender'>
                  <label className="form_label"  htmlFor="lastName">First Name</label>
                  <input  type="text" name="" id="lastName"  className='form__input'placeholder=""/>
        </div>
        <div className='gender'>
                  <label className="form_label"  htmlFor="lastName">Last Name</label>
                  <input  type="text" name="" id="lastName"  className='form__input'placeholder=""/>
        </div>
        <div className="gender">
              <label className="form_label" htmlFor="country">Gender</label>
                 <select className='form__input' id="country" name="country">
                    <option value="australia">Male</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
        
            </div>
            <div className="frame19751">
            <div className="gender">
        <label className='form_label' htmlFor="birthday">Date Of Birth</label>
         <input className='form__input' type="date" id="birthday" name="birthday"/>
         </div>
         <div className="gender">
              <label className="form_label" htmlFor="country">Grade Group</label>
                 <select className='form__input' id="country" name="country">
                    <option value="australia">Male</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
         <div className='gender'>
                  <label className="form_label"  htmlFor="lastName">Category</label>
                  <input  type="text" name="" id="lastName"  className='form__input'placeholder=""/>
        </div>
        
            </div>
            <div className="frame19751">
            <div className='gender'>
                  <label className="form_label"  htmlFor="lastName">Class</label>
                  <input  type="text" name="" id="lastName"  className='form__input'placeholder="Grade 7 / JSS1"/>
        </div>
        <div className='gender'>
                  <label className="form_label"  htmlFor="lastName">uLesson Registered Phone Number</label>
                  <input  type="number" name="" id="lastName"  className='form__input'placeholder=""/>
        </div>
        <div className="gender">
              <label className="form_label" htmlFor="country">Preffered Exam Location</label>
                 <select className='form__input' id="country" name="country">
                    <option value="australia">Lagos</option>
                    <option value="canada">Nigeria</option>
                  </select>
        </div>
            </div>
          </div>
        </div>
        <div className={styles.scdetails}>
        <Schooldetails/>
        </div>
        
    </div>
    <div className={styles.submit}>
    <Button name='Submit' btnlink='congratstudent'/>
    </div>
    </div>
    
    </div>
  )
}

export default studentreg
