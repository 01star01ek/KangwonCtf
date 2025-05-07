'use client';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from '@/styles/components/footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerInfo}>
            <h3>문의</h3>
            <p>강원대학교 사이버융합학과</p>
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
                <span>강원대학교 중앙도서관 4층 데이터라이브러리</span>
              </div>
            </div>
          </div>


          <div className={styles.footerInfo}>
            <h3>주최</h3>
            <p>강원대학교 사이버융합학과</p>
            <h3>주관</h3>
            <p>강원대학교 빅데이터-융합보안사업단(정보보호특성화대학지원사업)</p>
            <h3>후원</h3>
            <p>강원도청, 강원도교육청, 국가정보원 강원지부, 한국인터넷진흥워 강원지부</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} 2025 강원권 중.고교 해킹 교육 & CTF 대회
          </div>

          <div className={styles.socialLinks}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}