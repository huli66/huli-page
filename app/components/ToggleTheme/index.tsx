'use client';

import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic';

function Toggle() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme}</button>
}

const ToggleTheme = dynamic(() => Promise.resolve(Toggle), {
  ssr: false,
});

export default ToggleTheme;