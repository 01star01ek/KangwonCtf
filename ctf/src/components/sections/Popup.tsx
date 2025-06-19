'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/sections/popup.module.scss';

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hidePopup = localStorage.getItem('hidePopup');
      const hideUntil = localStorage.getItem('hidePopupUntil');
      
      const shouldShowPopup = 
        !hidePopup || 
        (hideUntil && new Date(hideUntil) < new Date());
      
      if (shouldShowPopup) {
        // 스크롤 막기
        if (shouldShowPopup) {
          document.body.style.overflow = 'hidden';
        }
        setIsOpen(true);
      }
    }
    
    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, []);

  const closePopup = () => {
    document.body.style.overflow = '';
    setIsOpen(false);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      localStorage.setItem('hidePopup', 'true');
      localStorage.setItem('hidePopupUntil', tomorrow.toISOString());
    } else {
      localStorage.removeItem('hidePopup');
      localStorage.removeItem('hidePopupUntil');
    }
  };

  const scrollToApply = () => {
    closePopup();
    document.getElementById('notice')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContainer}>
        <button 
          className={styles.closeButton} 
          onClick={closePopup}
          aria-label="팝업 닫기"
        >
          &times;
        </button>
        
        <div className={styles.popupContent}>
          <div className={styles.popupImageWrapper}>
            <Image 
              src="/notice.png" 
              alt="강원권 중고교 해킹교육 & CTF 대회 안내" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className={styles.popupImage}
            />
          </div>
          
          <div className={styles.popupActions}>
            <button 
              className={styles.ctaButton}
              onClick={scrollToApply}
            >
              공지 확인하기
            </button>
            
            <div className={styles.checkboxContainer}>
              <input 
                type="checkbox" 
                id="hidePopup" 
                onChange={handleCheckbox} 
                className={styles.checkbox}
              />
              <label htmlFor="hidePopup" className={styles.checkboxLabel}>
                오늘 하루 이 창 열지 않기
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}