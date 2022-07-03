import Link from 'next/link';
import React,{FC} from 'react'
import styles from '../successreg/Successreg.module.scss'
import Drivelink from '../drivelink'
import Image from 'next/image'
import logo from '../../public/logotransparent.svg'
import cros from '../../public/cross.svg'


interface proptype{
    regtext:string;
    followlink:string;
    num:number;

}
//school-1 student-2

const index :FC<proptype>= (props) => {
  return (
    <div className={styles.congcontainer}>
    <div className={styles.congocontainer}>
      <Link href={'/'}>
        <a  className="cross">
        <Image src={cros} width={32} height={32} alt=''></Image>
        </a>
        </Link>
        <div className="ico">
        <Image src={logo}  width={133} height={22}  alt='' ></Image>
        </div>
        <div className={styles.congoicon}></div>
        <div className={styles.reg}>
            <div className={styles.regtext1}>Registration Successful</div>
            <div className={styles.regtext2}>{ props.regtext}</div>

        </div>
        
        <div className={styles.followlink}>{props.followlink}</div>
        
        <div className={`link${props.num}`}>
        <Drivelink txt1='Junior' txt2="https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb" linknum={1}/>
         <div className='otherlink1'>
        <Drivelink txt1='Senior (Science)' txt2='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb' linknum={2}/>
        </div>
        <div className='otherlink2'>
        <Drivelink txt1='Senior (Business)' txt2='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'linknum={3}/>
        </div>
        <div className='otherlink3'>
        <Drivelink txt1='Senior (Humanities)' txt2='https://docs.google.com/document/d/19Wx7dHRYBDDKXDDHjb'linknum={4}/>
        </div>
        </div>
    </div>
    </div>
  )

}

export default index