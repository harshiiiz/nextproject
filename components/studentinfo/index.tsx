import React from 'react'
import styles from '../../dist/css/Studentinfo.module.css'

const index = () => {
  return (
    <div className={styles.studentinfocontainer}>
        <div className={styles.student1}>Student</div>
        <div className={styles.sicol}>
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
        <div className="gender">
        <label className='form_label' htmlFor="birthday">Date Of Birth</label>
         <input className='form__input' type="date" id="birthday" name="birthday"/>
         </div>
        </div>
        <div className={styles.sicol}>
        <div className="gender">
              <label className="form_label" htmlFor="country">Gender</label>
                 <select className='form__input' id="country" name="country">
                    <option value="australia">Male</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
        <div className="gender">
              <label className="form_label" htmlFor="country">Gender</label>
                 <select className='form__input' id="country" name="country">
                    <option value="australia">Male</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
        <div className="gender">
              <label className="form_label" htmlFor="country">Gender</label>
                 <select className='form__input' id="country" name="country">
                    <option value="australia">Male</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
        <div className="gender">
                  <label className="form_label" htmlFor="password">Principal’s Phone Number </label>
                  <input className="form__input" type="text"  id="password" placeholder=""/>
              </div>

        </div>
    </div>
  )
}

export default index