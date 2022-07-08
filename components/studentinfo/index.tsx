import React,{FC} from 'react'
import styles from '../studentinfo/Studentinfo.module.scss'

interface proptype{
  infonum: number;
}
const index :FC<proptype>= (props) => {
  return (
    <div className="studentinfocontainer">
        <div className={styles.student1}>Student {props.infonum}</div>
        <div className={styles.sicol}>
        <div className='gender'>
                  <label className="form_label"  htmlFor="lastName">First Name</label>
                  <input  type="text" name="" id="lastName"  className='form__input3'placeholder=""/>
        </div>
        <div className='gender2'>
                  <label className="form_label"  htmlFor="lastName">Last Name</label>
                  <input  type="text" name="" id="lastName"  className='form__input3'placeholder=""/>
        </div>
        <div className="gender3">
              <label className="form_label" htmlFor="country">Gender</label>
                 <select className='form__inputt3' id="country" name="country">
                    <option value="australia">Male</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
        <div className="gender4">
        <label className='form_label' htmlFor="birthday">Date Of Birth</label>
         <input className='form__inputbd' type="text" id="birthday" name="birthday" placeholder='01 /12 / 2002'/>
         </div>
        </div>
        <div className={styles.sicol}>
        
        <div className="gender5">
              <label className="form_label" htmlFor="country">Grade Group</label>
                 <select className='form__inputt3' id="country" name="country">
                    <option value="australia">Senior Secondary</option>
                    <option value="canada">Junior Secondary</option>
                  </select>
        </div>
        <div className="gender6">
              <label className="form_label" htmlFor="country">Competition Category</label>
                 <select className='form__inputt3' id="country" name="country">
                    <option value="australia">Science</option>
                    <option value="canada">Female</option>
                  </select>
        </div>
        <div className="gender7">
              <label className="form_label" htmlFor="country">Class</label>
                 <select className='form__inputt3' id="country" name="country">
                    <option value="australia">Year 7 / Grade 7 / JSS1</option>
                    <option value="canada">Year 8 / Grade 8 / JSS1</option>
                  </select>
        </div>
        <div className="gender8">
                  <label className="form_label" htmlFor="password">Registered uLesson Number</label>
                  <input className="form__input3" type="number"  id="password" placeholder=""/>
              </div>

        </div>
    </div>
  )
}

export default index