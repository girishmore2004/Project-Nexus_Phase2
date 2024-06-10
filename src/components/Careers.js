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
text-align: justify;
  background: black;
  color: white;
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

const careersData = [
  {
    id: 1,
    title: 'Software Engineer',
    description: 'Join our team of talented developers and work on cutting-edge projects.',
    image: require('../images/soft.jpg'),
    details: 'As a Software Engineer at Techy Software, you will be responsible for developing high-quality software solutions...'
  },
  {
    id: 2,
    title: 'Project Manager',
    description: 'Lead our projects to success by ensuring timely and efficient delivery.',
    image: require('../images/project.jpg'),
    details: 'As a Project Manager at Techy Software, you will oversee the planning, execution, and closing of projects...'
  },
  {
    id: 3,
    title: 'Data Scientist',
    description: 'Join our team of data enthusiasts and uncover insights from complex datasets.',
    image: require('../images/data.jpg'),
    details: 'As a Data Scientist at Techy Software, you will utilize statistical analysis and machine learning techniques to...'
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    description: 'Create intuitive and visually stunning user experiences for our products.',
    image: require('../images/ui.png'),
    details: 'As a UX/UI Designer at Techy Software, you will collaborate with cross-functional teams to...'
  },
  {
    id: 5,
    title: 'Quality Assurance Engineer',
    description: 'Ensure the quality and reliability of our software products through rigorous testing.',
    image: require('../images/quality.jpg'),
    details: 'As a Quality Assurance Engineer at Techy Software, you will develop and execute test plans, identify defects, and...'
  },
  // Add more job listings as needed
  {
    id: 6,
    title: 'Network Administrator',
    description: 'Manage and maintain our network infrastructure to ensure smooth operations.',
    image: require('../images/network.jpg'),
    details: 'As a Network Administrator at Techy Software, you will be responsible for configuring, installing, and maintaining...'
  },
  {
    id: 7,
    title: 'DevOps Engineer',
    description: 'Streamline our development processes and improve deployment efficiency.',
    image: require('../images/dev.jpg'),
    details: 'As a DevOps Engineer at Techy Software, you will automate deployment pipelines, monitor system performance...'
  },
  {
    id: 8,
    title: 'Cybersecurity Analyst',
    description: 'Protect our systems and data from cyber threats through proactive monitoring and analysis.',
    image: require('../images/cyber.avif'),
    details: 'As a Cybersecurity Analyst at Techy Software, you will conduct vulnerability assessments, investigate security incidents...'
  }
];

const Careers = () => {
  return (
    <Section style={{ backgroundColor: "black", border: "3px solid gray" }}>
      <SectionHeader>Careers</SectionHeader>
      <Content>
        {careersData.map((career) => (
          <Card key={career.id}>
            {/* Uncomment below if using images */}
            <ProductImage src={career.image} alt={career.title} />
            <h3 style={{textAlign:"center"}}>{career.title}</h3>
            <p>{career.description}</p>
            <p>{career.details}</p>
          </Card>
        ))}
      </Content>
    </Section>
  );
};

export default Careers;
