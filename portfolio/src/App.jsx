import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
