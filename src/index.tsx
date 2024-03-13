import { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { Switch, FluentProvider, teamsLightTheme, teamsDarkTheme } from '@fluentui/react-components';
import type { SwitchProps } from "@fluentui/react-components";
import App from './App.tsx'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 

const ThemeSwitcher = (props: SwitchProps) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <FluentProvider theme={isDarkTheme ? teamsDarkTheme : teamsLightTheme}>
      <Switch onChange={toggleTheme} label="Dark Mode" {...props} style={{fontWeight: "bold"}} />
      <App />
    </FluentProvider>
  );
};

root.render(<ThemeSwitcher />);