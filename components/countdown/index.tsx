import React from "react";
import styles from "../countdown/Countdown.module.scss";
import Image from "next/image";
import useCountDown from "react-countdown-hook";

const index = () => {
  const [timeLeft, { start }] = useCountDown(422045120, 60000);
  React.useEffect(() => {
    start();
  }, []);
  const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
  const daysms = timeLeft % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = timeLeft % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = timeLeft % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);

  return (
    <div className={styles.countcont}>
      <div className={styles.ccont}>
        <div className={styles.grp19444}>
          <div className={styles.grp19442}>
            <div className={styles.img}>
              <Image src={"/ic1.svg"} width={64} height={64}></Image>
            </div>
            <div className={styles.grp19442txt}>21</div>
          </div>
          <div className={styles.txt2}>SCHOOLS REGISTERED</div>
        </div>
        <div className={styles.grp19445}>
          <div className={styles.grp19443}>
            <div className={styles.img}>
              <Image src={"/ic2.svg"} width={64} height={64}></Image>
            </div>
            <div className={styles.grp19443txt}>4025</div>
          </div>
          <div className={styles.txt2}>STUDENTS REGISTERED</div>
        </div>
        <div className={styles.grp19446}>
          <div className={styles.grp19441}>
            <div className={styles.img}>
              <Image src={"/ic3.svg"} width={64} height={64}></Image>
            </div>
            <div className={styles.timer}>
              <div className={styles.timertxt}>
                <div className={styles.hour}>DAYS</div>
                <div className={styles.hour}>HOURS</div>
                <div className={styles.hour}>MINS</div>
              </div>

              <div className={styles.grp19441txt}>
                {days} : {hours} : {minutes}
              </div>
            </div>
          </div>
          <div className={styles.txt2}>TIME TO COMPETITION</div>
        </div>
      </div>
    </div>
  );
};

export default index;
