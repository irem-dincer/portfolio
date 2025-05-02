import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { toggleLanguage, texts } = useContext(LanguageContext);

  const headerStyles = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '1rem 2rem',
  };

  const buttonStyles = {
    marginRight: '1rem',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: darkMode ? '#A6FF96' : '#5D3FD3',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const profileImageStyles = {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    overflow: 'hidden',
    marginLeft: '1rem',
  };

  return (
    <header style={headerStyles}>
      <button 
        onClick={toggleLanguage}
        style={buttonStyles}
      >
        {texts.nav.language}
      </button>
      <button 
        onClick={toggleTheme}
        style={buttonStyles}
      >
        {texts.nav.darkMode}
      </button>
      <div style={profileImageStyles}>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </header>
  );
};

export default Header;