'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '@/styles/components/footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerInfo}>
            <h3>문의</h3>
            <p>강원대학교 강원권 중고교 해킹교육&CTF대회 담당자
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaPhone className={styles.icon} />
                <span>033-250-7975</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.icon} />
                <span>xorud7808@kangwon.ac.kr</span>
              </div>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>강원특별자치도 춘천시 강원대학길 1, 공학6호관 604호&apos;빅데이터-융합보안사업단&apos;</span>
              </div>
            </div>
          </div>


          <div className={styles.footerInfo}>
            <h3>주최</h3>
            <p>강원대학교, 강원특별자치도청, 한국인터넷진흥원 공동 주최</p>
            <h3>주관</h3>
            <p>강원대학교 (정보보호특성화대학지원사업단, 융합보안대학원, COSS 사업단)</p>
            <h3>협조</h3>
            <p>강원도교육청, 국가정보원지부</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} 강원권 중고교 해킹 교육 & CTF 대회
          </div>

        </div>
      </div>
    </footer>
  );
}