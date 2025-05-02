import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const projectsData = [
  {
    id: 1,
    title: 'Workintech',
    description: 'A simple, customizable, minimal setup cookie plugin that shows your users that your website is using cookies.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'TailwindCSS', 'Context'],
    links: {
      site: 'https://example.com/project1',
      github: 'https://github.com/yourusername/project1',
    }
  },
  {
    id: 2,
    title: 'Journey',
    description: 'A simple, customizable, minimal setup cookie plugin that shows your users that your website is using cookies.',
    image: 'https://via.placeholder.com/300x200',
    technologies: ['React', 'TailwindCSS', 'Redux'],
    links: {
      site: 'https://example.com/project2',
      github: 'https://github.com/yourusername/project2',
    }
  }
];

const Projects = () => {
  const { texts } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  const sectionStyles = {
    padding: '3rem 2rem',
    backgroundColor: darkMode ? '#009900' : '#A6FF96',
  };

  const titleStyles = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: darkMode ? '#2A2A72' : '#5D3FD3',
    marginBottom: '2rem',
  };

  const projectsContainerStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  };

  const projectCardStyles = {
    backgroundColor: darkMode ? '#333333' : 'white',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const projectContentStyles = {
    padding: '1.5rem',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '1.5rem',
  };

  const projectImageStyles = {
    width: '100%',
    height: 'auto',
    borderRadius: '0.25rem',
  };

  const projectTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: darkMode ? '#A6FF96' : '#5D3FD3',
    marginBottom: '0.5rem',
  };

  const projectDescriptionStyles = {
    color: darkMode ? '#E0E0E0' : '#666666',
    marginBottom: '1rem',
  };

  const tagContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem',
  };

  const tagStyles = {
    backgroundColor: darkMode ? '#2A2A72' : '#5D3FD3',
    color: 'white',
    padding: '0.25rem 1rem',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
  };

  const linksContainerStyles = {
    display: 'flex',
    gap: '1rem',
  };

  const linkStyles = {
    fontSize: '0.875rem',
    color: darkMode ? '#A6FF96' : '#5D3FD3',
    textDecoration: 'underline',
  };

  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>
        {texts.projects.title}
      </h2>
      
      <div style={projectsContainerStyles}>
        {projectsData.map(project => (
          <div 
            key={project.id} 
            style={projectCardStyles}
          >
            <div style={projectContentStyles}>
              <div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={projectImageStyles}
                />
              </div>
              <div>
                <h3 style={projectTitleStyles}>
                  {project.title}
                </h3>
                <p style={projectDescriptionStyles}>
                  {project.description}
                </p>
                <div style={tagContainerStyles}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} style={tagStyles}>{tech}</span>
                  ))}
                </div>
                <div style={linksContainerStyles}>
                  <a 
                    href={project.links.site} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyles}
                  >
                    {texts.projects.viewSite}
                  </a>
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={linkStyles}
                  >
                    {texts.projects.github}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;