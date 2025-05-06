'use client';

import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaChevronDown, FaArrowRight } from 'react-icons/fa';
import styles from '@/styles/sections/hero.module.scss';

export default function Hero() {
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
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeIn} className={styles.subtitle}>
            2025년 7월-8월 / 강원권 중고교생 대상
          </motion.span>

          <motion.h1 variants={fadeIn} className={styles.title}>
            강원권 중고교 <br />
            <span className={styles.gradient}>해킹교육 & CTF 대회</span>
          </motion.h1>

          <motion.p variants={fadeIn} className={styles.description}>
            중고등학생들을 위한 정보보안 교육 및 해킹방어대회에 여러분을 초대합니다.
            사이버 보안의 기초부터 실전까지, 미래의 화이트 해커를 위한 특별한 기회를 놓치지 마세요.
          </motion.p>

          <motion.div variants={fadeIn} className={styles.actions}>
            <Link
              to="apply"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className={styles.primaryBtn}
            >
              신청하기
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className={styles.secondaryBtn}
            >
              자세히 알아보기 <FaArrowRight className={styles.icon} />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 배경 이미지 (실제 프로젝트에서는 이미지 경로 지정 필요) */}
      <div className={styles.heroImage}>
        {/* 이미지를 SVG로 대체하거나 이미지 태그 사용 가능 */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <circle cx="250" cy="250" r="200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10 10" />
          <circle cx="250" cy="250" r="150" stroke="#60a5fa" strokeWidth="2" strokeOpacity="0.7" />
          <circle cx="250" cy="250" r="100" stroke="#93c5fd" strokeWidth="2" strokeOpacity="0.5" />
          <path d="M250 50 L250 450" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M50 250 L450 250" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
          <polygon points="250,150 300,250 250,350 200,250" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="2" />
        </svg>
      </div>

      {/* 스크롤 표시기 */}
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className={styles.scrollIndicator}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <FaChevronDown style={{ marginTop: '0.5rem',  }} />
        </motion.div>
      </Link>
    </section>
  );
}