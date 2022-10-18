import { useTheme, useUpdateTheme } from './ThemeContext';

export const Card = () => {
  const darkTheme = useTheme();
  const toggleDarkTheme = useUpdateTheme();

  return (
    <div>
      {`theme is ${darkTheme ? 'dark' : 'light'}`}
      <br />
      <button onClick={() => toggleDarkTheme()}>click</button>
    </div>
  );
};
