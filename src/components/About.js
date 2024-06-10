import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background:#35373c;
  color: white;
  padding: 20px;
  border: 50px solid black;

  @media (min-width: 950px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TextContainer = styled.div`
  padding-right: 20px;
  text-align: justify;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const ImageContainer = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    flex: 1;
  }
`;

const Header = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
  color: aqua;
`;

const History = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const About = () => {
  return (
    <AboutContainer>
      
      <TextContainer>
      <Header>About Techy Software</Header>
        <History>
          Techy Software was founded in 2010 by a group of passionate software engineers who believed in the transformative power of technology. Our journey began in a small garage, where we developed our first software product aimed at simplifying business processes for small enterprises. 

          Over the years, we have grown into a leading software development company, known for our innovative solutions and commitment to excellence. Our team of experts has expanded to include professionals from diverse fields, all working together to push the boundaries of what's possible in software development.

          At Techy Software, we specialize in web development, mobile app development, and cloud computing solutions. Our mission is to provide high-quality, reliable, and scalable software that meets the unique needs of our clients. We believe in a client-centric approach, ensuring that every project we undertake is tailored to the specific goals and requirements of our clients.

          Our dedication to innovation has earned us numerous accolades and a reputation as a trusted partner in the tech industry. As we look to the future, we remain committed to driving progress through technology, helping businesses of all sizes achieve their full potential.

          Join us as we continue to shape the future of software development and make a positive impact on the world through technology.
        </History>
      </TextContainer>
      <ImageContainer>
        <Image src={require("../images/about.jpg")} alt="Techy Software" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
