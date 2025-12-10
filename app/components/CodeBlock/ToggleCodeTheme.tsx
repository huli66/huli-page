'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const themeOpts = [
  {
    label: 'Dark',
    value: 'dark',
  },
  {
    label: 'Light',
    value: 'light',
  }
]

const getBrowserTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ToggleCodeTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const handleToggleTheme = (theme: Theme) => {
    setTheme(theme);
    document.documentElement.setAttribute('code-theme', theme);
    localStorage.setItem('code-theme', theme);
  }

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key !== 'code-theme') {
        return;
      }
      console.log('e.newValue', e.newValue);
      if (!e.newValue) {
        setTheme(() => getBrowserTheme())
      } else {
        setTheme(e.newValue as Theme);
      }
    }
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return <div>
    <select value={theme} onChange={(e) => handleToggleTheme(e.target.value as Theme)}>
      {themeOpts.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
}

export default ToggleCodeTheme;
