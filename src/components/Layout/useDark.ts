import {
  useState,
  useCallback,
  useEffect
} from 'react';

export default function useDark(): [
  boolean,
  () => void
] {
  const [isDark, setIsDark] = useState(false);
  const toggleIsDark = useCallback(
    () => {
      const newIsDark = !isDark;

      if (newIsDark) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
      }

      localStorage.setItem('dark-mode', String(newIsDark));
      setIsDark(newIsDark);
    },
    [
      isDark
    ]
  );

  useEffect(
    () => setIsDark(localStorage.getItem('dark-mode') === 'true'),
    []
  );
  
  return [
    isDark,
    toggleIsDark
  ];
}