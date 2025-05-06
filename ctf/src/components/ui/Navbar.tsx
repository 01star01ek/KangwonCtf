'use client';

import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/styles/components/navbar.module.scss';

// 네비게이션 링크 정의
const navLinks = [
  { id: 'hero', name: '홈' },
  { id: 'about', name: '대회 소개' },
  { id: 'apply', name: '신청 안내' },
  { id: 'education', name: '사전교육 안내' },
  { id: 'competition', name: '대회 안내' },
  { id: 'location', name: '오시는 길' },
  { id: 'contact', name: '문의처' },
  { id: 'faq', name: 'FAQ' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // 스크롤 이벤트 감지
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // 현재 활성화된 섹션 확인
      const sections = navLinks.map(link => link.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop - 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // 모바일 메뉴 닫기
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link 
            to="hero" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className={styles.logoLink}
          >
            <span className={styles.gradientText}>해킹교육 & CTF</span>
          </Link>
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="apply"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.ctaButton}
          >
            신청하기
          </Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ul className={styles.mobileNavLinks}>
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                  >
                    <Link
                      to={link.id}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.active : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * navLinks.length }}
              >
                <Link
                  to="apply"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={styles.mobileCta}
                  onClick={closeMobileMenu}
                >
                  신청하기
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}