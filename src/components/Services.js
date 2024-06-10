import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 60px 20px;
  background-color: rgba(98, 139, 165, 0.8); /* Background color with transparency */
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
`;

const SectionHeader = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
`;

const Card = styled.div`
  background: black;
  color: white;
  text-align: justify;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0px 20px white;
  transition: transform 0.2s;
  width: 300px;

  &:hover {
    transform: scale(1.05);
    color: aqua;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  border: 2px solid white;
  margin-bottom: 10px;
`;

const servicesData = [
  {
    id: 1,
    title: 'Tech Consultancy',
    description: 'Expert consultancy services to help your business succeed in the tech industry.',
    image: require('../images/consult.jpg'),
  },
  {
    id: 2,
    title: 'Software Solutions',
    description: 'Innovative software solutions to streamline your business processes.',
    image: require('../images/solution.jpg'),
  },
  {
    id: 3,
    title: 'Cloud Computing',
    description: 'Scalable cloud computing solutions for your business infrastructure.',
    image: require('../images/cloud.jpg'),
  },
  {
    id: 4,
    title: 'Web Development',
    description: 'Professional web development services tailored to your needs.',
    image: require('../images/web.jpg')
  },
  {
    id: 5,
    title: 'Android Development',
    description: 'Custom mobile app development for iOS and Android platforms.',
    image: require('../images/android.jpg')
  },
  {
    id: 6,
    title: 'iOS Development',
    description: 'Expert iOS app development for Apple devices.',
    image: require('../images/ios.webp')
  }
];

const Services = () => {
  return (
    <Section style={{ backgroundColor: "black", border: "3px solid gray" }}>
      <SectionHeader>Our Services</SectionHeader>
      <Content>
        {servicesData.map((service) => (
          <Card key={service.id}>
            <ProductImage src={service.image} alt={service.title} />
            <h3 style={{ textAlign: "center" }}>{service.title}</h3>
            <p>{service.description}</p>
          </Card>
        ))}
      </Content>
    </Section>
  );
};

export default Services;
