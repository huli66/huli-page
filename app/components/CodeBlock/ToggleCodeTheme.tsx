'use client';

import { useState } from 'react';

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

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ToggleCodeTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  const handleToggleTheme = (theme: Theme) => {
    setTheme(theme);
    document.documentElement.setAttribute('code-theme', theme);
    localStorage.setItem('code-theme', theme);
  }

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
