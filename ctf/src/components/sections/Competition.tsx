'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaLaptopCode,
  FaTrophy,
  FaMedal,
  FaCertificate
} from 'react-icons/fa';
import styles from '@/styles/sections/competition.module.scss';

export default function Competition() {
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
    <section id="competition" className={styles.competition}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            대회 안내
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            사전교육을 통해 학습한 내용을 바탕으로 본격적인 CTF 대회에 도전해 보세요.<br/>
            다양한 분야의 문제를 해결하며 실력을 마음껏 발휘할 기회입니다.
          </motion.p>
        </div>

        <motion.div
          className={styles.infoGrid}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className={styles.infoCard}>
            <div className={styles.cardIcon}>
              <FaCalendarAlt />
            </div>
            <h3 className={styles.cardTitle}>대회 일정 및 장소</h3>

            <div className={styles.infoItem}>
              <FaCalendarAlt className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>대회 일자</div>
                <div className={styles.infoText}>2025년 8월 9일 (토)</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>대회 시간</div>
                <div className={styles.infoText}>09:00 ~ 16:00 (7시간)</div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>대회 장소</div>
                <div className={styles.infoText}>
                  강원대학교 중앙도서관 4층 데이터라이브러리
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaClock className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>시상식</div>
                <div className={styles.infoText}>16:30 ~ 17:00</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className={styles.infoCard}>
            <div className={styles.cardIcon}>
              <FaLaptopCode />
            </div>
            <h3 className={styles.cardTitle}>대회 형식 및 규칙</h3>

            <div className={styles.infoItem}>
              <FaLaptopCode className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>대회 형식</div>
                <div className={styles.infoText}>
                  개인 참가 방식의 CTF(Capture The Flag) 대회로,<br/>
                  다양한 보안 문제를 해결하여 점수를 획득하는 방식입니다.
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaLaptopCode className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>문제 유형</div>
                <div className={styles.infoText}>
                  인공지능, 웹, 암호, 시스템 등 다양한 분야의 문제가 출제됩니다.<br/>
                  문제는 난이도별로 구성되어 있어 초보자부터 고급자까지 모두 도전할 수 있습니다.
                </div>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaLaptopCode className={styles.infoIcon} />
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>준비물</div>
                <div className={styles.infoText}>
                  개인 노트북(필요 시), 신분증 또는 학생증, 필기도구(필요 시)
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.awardsSection}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h3
            className={styles.awardsSectionTitle}
            variants={fadeIn}
          >
            시상 내역
          </motion.h3>

          <div className={styles.awardsList}>
            <motion.div variants={fadeIn} className={styles.awardCard}>
              <FaTrophy className={`${styles.awardIcon} ${styles.gold}`} />
              <h4 className={styles.awardTitle}>대상</h4>
              <p className={styles.awardSubtitle}>강원대학교 총장상</p>
              <p className={styles.awardPrize}>1,500,000원</p>
              <p className={styles.awardNote}>1팀</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.awardCard}>
              <FaMedal className={`${styles.awardIcon} ${styles.gold}`} />
              <h4 className={styles.awardTitle}>최우수상</h4>
              <p className={styles.awardSubtitle}>한국인터넷진흥원장상</p>
              <p className={styles.awardPrize}>1,000,000원</p>
              <p className={styles.awardNote}>중등부/고등부 각 1팀</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.awardCard}>
              <FaMedal className={`${styles.awardIcon} ${styles.silver}`} />
              <h4 className={styles.awardTitle}>우수상</h4>
              <p className={styles.awardSubtitle}>IT 대학장상</p>
              <p className={styles.awardPrize}>800,000원</p>
              <p className={styles.awardNote}>중등부/고등부 각 2팀</p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.awardCard}>
              <FaMedal className={`${styles.awardIcon} ${styles.bronze}`} />
              <h4 className={styles.awardTitle}>장려상</h4>
              <p className={styles.awardSubtitle}>정보보호특성화대학
                지원사업단장상</p>
              <p className={styles.awardPrize}>400,000원</p>
              <p className={styles.awardNote}>3팀</p>
            </motion.div>
          </div>

        </motion.div>

        <motion.div
          className={styles.benefitsSection}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h3
            className={styles.benefitsTitle}
            variants={fadeIn}
          >
            추가 특전
          </motion.h3>

          <div className={styles.benefitsList}>
            <motion.div variants={fadeIn} className={styles.benefitItem}>
            <FaCertificate className={styles.benefitIcon} />
              <p className={styles.benefitText}>
                <strong>강원정보보호컨퍼런스 초청</strong> - 최우상 이상으로 수상한 팀에는
                최우수상 이상 수상자에게는 강원정보보호컨퍼런스(11월~12월 중 개최 예정)에 참석할 수 있는 기회가 제공됩니다.

              </p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitItem}>
              <FaCertificate className={styles.benefitIcon} />
              <p className={styles.benefitText}>
                <strong>참가 증명서 발급</strong> - 모든 참가자에게는
                참가 증명서가 발급됩니다.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className={styles.benefitItem}>
            <FaCertificate className={styles.benefitIcon} />
              <p className={styles.benefitText}>
                <strong>커뮤니티 형성</strong> - 같은 관심사를 가진
                또래들과의 네트워크를 형성할 수 있는 기회입니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}