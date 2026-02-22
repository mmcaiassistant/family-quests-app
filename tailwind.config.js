/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Quest Purple (Primary)
        'quest-purple': '#6C63FF',
        'quest-purple-light': '#9A93FF',
        'quest-purple-dark': '#4B44CC',
        
        // Family Teal (Secondary)
        'family-teal': '#4ECDC4',
        'family-teal-light': '#81DDD8',
        'family-teal-dark': '#2AA99E',
        
        // Sunshine Yellow (Accent)
        'sunshine-yellow': '#FFE66D',
        'sunshine-yellow-light': '#FFF4B3',
        'sunshine-yellow-dark': '#D9C04A',
        
        // Neutrals
        'charcoal': '#2D3748',
        'slate': '#718096',
        'cloud': '#E2E8F0',
        'snow': '#F7FAFC',
        
        // Semantic
        'success-green': '#48BB78',
        'warning-orange': '#ED8936',
        'error-red': '#F56565',
        'info-blue': '#4299E1',
        
        // Gamification
        'bronze': '#CD7F32',
        'silver': '#C0C0C0',
        'gold': '#FFD700',
        'platinum': '#E5E4E2',
      },
      fontFamily: {
        'fredoka': ['Fredoka One', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        'xxl': '48px',
      },
      borderRadius: {
        'small': '4px',
        'medium': '8px',
        'large': '12px',
        'xlarge': '16px',
      },
    },
  },
  plugins: [],
}
