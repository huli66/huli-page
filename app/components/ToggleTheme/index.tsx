'use client';

import { useTheme } from 'next-themes'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
}