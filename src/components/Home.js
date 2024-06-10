import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link} from 'react-router-dom';

const HomeContainer = styled.div`
  text-align: center;
  background: black;
  color: #63fed2;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const CarouselItem = styled.div`
  display: ${props => (props.active? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
`;

const HeroText = styled.p`
  font-size: 2.5em;
  white-space: pre-wrap;  
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;
 
const ContactContainer = styled.div`
  padding: 60px 20px;
  background: #f8f9fa;
  color: #333;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: 300px;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;
const Message = styled.p`
  margin-top: 20px;
  color: ${props => (props.error? 'ed' : 'green')};
`;

const SocialMediaContainer = styled.div`
  margin-top: 0px;
  margin-bottom:50px;
`;

const SocialMediaLink = styled.a`
  display: inline-block;
  margin-right: 30px;
  font-size: 50px;
  color: #007bff;
`;

const ContactSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 60px 20px;
  background: #333;
  color: white;
`;

const ContactInfo = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const ConnectWithMe = styled.div`
  flex: 1;
`;

const GoogleMap = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  margin-top: 20px;
`;

const ExploreSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  min-height: 120vh;

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 120vh;
    align-items: stretch;
  }

  @media (max-width: 768px) {
    padding: 40px 10px;
    min-height: auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
    padding: 40px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 2em;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
`;

const ExploreButton = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2em;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 1000px) {
    padding: 8px 16px;
    font-size: 1em;
    margin: 8px;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.9em;
    margin: 6px;
  }
`;
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const StatsSection = styled.section`
  background: black;
  color: #63fed2;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  animation: ${fadeInUp} 1s ease-out;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StatCard = styled.div`
  margin: 20px 0;
  flex: 1;
  animation: ${fadeInUp} 1s ease-out, ${pulse} 2s ease-in-out infinite;

  @media (min-width: 768px) {
    max-width: 25%;
  }
`;

const StatNumber = styled.p`
  font-size: 3em;
  font-weight: bold;
  margin: 0;
  position: relative;
  animation: ${fadeInUp} 1s ease-out;
  &:after {
    content: '';
    display: block;
    width: 0;
    height: 3px;
    background: white;
    transition: width 0.3s;
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: ${fadeInUp} 2s ease-out 2s forwards;
  }
`;

const StatLabel = styled.p`
  font-size: 2em;
  margin: 0;
  animation: ${fadeInUp} 2s ease-out;
`;
const Explore = () => {
  return (
    <ExploreSection>
      <ImageContainer style={{ backgroundImage: `url(${require("../images/explore.png")})` }} />
      <ContentContainer>
        <SectionHeader>Explore Our Services and Careers</SectionHeader>
        <ExploreButton to="/services">Explore Services</ExploreButton>
        <ExploreButton to="/careers">Explore Careers</ExploreButton>
      </ContentContainer>
    </ExploreSection>
  );
};




const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems] = useState([
    {
      text: "Welcome to Techy Software\nYour Partner in Innovation",
      imageUrl: require('../images/img1.jpg'),
    },
    {
      text: "Professional Web Development \n Services",
      imageUrl: require('../images/img2.jpg'),
    },
    {
      text: "Custom Mobile App Development \n for iOS and Android",
      imageUrl: require('../images/img3.jpg'),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState({ success: null, message: '' });

  const handleChange = ({ target: { name, value } }) => setFormData({...formData, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/customers/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmissionStatus({ success: true, message: 'Feedback submitted successfully!' });
        setFormData({ name: '', email: '', message: '' });
        alert('Feedback submitted successfully!');
      } else {
        setSubmissionStatus({ success: false, message: 'Failed to submit feedback. Please try again.' });
      }
    } catch (error) {
      setSubmissionStatus({ success: false, message: 'An error occurred. Please try again.' });
      console.error('Error submitting feedback', error);
    }
  };


  return (
    <HomeContainer>
      <HeroSection>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} active={index === activeIndex ? 'active' : ''}>
            <HeroImage src={item.imageUrl} alt={`Slide ${index}`} />
            <HeroContent> 
            <HeroText>{item.text}</HeroText>
            <img src={require("../images/1.png")} alt="Hero" />
            </HeroContent>
            
          </CarouselItem>
        ))}
      </HeroSection>
      <Explore />
      <StatsSection>
      <StatCard>
        <StatNumber>150k+</StatNumber>
        <StatLabel>Clients</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>170k+</StatNumber>
        <StatLabel>Projects Completed</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>50+</StatNumber>
        <StatLabel>Awards Won</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>10+</StatNumber>
        <StatLabel>Years in Business</StatLabel>
      </StatCard>
    </StatsSection>
      <ContactContainer>
      <h2 style={{marginBottom:"30px"}}>Feedback Form</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <TextArea name="message" placeholder=" Write Your Feedback" value={formData.message} onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </Form>
      {submissionStatus.message && (
        <Message error={submissionStatus.success? undefined : 'true'}>{submissionStatus.message}</Message>
      )}
      <ConnectWithMe />
    </ContactContainer>
      
      
      
      <ContactSection>
      <ContactInfo>
        <h2 style={{fontSize:"3rem",marginBottom:"2rem"}}>Contact Us</h2>
        <p style={{marginBottom:"1rem"}}>Phone: (123) 456-7890</p>
        <p style={{marginBottom:"1rem"}}>Email: info@techysoftware.com</p>
        <p style={{marginBottom:"1rem"}}>Address: 123 Techy Street, Software City, 12345</p>
      </ContactInfo>
      <ConnectWithMe> 
        <SocialMediaContainer>
      <h2 style={{fontSize:"3rem" , marginBottom:"30px"}}>Connect with Me</h2>
     <SocialMediaLink href="https://example.com/facebook" target="_blank">
       <i className="fab fa-facebook"></i>
     </SocialMediaLink>
     <SocialMediaLink href="https://example.com/twitter" target="_blank">
       <i className="fab fa-twitter"></i>
    </SocialMediaLink>
     <SocialMediaLink href="https://example.com/linkedin" target="_blank">
       <i className="fab fa-linkedin"></i>
     </SocialMediaLink>
   </SocialMediaContainer>
      </ConnectWithMe>
      <GoogleMap
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096!2d144.95373531567444!3d-37.817209742013614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577bb3b2e4d0a3a!2s123+Techy+St%2C+Software+City+12345!5e0!3m2!1sen!2sus!4v1555921897489!5m2!1sen!2sus"
        allowFullScreen
      ></GoogleMap>
    </ContactSection>
    </HomeContainer>
  );
};

export default Home;
