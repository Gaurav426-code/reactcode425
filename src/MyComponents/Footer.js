import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #1a1a2e, #16213e);
  color: #fff;
  padding: 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.5);
  margin-top:-100px;

`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Links = styled.div`
  margin: 10px 0;

  a {
    color: #aaa;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ThemeToggle = styled.button`
  background: #16213e;
  color: #fff;
  border: 1px solid #1a1a2e;
  padding: 5px 10px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #1a1a2e;
    color: #ff9900;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleThemeToggle = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <FooterWrapper>
      <motion.h4 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Powered by AI - Designed for the Future
      </motion.h4>

      <SocialIcons>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </SocialIcons>

      <Links>
        <a href="/about">About</a> | <a href="/contact">Contact</a> | <a href="/privacy">Privacy Policy</a>
      </Links>

      <ThemeToggle onClick={handleThemeToggle}>Toggle Theme</ThemeToggle>
      
      <p>© {currentYear} All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
