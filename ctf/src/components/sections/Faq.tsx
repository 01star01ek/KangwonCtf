'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from '@/styles/sections/faq.module.scss';

// FAQ 데이터
const faqData = [
  {
    question: '참가 비용이 있나요?',
    answer: '아니요, 본 대회는 무료로 참가 가능합니다. 단, 대회 장소까지의 교통비는 개인 부담입니다.'
  },
  {
    question: '개인으로 참가할 수 있나요?',
    answer: '본 대회는 3~4인으로 구성된 팀만 참가할 수 있습니다.'
  },
  {
    question: '컴퓨터 프로그래밍 경험이 없어도 참가할 수 있나요?',
    answer: '네, 기초적인 컴퓨터 활용 능력만 있다면 누구나 참가 가능합니다. 사전교육을 통해 기본적인 내용부터 차근차근 배울 수 있습니다.'
  },
  {
    question: '대회에 필요한 장비를 제공해 주나요?',
    answer: '대회장에는 기본적인 컴퓨터가 준비되어 있습니다. 그러나 본인이 익숙한 노트북을 가져오셔도 됩니다.'
  },
  {
    question: '사전교육에 반드시 참석해야 하나요?',
    answer: '네. 사전 교육은 대회 참가를 위한 필수 과정입니다. 다만, 오프라인 교육(7월 7일)에 참석이 어려우실 경우 운영진에게 미리 연락 주시면 온라인으로 참석할 수 있도록 안내 드리겠습니다.'
  },
  {
    question: '대회 참가 신청 후 취소할 수 있나요?',
    answer: '네, 본 대회에 참여 의사가 없으신 경우, 선발 되기 전까지 취소가 가능합니다. 취소 시 반드시 주최측에 연락하여 취소 의사를 알려주셔야 합니다. 선발 후 불참 시 다음 대회 참가에 제한이 있을 수 있습니다.'
  },
  {
    question: '중학생과 고등학생이 함께 경쟁하나요?',
    answer: '네, 중학생과 고등학생이 함께 경쟁합니다. 다만, 문제는 다양한 난이도로 구성되어 있어 중학생도 충분히 도전할 수 있습니다. 또한, 평가 시 학년을 고려하여 가산점이 부여될 수 있습니다.'
  },
  {
    question: '대회 후 피드백이나 결과 분석을 받을 수 있나요?',
    answer: '네, 대회 종료 후 각 참가자에게 개별적으로 성과 분석 및 피드백이 제공됩니다. 또한, 우수 참가자에게는 멘토링 기회가 제공될 수 있습니다.'
  }
];

export default function Faq() {
  // 아코디언 상태 관리
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  // 애니메이션을 위한 InView Hook
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // 애니메이션 변수
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            자주 묻는 질문
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            해킹교육 및 CTF 대회에 관한 자주 묻는 질문과 답변입니다.
            아래에서 찾지 못한 질문이 있다면 문의처로 연락해 주세요.
          </motion.p>
        </div>
        
        <motion.div 
          className={styles.faqList}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {faqData.map((faq, index) => (
            <motion.div 
              key={index}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              variants={fadeIn}
            >
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.open : ''}`}>
                <div className={styles.faqContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
     
      </div>
    </section>
  );
}