import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const targetMode = isDark ? 'light' : 'dark'
  const label = isDark ? 'Light mode' : 'Dark mode'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${targetMode} mode`}
      title={`Switch to ${targetMode} mode`}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? (
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm9-4a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm-15 0a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm12.95 6.364a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 1 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414zm-11.314-11.314a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 1 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414zM20.364 7.05a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM7.05 4.636a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 5.93 5.343l.707-.707a1 1 0 0 1 1.414 0zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
            />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 14.5A7.5 7.5 0 0 1 8.5 2 6.5 6.5 0 1 0 21 14.5z"
            />
          </svg>
        )}
      </span>
      <span className="theme-toggle-label">{label}</span>
    </button>
  )
}
