import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const skillsData = [
  { name: 'JAVASCRIPT', logo: 'https://via.placeholder.com/50' },
  { name: 'NODE', logo: 'https://via.placeholder.com/50' },
  { name: 'REACT', logo: 'https://via.placeholder.com/50' },
  { name: 'VS CODE', logo: 'https://via.placeholder.com/50' },
  { name: 'REDUX', logo: 'https://via.placeholder.com/50' },
  { name: 'FIGMA', logo: 'https://via.placeholder.com/50' },
];

const Skills = () => {
  const { texts } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  const sectionStyles = {
    padding: '3rem 2rem',
    backgroundColor: darkMode ? '#121212' : '#F5F5F5',
  };

  const titleStyles = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: darkMode ? '#A6FF96' : '#5D3FD3',
    marginBottom: '2rem',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1.5rem',
  };

  const skillItemStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoContainerStyles = {
    background: darkMode ? '#333333' : 'white',
    borderRadius: '0.25rem',
    padding: '1rem',
    width: '4rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const logoStyles = {
    width: '2.5rem',
    height: '2.5rem',
  };

  const skillNameStyles = {
    color: darkMode ? '#E0E0E0' : '#666666',
  };

  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>
        {texts.skills.title}
      </h2>
      
      <div style={gridStyles}>
        {skillsData.map((skill, index) => (
          <div key={index} style={skillItemStyles}>
            <div style={logoContainerStyles}>
              <img src={skill.logo} alt={skill.name} style={logoStyles} />
            </div>
            <span style={skillNameStyles}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;