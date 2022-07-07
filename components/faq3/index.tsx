import React from 'react'
import Accordion from '../accordion';
import styles from '../faq3/Faq3.module.scss'

const index = () => {
    const accordionData = [
        {
            title: "Which students should I register for this competition?",
            content: `While all students are advised to participate, the competition will test participants in a category equally. For instance, participants in the junior secondary category will answer the same questions, irrespective of the class of the different participants.`,
        },
        {
            title: "Which curriculum will the Challenge questions cover?",
            content:
                "Nunc maximus,  tortor sed dolor.",
        },
        {
            title: "Do students need to come for the physical exams with their school uniforms? ",
            content: `Curabitur laoreet, mauris vem.sa euismod dignissim. `,
        },
      ];
    
  return (
    
    <div className={styles.frame6container}>
      <h2 className={styles.faqtitle}>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content}key={title}/>
        ))}
      </div>
    </div>
  )
}

export default index