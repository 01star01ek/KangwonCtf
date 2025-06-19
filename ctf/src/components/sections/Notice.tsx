// src/components/sections/Notice.tsx
'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaBullhorn, FaCalendarAlt, FaEnvelope, FaPhone, FaExclamationTriangle } from 'react-icons/fa';
import styles from '@/styles/sections/notice.module.scss';

export default function Notice() {
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
    <section id="notice" className={styles.notice}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            공지사항
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            해킹교육 & CTF 대회와 관련된 중요한 공지사항을 확인하세요.
          </motion.p>
        </div>
        
        <motion.div 
          className={styles.noticeList}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* 첫 번째 공지 */}
          <motion.div variants={fadeIn} className={styles.noticeItem}>
            <div className={styles.noticeHeader}>
              <div className={styles.noticeIcon}>
                <FaExclamationTriangle />
              </div>
              <h3 className={styles.noticeTitle}>
                [공지] 해킹 교육 & 대회 참가팀 관련 안내
              </h3>
              <div className={styles.noticeDate}>2025.06.19</div>
            </div>
            
            <div className={styles.noticeContent}>
              <p>안녕하세요.<br />
              강원대학교 강원권 중고교 해킹교육 & CTF대회 운영팀입니다.</p>
              
              <p>먼저, 본 프로그램에 큰 관심을 가지고 지원해 주신 모든 학생 여러분께 진심으로 감사드립니다.<br />
              여러분의 열정과 노력이 담긴 지원서 하나하나를 소중하게 검토하였습니다.</p>
              
              <p>그 과정에서, 일부 팀의 경우 필수 제출 서류가 접수 기한 내에 확인되지 않아, 공정한 운영을 위해 부득이하게 참가 대상에서 제외하게 되었음을 알려드립니다.</p>
              
              <p>특히, 해당 팀의 연락처 정보가 확인되지 않아 개별 안내가 어려운 점에 대해 깊은 양해 부탁드립니다.</p>
              
              <div className={styles.contactBox}>
                <p><strong>만약 본인이 해당 상황에 해당된다고 판단되는 경우 담당자로 연락 주시기 바랍니다.</strong></p>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <FaEnvelope className={styles.contactIcon} />
                    <span>이메일: xorud7808@kangwon.ac.kr</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone className={styles.contactIcon} />
                    <span>전화: 033-250-7975</span>
                  </div>
                </div>
              </div>
              
              <p>참가가 어려운 상황이 되었더라도, 여러분의 도전은 충분히 값졌으며, 향후 다른 기회를 통해 다시 만나 뵐 수 있기를 진심으로 기대합니다.</p>
            </div>
          </motion.div>
          
          {/* 두 번째 공지 */}
          <motion.div variants={fadeIn} className={styles.noticeItem}>
            <div className={styles.noticeHeader}>
              <div className={styles.noticeIcon}>
                <FaBullhorn />
              </div>
              <h3 className={styles.noticeTitle}>
                [공지] 『강원권 중고교 해킹교육 & CTF대회』 최종 선발팀 안내
              </h3>
              <div className={styles.noticeDate}>2025.06.18</div>
            </div>
            
            <div className={styles.noticeContent}>
              <div className={styles.highlightBox}>
                <p><strong>당초 계획은 10팀을 선발하려 하였으나, 더 많은 학생들이 도전할 수 있는 기회를 제공하고자 18팀 모두를 선발팀으로 결정하였으며, 또한 상장과 상금 역시 전팀이 받을 수 있도록 하였습니다.</strong></p>
              </div>
              
              <div className={styles.scheduleBox}>
                <h4 className={styles.boxTitle}>
                  <FaCalendarAlt className={styles.boxIcon} />
                  향후 일정 안내
                </h4>
                <p><strong>교육 시작일:</strong> 2025년 7월 5일(토요일)~</p>
                <p>오리엔테이션 및 상세 교육 일정은 개별 이메일/SMS를 통해 순차적으로 안내드릴 예정입니다.</p>
              </div>
              
              <div className={styles.warningBox}>
                <h4 className={styles.boxTitle}>
                  <FaExclamationTriangle className={styles.boxIcon} />
                  유의사항
                </h4>
                <p>선발된 모든 팀에는 대표자 연락처를 기준으로 별도 연락을 드릴 예정입니다.<br />
                연락을 받지 못한 경우, 운영팀 이메일 또는 전화로 문의 주시기 바랍니다.</p>
                <div className={styles.contactInfo}>
                  <div className={styles.contactItem}>
                    <FaEnvelope className={styles.contactIcon} />
                    <span>이메일: xorud7808@kangwon.ac.kr</span>
                  </div>
                  <div className={styles.contactItem}>
                    <FaPhone className={styles.contactIcon} />
                    <span>전화: 033-250-7975</span>
                  </div>
                </div>
              </div>
              
              <p>여러분의 열정이 이번 결정을 가능하게 만들었습니다.<br />
              앞으로 진행될 교육과 대회를 통해 여러분이 더욱 성장할 수 있기를 진심으로 기대하며, 운영팀도 최선을 다해 지원하겠습니다.</p>
              
              <p>감사합니다.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}