'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClipboardList, FaUserPlus, FaFileDownload, FaChevronRight } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import styles from '@/styles/sections/apply.module.scss';

export default function Apply() {
  // 구글 폼 URL (실제 구글 폼 URL로 대체 필요)
  const googleFormUrl = "https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true";
  
  // 모달 상태 관리
  const [showForm, setShowForm] = useState(false);
  
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
    <section id="apply" className={styles.apply}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            신청 안내
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            강원권 중고교 해킹교육 & CTF 대회 참가 신청 방법을 안내해 드립니다.
            제한된 인원으로 진행되는 만큼 참가 신청 후 선발 과정이 있습니다.
          </motion.p>
        </div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.info}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>신청 기간 및 방법</h3>
              
              <div className={styles.period}>
                <FaCalendarAlt className={styles.icon} />
                <span className={styles.text}>
                  <strong>신청 기간:</strong> 2025년 5월 13일 ~ 6월 15일까지
                </span>
              </div>
              
              <div className={styles.period}>
                <FaClipboardList className={styles.icon} />
                <span className={styles.text}>
                  <strong>신청 방법:</strong> 아래의 '신청하기' 버튼을 클릭하여 구글 폼 작성
                </span>
              </div>
              
              <div className={styles.period}>
                <FaUserPlus className={styles.icon} />
                <span className={styles.text}>
                  <strong>참가자 발표:</strong> 2025년 6월 20일 이메일 개별 통보
                </span>
              </div>
              
              <h4 style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.125rem', color: '#f8fafc', fontWeight: 600 }}>
                제출 서류 준비
              </h4>
              
              <ul className={styles.requiredList}>
                <li className={styles.requiredItem}>
                  <span className={styles.bullet}>•</span>
                  <span className={styles.text}>
                    참가자 기본 정보 (이름, 소속 학교, 학년, 연락처, 이메일)
                  </span>
                </li>
                <li className={styles.requiredItem}>
                  <span className={styles.bullet}>•</span>
                  <span className={styles.text}>
                    참가 동기 및 관심 분야
                  </span>
                </li>
                <li className={styles.requiredItem}>
                  <span className={styles.bullet}>•</span>
                  <span className={styles.text}>
                    학부모 동의서 (양식 다운로드 후 작성하여 업로드)
                  </span>
                </li>
                <li className={styles.requiredItem}>
                  <span className={styles.bullet}>•</span>
                  <span className={styles.text}>
                    참가서약서 (양식 다운로드 후 작성하여 업로드)
                  </span>
                </li>
              </ul>
              
              <div className={styles.formControls}>
                <a
                  href="/forms/parent-consent.pdf" 
                  className={`${styles.formBtn} ${styles.secondary}`}
                  download
                >
                  학부모 동의서 다운로드 <FaFileDownload style={{ marginLeft: '0.5rem', display: 'inline' }} />
                </a>
                <a
                  href="/forms/participant-pledge.pdf"
                  className={`${styles.formBtn} ${styles.secondary}`}
                  download
                >
                  참가서약서 다운로드 <FaFileDownload style={{ marginLeft: '0.5rem', display: 'inline' }} />
                </a>
                <button 
                  className={styles.formBtn}
                  onClick={() => setShowForm(true)}
                >
                  신청하기 <FaChevronRight style={{ marginLeft: '0.5rem', display: 'inline' }} />
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.steps}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <h3 className={styles.stepsTitle}>신청 단계</h3>
            
            <ol className={styles.stepsList}>
              <motion.li variants={fadeIn} className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>서류 양식 다운로드</h4>
                  <p className={styles.stepDescription}>
                    필요한 서류(학부모 동의서, 참가서약서)를 다운로드하여 작성합니다.
                    각 서류는 서명이 필요하므로 출력 후 작성하거나 디지털 서명이 가능합니다.
                  </p>
                </div>
              </motion.li>
              
              <motion.li variants={fadeIn} className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>구글 폼 작성 및 제출</h4>
                  <p className={styles.stepDescription}>
                    '신청하기' 버튼을 클릭하여 구글 폼을 작성합니다. 기본 정보 입력 및 
                    작성한 서류를 업로드하세요. 모든 정보는 정확하게 기재해 주시기 바랍니다.
                  </p>
                </div>
              </motion.li>
              
              <motion.li variants={fadeIn} className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>신청 확인 메일 확인</h4>
                  <p className={styles.stepDescription}>
                    신청 완료 후 확인 메일이 발송됩니다. 메일이 오지 않은 경우, 
                    스팸함을 확인하거나 문의처로 연락해 주시기 바랍니다.
                  </p>
                </div>
              </motion.li>
              
              <motion.li variants={fadeIn} className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>참가자 선발 결과 확인</h4>
                  <p className={styles.stepDescription}>
                    6월 20일에 참가자 선발 결과가 개별 이메일로 통보됩니다. 
                    선발된 경우, 추가 안내사항을 꼼꼼히 확인해 주세요.
                  </p>
                </div>
              </motion.li>
            </ol>
          </motion.div>
        </div>
      </div>
      
      {/* 구글 폼 모달 */}
      {showForm && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>참가 신청서</h3>
              <button 
                className={styles.closeBtn} 
                onClick={() => setShowForm(false)}
                aria-label="닫기"
              >
                <IoMdClose />
              </button>
            </div>
            <div className={styles.modalBody}>
              <iframe 
                src={googleFormUrl} 
                className={styles.iframe} 
                title="참가 신청 폼"
              >
                로딩중...
              </iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}