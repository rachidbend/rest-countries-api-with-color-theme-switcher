import { ThemeProvider } from './ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
  return (
    <ThemeProvider>
      <header className="header">
        <div className="header__text">
          <p>where in the world?</p>
        </div>
        <div className="theme__switcher">
          <ThemeSwitcher />
        </div>
      </header>
    </ThemeProvider>
  );
};
