import { useEffect } from 'react';
import { useTheme, useUpdateTheme } from './ThemeContext';

export const ThemeSwitcher = () => {
  const darkTheme = useTheme();
  const toggleDarkTheme = useUpdateTheme();

  useEffect(() => {
    const app = document.querySelector('.App');
    console.log(app);
    if (darkTheme) {
      app.classList.add('theme-dark');
    } else {
      app.classList.remove('theme-dark');
    }
  }, [darkTheme]);

  return (
    <div>
      {`theme is ${darkTheme ? 'dark' : 'light'}`}
      <br />
      <button onClick={() => toggleDarkTheme()}>click</button>
    </div>
  );
};
