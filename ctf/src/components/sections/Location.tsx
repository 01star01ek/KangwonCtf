'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaBus,
  FaTrain,
  FaExternalLinkAlt
} from 'react-icons/fa';
import styles from '@/styles/sections/location.module.scss';

export default function Location() {
  // 애니메이션을 위한 InView Hook
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


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
    <section id="location" className={styles.location}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            오시는 길
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            강원대학교 중앙도서관 4층 데이터라이브러리에서 열리는 행사에<br/> 참여하기 위한 교통 안내입니다.
          </motion.p>
        </div>

        <div className={styles.content}>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className={styles.info}
          >
            <motion.h3 variants={fadeInLeft} className={styles.locationTitle}>
              장소 안내
            </motion.h3>

            <motion.div variants={fadeInLeft} className={styles.locationDetails}>
              <h4 className={styles.locationName}>
                강원대학교 중앙도서관 4층 데이터라이브러리
              </h4>
              <p className={styles.locationAddress}>
                강원도 춘천시 강원대학길 1 중앙도서관 4층
              </p>
            </motion.div>

            <motion.div variants={fadeInLeft} className={styles.transportationSection}>
              <h4 className={styles.transportTitle}>교통편 안내</h4>

              <div className={styles.transportList}>
                <div className={styles.transportItem}>
                  <div className={styles.transportIcon}>
                    <FaBus />
                  </div>
                  <div className={styles.transportContent}>
                    <h5 className={styles.transportName}>시외버스 이용</h5>
                    <p className={styles.transportInfo}>
                      1. 춘천시외버스터미널 → 강원대학교 : 택시 약 10분, 버스 약 20분<br/>
                      2. 버스정류장[2058] : 하차하여 도보 이동(터미널 맞은편), 300번 버스 탑승 후 &#039;강원대중앙도서관 하차&#039;<br/>
                      3. 중앙도서관 4층 데이터라이브러리 도착
                    </p>
                  </div>
                </div>

                <div className={styles.transportItem}>
                  <div className={styles.transportIcon}>
                    <FaTrain />
                  </div>
                  <div className={styles.transportContent}>
                    <h5 className={styles.transportName}>경춘선 전출/itx 이용</h5>
                    <p className={styles.transportInfo}>
                      1. 전철 상봉역(경춘선) → 남춘천역(강원대)<br/>
                      1. Itx 용산역 또는 청량리역(지하철1호선) → 남춘천역(강원대)<br/>
                      1. 남춘천역 → 강원대학교 : 택시 약 10분, 버스 약 20분<br/>
                      2. 버스정류장[2295] : 300번 버스 탑승 후 &#039;강원대중앙도서관 하차&#039;<br/>
                      3. 중앙도서관 4층 데이터라이브러리 도착


                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.a
              variants={fadeInLeft}
              href="https://map.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsButton}
            >
              길찾기 <FaExternalLinkAlt className={styles.buttonIcon} />
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInRight}
            className={styles.mapContainer}
          >
            {/* 실제 애플리케이션에서는 여기에 지도 API(예: 카카오맵, 네이버맵)를 사용하여 지도를 표시합니다 */}
            {/* 현재는 플레이스홀더로 대체합니다 */}
            <div className={styles.mapPlaceholder}>
              <FaMapMarkerAlt className={styles.icon} />
              강원대학교 중앙도서관 지도가 표시될 영역
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}