import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';

const Profile = () => {
  const { texts } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);

  const profileData = {
    birthDate: '24.03.1999',
    city: 'Ankara',
    education: 'Hacettepe Ünv. Bilgisay Müh. 2018-2022',
    preferredRole: 'Frontend, UI',
    about: 'Lorem ipsum dolor sit amet consectetur adipiscing elit tempor lectus. Mivian ancomina ratione soluta dapibus sit quipue quidsatem nis nostrum volupatem nis mollis. Cinque magnam!'
  };

  const sectionStyles = {
    padding: '3rem 2rem',
    backgroundColor: darkMode ? '#2A2A72' : '#5D3FD3',
    color: 'white',
  };

  const titleStyles = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: darkMode ? '#A6FF96' : '#A6FF96',
    marginBottom: '2rem',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  };

  const subtitleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
  };

  const infoListStyles = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const infoItemStyles = {
    marginBottom: '0.5rem',
  };

  const labelStyles = {
    display: 'block',
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.7)',
  };

  const profileImageContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const profileImageStyles = {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
  };

  return (
    <section style={sectionStyles}>
      <h2 style={titleStyles}>
        {texts.profile.title}
      </h2>
      
      <div style={gridStyles}>
        {/* Temel Bilgiler */}
        <div>
          <h3 style={subtitleStyles}>{texts.profile.basicInfo}</h3>
          <ul style={infoListStyles}>
            <li style={infoItemStyles}>
              <span style={labelStyles}>{texts.profile.birthDate}</span>
              <span>{profileData.birthDate}</span>
            </li>
            <li style={infoItemStyles}>
              <span style={labelStyles}>{texts.profile.residence}</span>
              <span>{profileData.city}</span>
            </li>
            <li style={infoItemStyles}>
              <span style={labelStyles}>{texts.profile.education}</span>
              <span>{profileData.education}</span>
            </li>
            <li style={infoItemStyles}>
              <span style={labelStyles}>{texts.profile.preferredRole}</span>
              <span>{profileData.preferredRole}</span>
            </li>
          </ul>
        </div>
        
        {/* Profil Resmi */}
        <div style={profileImageContainerStyles}>
          <img 
            src="https://via.placeholder.com/250" 
            alt="Profile" 
            style={profileImageStyles}
          />
        </div>
        
        {/* Hakkımda */}
        <div>
          <h3 style={subtitleStyles}>{texts.profile.aboutMe}</h3>
          <p>{profileData.about}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;