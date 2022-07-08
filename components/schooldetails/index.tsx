import React from "react";
import styles from "../schooldetails/Schooldetails.module.scss";

const index = () => {
  return (
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
        <div className="column2">
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
          
          <div className="examlocation">
            <label className="form_label" htmlFor="country">
              Preferred Exam location
            </label>
            <select className="form__inputt" id="country" name="country">
              <option value="australia">Lagos</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
          </div>
        </div>
        <div className="column3">
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
  );
};

export default index;
