'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaTrophy, FaUniversity } from 'react-icons/fa';
import styles from '@/styles/sections/about.module.scss';

export default function About() {
  // 애니메이션을 위한 InView Hook
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // 애니메이션 변수
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6 } 
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
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
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            대회 소개
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            강원권 중고교 해킹교육 & CTF 대회는 미래의 화이트 해커 양성을 위한 교육 프로그램으로,
            중고등학생들에게 사이버 보안의 중요성을 알리고 관련 역량을 기르는 기회를 제공합니다.
          </motion.p>
        </div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.info}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInLeft} className={styles.infoTitle}>
              미래의 <span className={styles.accent}>화이트 해커</span>를 위한<br />
              특별한 도전
            </motion.h3>
            
            <motion.p variants={fadeInLeft} className={styles.description}>
              강원권 중고교 해킹교육 & CTF 대회는 중고등학생들에게 사이버 보안의 중요성을 알리고, 
              화이트 해커로서의 소양을 기르는 기회를 제공합니다. 본 대회는 참가자들이 실제 해킹 기술을 
              배우고 응용할 수 있는 기회를 제공하며, 인공지능, 웹, 암호, 시스템 등 다양한 분야의 문제를 
              해결하는 과정을 통해 문제 해결 능력과 사이버 보안에 대한 이해를 높일 수 있습니다.
            </motion.p>
            
            <motion.div variants={fadeInLeft} className={styles.featureGrid}>
              <div className={styles.featureItem}>
                <FaUsers className={styles.featureIcon} />
                <h4 className={styles.featureTitle}>참가 자격</h4>
                <p className={styles.featureText}>
                  강원권 소재 중학교 및 고등학교 재학생으로, 정보보안 및 프로그래밍에 관심이 있는 학생
                </p>
              </div>
              
              <div className={styles.featureItem}>
                <FaTrophy className={styles.featureIcon} />
                <h4 className={styles.featureTitle}>시상 내역</h4>
                <p className={styles.featureText}>
                  대상, 금상, 은상, 동상 등 다양한 상장과 상품이 수여되며, 강원정보보호컨퍼런스 초청 특전
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className={styles.details}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInRight} className={styles.detailItem}>
              <div className={styles.icon}>
                <FaCalendarAlt />
              </div>
              <div className={styles.detailContent}>
                <h4 className={styles.detailTitle}>주요 일정</h4>
                <p className={styles.detailText}>
                  신청 기간: 2025년 5월 13일 ~ 6월 15일<br />
                  사전 교육: 2025년 7월 1일 ~ 7월 31일<br />
                  CTF 대회: 2025년 8월 9일 09:00 ~ 16:00<br />
                  시상식: 2025년 8월 9일 16:30 ~ 17:00
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className={styles.detailItem}>
              <div className={styles.icon}>
                <FaUniversity />
              </div>
              <div className={styles.detailContent}>
                <h4 className={styles.detailTitle}>진행 방식</h4>
                <p className={styles.detailText}>
                  대회는 사전교육과 본 대회로 구성됩니다. 사전교육에서는 인공지능, 웹, 암호, 시스템 등 다양한 분야의 
                  기초 지식과 문제 해결 방법을 학습하고, 본 대회에서는 실전 문제 풀이를 통해 실력을 겨루게 됩니다.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInRight} className={styles.detailItem}>
              <div className={styles.icon}>
                <FaTrophy />
              </div>
              <div className={styles.detailContent}>
                <h4 className={styles.detailTitle}>추가 특전</h4>
                <p className={styles.detailText}>
                  수상자 전원 강원정보보호컨퍼런스 초청 및 참가자 전원 참가 증명서가 발급됩니다. 
                  또한 우수 참가자에게는 향후 관련 프로그램 참여 기회가 우선적으로 제공됩니다.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}