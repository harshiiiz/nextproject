import React from "react";
import styles from "../frame3/Frame3.module.scss";
import senior from "../../public/senior.svg";
import Image from "next/image";
import eligibility from "../../public/Frame19652.svg";
import Junior from "../../components/junior";
const index = () => {
  return (
    <div className={styles.fr3cont}>
      <div className={styles.frame3container}>
        <div className={styles.competition}>Competition Categories</div>
        <div className={styles.frame19724junior}>
          <div className={styles.subjects1}>
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
       <div className={styles.juniorboxes}>
        <Junior
          boxnum={1}
          title={"Science"}
          sub1={"Physics"}
          sub2={"Chemistry"}
          sub3={"Maths"}
        />
        <Junior
          boxnum={2}
          title={"Business"}
          sub1={"Economics"}
          sub2={"Accounting"}
          sub3={"Commerce / Business Studies"}
        />
        <Junior
          boxnum={3}
          title={"Humanities"}
          sub1={"Economics"}
          sub2={"Literature-in-English"}
          sub3={"Government & Politics"}
        />
       </div>
        <div className={styles.eligibility}>
          <p className={styles.eligtitle}>Eligibility</p>
          <div className={styles.grp36543}>
            <p className={styles.grp36543title}> Senior</p>
            <p className={styles.grp36543para}>
              Participants for the senior category competition must be under 18
              and current students of their schools, either in Year 10/SSS1 or
              Year 11/SSS2.
            </p>
          </div>
          <div className={styles.grp36544}>
            <p className={styles.grp36543title}>Junior</p>
            <p className={styles.grp36543para}>
              Participants for the junior category competition must be under 18
              and current students of their schools, either in Year 8/JSS2 or
              Year 9/JSS3.
            </p>
          </div>
        </div>

        <div className={styles.formheader}>
          <div className={styles.heading}>
            <div className={styles.formtext1}>Rules of Competition</div>
          </div>

          <div className={styles.instructions}>
            <ul className={styles.ul}>
              <li>
                Schools are allowed to enter as many of their students as they
                would like to register.
              </li>
              <li>
                Schools must register their students with the same name and
                phone number with which the students are registered (or will
                register) on the uLesson app.
              </li>
              <li>
                Schools must register their participants before the registration
                deadline date.
              </li>
              <li>
                Schools must ensure that their participants register for the
                exams on the uLesson app before the deadline date.
              </li>
              <li>
                The decisions of the organizers - uLesson Education Limited, are
                final in every aspect of the challenge.
              </li>
            </ul>
          </div>
        </div>

       <div className={styles.senior}>
          <Image src={senior}></Image>
        </div> 
        
      </div>
    </div>
  );
};

export default index;
