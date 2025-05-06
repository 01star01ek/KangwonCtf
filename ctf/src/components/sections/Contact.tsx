'use client';

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaUniversity
} from 'react-icons/fa';
import styles from '@/styles/sections/contact.module.scss';

export default function Contact() {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 실제 구현에서는 여기에 폼 데이터 처리 및 API 호출 로직이 들어갑니다
    console.log('Form submitted:', formData);
    alert('문의가 접수되었습니다. 감사합니다!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  
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
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            문의처
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            해킹교육 및 CTF 대회에 관한 궁금한 점이 있으시면 아래 연락처로 문의해 주세요.
          </motion.p>
        </div>
        
        <div className={styles.content}>
          <motion.div 
            className={styles.contactInfo}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>주최 기관</h3>
              
              <div className={styles.organizerInfo}>
                <h4 className={styles.organizerName}>빅데이터-융합보안사업단</h4>
                <p className={styles.organizerDesc}>
                  강원대학교 빅데이터-융합보안사업단은 정보보안 전문가 양성 및 
                  교육 프로그램을 운영하고 있으며, 중고교생을 위한 해킹교육 및 
                  CTF 대회를 주최합니다.
                </p>
              </div>
              
              <div className={styles.contactList}>
                <motion.div variants={fadeIn} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaUniversity />
                  </div>
                  <div className={styles.contactContent}>
                    <h5 className={styles.contactLabel}>주최</h5>
                    <p className={styles.contactText}>빅데이터-융합보안사업단</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaPhone />
                  </div>
                  <div className={styles.contactContent}>
                    <h5 className={styles.contactLabel}>전화</h5>
                    <p className={styles.contactText}>
                      <a href="tel:033-250-7975">033-250-7975</a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.contactContent}>
                    <h5 className={styles.contactLabel}>이메일</h5>
                    <p className={styles.contactText}>
                      <a href="mailto:xorud7808@kangwon.ac.kr">xorud7808@kangwon.ac.kr</a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <FaMapMarkerAlt />
                  </div>
                  <div className={styles.contactContent}>
                    <h5 className={styles.contactLabel}>주소</h5>
                    <p className={styles.contactText}>
                      강원도 춘천시 강원대학길 1 중앙도서관 4층
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.contactForm}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>문의하기</h3>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>이름</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력해주세요"
                    className={styles.formInput}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>이메일</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력해주세요"
                    className={styles.formInput}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.formLabel}>제목</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="문의 제목을 입력해주세요"
                    className={styles.formInput}
                    required
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>내용</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="문의 내용을 입력해주세요"
                    className={styles.formTextarea}
                    required
                  />
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  문의하기
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}