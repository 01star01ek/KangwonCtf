'use client';

import { Link } from 'react-scroll';
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
            <p>강원대학교</p>
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
            <p>빅데이터-융합보안사업단</p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span>
                  본 대회는 강원대학교 빅데이터-융합보안사업단에서 주최하는 행사로,<br />
                  중고교생들의 정보보안 역량 강화와 미래 화이트 해커 육성을 목표로 합니다.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} 강원대학교 빅데이터-융합보안사업단
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