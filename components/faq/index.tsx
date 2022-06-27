import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import styles from '../../dist/css/Faq.module.css'

const data = {
    //title: "FAQ (How it works)",
    rows: [
        {
            title: "Which students should I register for this competition?",
            content: `While all students are advised to participate, the competition will test participants in a category equally. For instance, participants in the junior secondary category will answer the same questions, irrespective of the class of the different participants.`,
        },
        {
            title: "Which curriculum will the Challenge questions cover?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Do students need to come for the physical exams with their school uniforms? ",
            content: `Curabitur laoreet, mauris vem.sa euismod dignissim. `,
        },
        
    ],
};
const styless = {
    // bgColor: 'white',
    //titleTextColor: "blue",
    rowTitleColor: "#170F49",
     rowContentColor: '#301446',
     
     rowContentTextSize: '18px',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
    expandIcon: "+",
    collapseIcon: "-",
};
const index = () => {
  return (
    <div className={styles.frame6container}>
        <div className={styles.faqtitle}>Frequently Asked Questions</div>
        <div className={styles.frame19657}>
            <Faq
                data={data}
                styles={styless}
                config={config}
            />
            </div>
        </div>

  )
}

export default index