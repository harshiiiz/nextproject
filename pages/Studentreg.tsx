import React from 'react'
import styles from '../styles/Studentreg.module.css'
import Registerform from '../components/registerform'

import Schooldetails from '../components/schooldetails'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logotransparent.svg'
import cros from '../public/cross.svg'

const studentreg = () => {
  return (
    <div className={styles.regcontainer}>
    <div className={styles.container}>
    <div className={styles.nav}>
      
      <div className={styles.ico}>
      <Image src={logo}  width={133} height={22}  alt='' ></Image>
      </div>
      <Link href={'/'}>
      <a  className={styles.cross}>
      <Image src={cros} width={32} height={32} alt=''></Image>
      </a>
      </Link>
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
                 <select className='form__inputt' id="country" name="country">
                    <option value="australia">Male</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
        
            </div>
            <div className="frame19751">
            <div className="gender">
        <label className='form_label' htmlFor="birthday">Date Of Birth</label>
         <input className={styles.form__inputbd} type="text" id="birthday" name="birthday" placeholder="01 /12 / 1986"/>
         </div>
         <div className="gender">
              <label className="form_label" htmlFor="country">Grade Group</label>
                 <select className='form__inputt' id="country" name="country">
                    <option value="australia">Senior Secondary</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
         <div className='gender'>
                  <label className="form_label"  htmlFor="lastName">Category</label>
                  <input  type="text" name="" id="lastName"  className='form__input'placeholder="Humanities"/>
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
                 <select className='form__inputt' id="country" name="country">
                    <option value="australia">Lagos</option>
                    <option value="canada">Nigeria</option>
                  </select>
        </div>
            </div>
          </div>
        </div>
        <div className={styles.scdetails}>
        {/* <Schooldetails/> */}
        <div className={styles.detailscontainer}>
      <div className={styles.detailstitle}>School Details</div>
      <div className={styles.schoolform}>
        <div className="username">
          <label className="form__label1" htmlFor="firstName">
            School Name{" "}
          </label>

          <div className="input">
            <input
              className="form__input1"
              type="text"
              placeholder="El-Amin International School"
            />
          </div>
        </div>
        <div className="column22">
          <div className="schcountry">
            <label className="form_label" htmlFor="lastName">
              School Country{" "}
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className={styles.form__inputbc}
              placeholder="Nigeria"
            />
          </div>
          <div className="location">
            <label className="form_label" htmlFor="country">
              School Location
            </label>
            <select className="form__inputt" id="country" name="country">
              <option value="australia">Lagos</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
          
          
        </div>
        <div className="column33">
          <div className="email">
            <label className="form_label" htmlFor="email">
              Principal’s Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder=""
            />
          </div>
          <div className="examlocation">
            <label className="form_label" htmlFor="country">
            Name of Principal / Head of School
            </label>
             <input
              className="form__input"
              type="text"
              id="password"
              placeholder=""
            />
          </div>

          <div className="phn">
            <label className="form_label" htmlFor="password">
              Principal’s Phone Number{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="password"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
        </div>
        
    </div>
    <div className={styles.submit}>
                <Link href={'/congratstudent'} className={styles.btntext}>Submit</Link>
                
              </div>
    </div>
    
    </div>
  )
}

export default studentreg
