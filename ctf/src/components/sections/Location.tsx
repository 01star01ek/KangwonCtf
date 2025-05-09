// src/components/sections/Location.tsx - 가독성 향상 버전
'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaMapMarkerAlt, 
  FaDirections, 
  FaBus, 
  FaTrain
} from 'react-icons/fa';
import styles from '@/styles/sections/location.module.scss';

export default function Location() {
  // 애니메이션을 위한 InView Hook
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
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
            강원대학교 중앙도서관 4층 데이터라이브러리로 오시는 방법을 안내해 드립니다.
          </motion.p>
        </div>
        
        <div className={styles.content}>
          
          {/* 교통 정보 */}
          <motion.div 
            className={styles.transportSection}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.sectionTitle}>
              <FaBus className={styles.titleIcon} />
              교통편 안내
            </h3>
            
            <div className={styles.transportGrid}>
              {/* 버스 정보 */}
              <div className={styles.transportItem}>
                <div className={styles.transportHeader}>
                  <div className={styles.transportIcon}>
                    <FaBus />
                  </div>
                  <h4 className={styles.transportName}>시외버스터미널 이용</h4>
                </div>
                
                <div className={styles.transportImage}>
                  <Image 
                    src="/bus.png"
                    alt="시외버스터미널 이용"
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </div>

                <div className={styles.transportDetails}>
                  <p><strong>소요시간:</strong> 택시 약 10분, 버스 약 20분</p>
                  <p><strong>이용방법:</strong> </p> <p>시내버스 300번 </p> <p>(1) 버스정류장[2058] : 하차하여 도보 이동(터미널 맞은편)<br/></p>
                  <p>(2) 300번 버스 탑승</p>
                  <p>(3) &#039;강원대중앙도서관&#039; 하차</p>
                  <p>(4) 중앙도서관 4층 데이터라이브러리 도착</p>
                </div>
              </div>

              {/* ITX 정보 */}
              <div className={styles.transportItem}>
                <div className={styles.transportHeader}>
                  <div className={styles.transportIcon}>
                    <FaTrain />
                  </div>
                  <h4 className={styles.transportName}>경춘선 전출/ITX 이용</h4>
                </div>
                
                <div className={styles.transportImage}>
                  <Image 
                    src="/itx.png"
                    alt="경춘선 전출/ITX 이용"
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                </div>
                
                <div className={styles.transportDetails}>
                  <p><strong>소요시간:</strong> 택시 약 10분, 버스 약 20분
                  </p>
                  <p><strong>이용방법:</strong> </p>
                  <p>(1-1) 전철 상봉역(경춘선) → 남춘천역</p>
                  <p>(1-2) ITX 용산역 또는 청량리역(지하철1호선) → 남춘천역</p>
                  <p>시내버스 300번 </p> <p>(2) 버스정류장[2295]에서 300번 버스 탑승 </p>
                  <p>(2) &#039;강원대중앙도서관&#039; 하차</p>
                  <p>(3) 중앙도서관 4층 데이터라이브러리 도착</p>
                </div>

              </div>
            </div>
            <div>
              <a 
                href="https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=,,1054483,488946&rt1=&rt2=강원대학교 중앙도서관&rtIds=,PLACEabff0c00bece3da669fc16e66d609b5" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directionButton}
              >
                <FaDirections className={styles.buttonIcon} />
                카카오맵으로 길찾기
              </a>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}