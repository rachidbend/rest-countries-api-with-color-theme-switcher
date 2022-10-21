import { ThemeProvider } from './ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import './Header.css';

export const Header = () => {
  return (
    <ThemeProvider>
      <header className="header">
        <div className="header__text">
          <p>Where in the world?</p>
        </div>
        <div className="theme__switcher">
          <ThemeSwitcher />
        </div>
      </header>
    </ThemeProvider>
  );
};
