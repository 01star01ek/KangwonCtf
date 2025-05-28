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
      description: '인공지능의 원리와 활용법을 소개하고 기본 개념을 익힌다.'
    },
    {
      icon: <FaGlobe />,
      title: '웹',
      description: '웹 보안의 주요 이슈를 소개하고 기본적인 대응 방법을 익힌다.'
    },
    {
      icon: <FaLock />,
      title: '암호',
      description: '정보 보호를 위한 암호 기술을 소개하고 기초 이론을 익힌다.'
    },
    {
      icon: <FaServer />,
      title: '시스템',
      description: '시스템 구조와 보안 기법을 소개하며 실습을 통해 익힌다.'
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
            대회에 앞서 진행되는 사전교육을 통해 <br/>CTF 대회에 필요한 기본 지식과 
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
              <FaUserGraduate />
            </div>
            <h3 className={styles.cardTitle}>오프라인 교육</h3>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>일시</div>
              <div className={styles.infoText}>7월 중 진행 예정</div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.infoLabel}>장소</div>
              <div className={styles.infoText}>강원대학교 중앙도서관 4층 데이터라이브러리</div>
            </div>

            <p className={styles.cardDescription}>
              본 행사에 대한 오리엔테이션과 향후 교육 방법에 대한 소개 등이 진행됩니다.<br/>
              참가자 간 교류 및 전문 강사와의 직접적인 소통을 통해 더 깊이 있는 학습이 가능합니다. <br/>
            </p>
          </motion.div>


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
              CTF대회 문제를 풀기 위한  기본 지식과 문제 해결 능력을 기르기 위한 교육이 온라인 실시간 강의를 통해 제공됩니다.<br />
              참가자는 강의 커리큘럼에 맞추어 학습하고, 교육 내용 중 궁금한 점이 있으시면 이메일 또는 기타 플랫폼을 통해 질의응답이 가능합니다.

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
                <strong>노트북 또는 컴퓨터</strong> - 개인 학습 및 실습을 위한 필수 준비물입니다.
              </span>
            </li>
            <li className={styles.materialsItem}>
              <span className={styles.bullet}>•</span>
              <span className={styles.text}>
                <strong>신분증 또는 학생증</strong> - 본인 확인을 위해 필요합니다.
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
                <strong>개인식사</strong> - 오프라인 교육 시 점심 식사가 제공됩니다.
              </span>
            </li>
          </motion.ul>
          
          <motion.div variants={fadeIn} className={styles.materialsNote}>
            <p className={styles.noteText}>
              <strong>중요 안내:</strong> 오프라인 교육은 필수 참석입니다. 
              부득이한 사정으로 참석이 어려운 경우, 사전에 운영진에게 연락해 주시기 바랍니다.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
