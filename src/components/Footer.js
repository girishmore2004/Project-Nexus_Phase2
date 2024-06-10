import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #343a40;
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Techy Software. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
