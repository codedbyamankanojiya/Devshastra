/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--bg-primary)',
        'secondary': 'var(--bg-secondary)',
        'tertiary': 'var(--bg-tertiary)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        // Keeping legacy names mapped to new vars for backward compatibility if possible, 
        // OR better yet, just use new names and refactor the code. 
        // But to be safe, I'll map old names to new vars initially to avoid breaking current layout immediately, 
        // then I will refactor.
        'dark-bg': 'var(--bg-primary)',
        'dark-secondary': 'var(--bg-secondary)',
        'dark-tertiary': 'var(--bg-tertiary)',
        'accent-cyan': 'var(--accent-primary)',
        'accent-purple': 'var(--accent-secondary)',
      },
      fontFamily: {
        'sans': ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
