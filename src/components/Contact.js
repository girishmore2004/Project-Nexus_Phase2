import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 60px 20px;
  background-color: black; /* Background color with transparency */
  color: white;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 40px;
  background: black;
  color: white;
  border-radius: 8px;
  box-shadow: 0 0px 20px white;
`;

const Input = styled.input`
  padding: 10px;
  width: 300px;
  border-radius: 8px;
  border: 2px solid white;
  background: black;
  color: white;
`;

const TextArea = styled.textarea`
  padding: 10px;
  width: 300px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid white;
  background: black;
  color: white;
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

const SocialMediaContainer = styled.div`
  margin-top: 30px;
`;

const SocialMediaLink = styled.a`
  display: inline-block;
  margin-right: 10px;
  font-size: 40px;
  color: #007bff;
`;

const ConnectWithMe = () => (
  <SocialMediaContainer>
    <h3 style={{fontSize:"2rem"}}>Connect with Me</h3>
    <SocialMediaLink href="https://example.com/facebook" target="_blank">
      <i className="fab fa-facebook" />
    </SocialMediaLink>
    <SocialMediaLink href="https://example.com/twitter" target="_blank">
      <i className="fab fa-twitter" />
    </SocialMediaLink>
    <SocialMediaLink href="https://example.com/linkedin" target="_blank">
      <i className="fab fa-linkedin" />
    </SocialMediaLink>
  </SocialMediaContainer>
);

const Message = styled.p`
  margin-top: 20px;
  color: ${props => (props.error? 'ed' : 'green')};
`;
const Contact = () => {
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
        setSubmissionStatus({ success: true, message: 'Message submitted successfully!' });
        setFormData({ name: '', email: '', message: '' });
        alert('Message submitted successfully!');
      } else {
        setSubmissionStatus({ success: false, message: 'Failed to submit Message. Please try again.' });
      }
    } catch (error) {
      setSubmissionStatus({ success: false, message: 'An error occurred. Please try again.' });
      console.error('Error submitting Message', error);
    }
  };

  return (
    <ContactContainer>
      <h2 style={{marginBottom:"30px"}}>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
        <TextArea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </Form>
      {submissionStatus.message && (
        <Message error={submissionStatus.success? undefined : 'true'}>{submissionStatus.message}</Message>
      )}
      <ConnectWithMe />
    </ContactContainer>
  );
};

export default Contact;