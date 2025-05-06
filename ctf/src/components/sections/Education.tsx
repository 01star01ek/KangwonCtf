'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaUserGraduate, 
  FaBrain,
  FaGlobe,
  FaLock,
  FaServer
} from 'react-icons/fa';
import styles from '@/styles/sections/education.module.scss';

export default function Education() {
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
  
  // 교육 주제 데이터
  const educationTopics = [
    {
      icon: <FaBrain />,
      title: '인공지능',
      description: '머신러닝 모델 취약점, 데이터 분석, AI 모델 활용 기법 등의 보안 관련 주제를 다룹니다.'
    },
    {
      icon: <FaGlobe />,
      title: '웹',
      description: 'SQL 인젝션, XSS, CSRF, 인증 우회, 웹 취약점 분석 등 웹 해킹 기술을 배웁니다.'
    },
    {
      icon: <FaLock />,
      title: '암호',
      description: '고전 암호, 현대 암호, 해시 함수, 암호 분석 기법 등 암호학 기초를 학습합니다.'
    },
    {
      icon: <FaServer />,
      title: '시스템',
      description: '버퍼 오버플로우, 쉘코드 작성, 리버스 엔지니어링 기초 등을 배웁니다.'
    }
  ];
  
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            사전교육 안내
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            대회에 앞서 진행되는 사전교육을 통해 CTF 대회에 필요한 기본 지식과 
            문제 해결 능력을 기를 수 있습니다.
          </motion.p>
        </div>
        
        <motion.div 
          className={styles.educationTypes}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className={styles.educationCard}>
            <div className={styles.cardIcon}>
              <FaLaptopCode />
            </div>
            <h3 className={styles.cardTitle}>온라인 교육</h3>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>기간</div>
              <div className={styles.infoText}>2025년 7월 1일 ~ 7월 31일</div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>방식</div>
              <div className={styles.infoText}>온라인 플랫폼을 통한 자율 학습</div>
            </div>
            
            <p className={styles.cardDescription}>
              사전 제작된 동영상 강의 및 온라인 실습 자료를 제공합니다. 
              참가자는 자신의 일정에 맞춰 학습할 수 있으며, 
              온라인 플랫폼을 통해 질의응답이 가능합니다.
            </p>
          </motion.div>
          
          <motion.div variants={fadeIn} className={styles.educationCard}>
            <div className={styles.cardIcon}>
              <FaUserGraduate />
            </div>
            <h3 className={styles.cardTitle}>오프라인 교육</h3>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>일시</div>
              <div className={styles.infoText}>2025년 7월 7일 (토) 10:00 ~ 17:00</div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>장소</div>
              <div className={styles.infoText}>강원대학교 중앙도서관 4층 데이터라이브러리</div>
            </div>
            
            <p className={styles.cardDescription}>
              실전 문제 풀이, 멘토링, 질의응답, 팀 활동 및 미니 CTF 대회가 
              진행됩니다. 참가자 간 교류 및 멘토와의 직접적인 소통을 통해 
              더 깊이 있는 학습이 가능합니다.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.topics}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h3 
            className={styles.topicsTitle}
            variants={fadeIn}
          >
            교육 내용
          </motion.h3>
          
          <div className={styles.topicContainer}>
            {educationTopics.map((topic, index) => (
              <motion.div 
                key={index}
                className={styles.topicCard}
                variants={fadeIn}
              >
                <div className={styles.topicIcon}>
                  {topic.icon}
                </div>
                <h4 className={styles.topicTitle}>{topic.title}</h4>
                <p className={styles.topicDescription}>{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.materials}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h3 
            className={styles.materialsTitle}
            variants={fadeIn}
          >
            준비물
          </motion.h3>
          
          <motion.ul variants={fadeIn} className={styles.materialsList}>
            <li className={styles.materialsItem}>
              <span className={styles.bullet}>•</span>
              <span className={styles.text}>
                <strong>노트북</strong> - 개인 학습 및 실습을 위한 필수 준비물입니다.
              </span>
            </li>
            <li className={styles.materialsItem}>
              <span className={styles.bullet}>•</span>
              <span className={styles.text}>
                <strong>신분증</strong> - 본인 확인을 위해 필요합니다.
              </span>
            </li>
            <li className={styles.materialsItem}>
              <span className={styles.bullet}>•</span>
              <span className={styles.text}>
                <strong>필기구</strong> - 필기가 필요한 경우를 대비해 준비하세요.
              </span>
            </li>
            <li className={styles.materialsItem}>
              <span className={styles.bullet}>•</span>
              <span className={styles.text}>
                <strong>개인 식사</strong> - 오프라인 교육 시 점심 식사는 개인적으로 준비해야 합니다.
              </span>
            </li>
          </motion.ul>
          
          <motion.div variants={fadeIn} className={styles.materialsNote}>
            <p className={styles.noteText}>
              <strong>중요 안내:</strong> 오프라인 교육(7월 7일)은 필수 참석입니다. 
              부득이한 사정으로 참석이 어려운 경우, 사전에 운영진에게 연락해 주시기 바랍니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}