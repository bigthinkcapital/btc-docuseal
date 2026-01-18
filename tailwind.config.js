module.exports = {
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'light',
          primary: '#FFBA30',
          secondary: '#ef9fbc',
          accent: '#1767A5',
          neutral: '#09253d',
          'base-100': '#ffffff',
          'base-200': '#e0e0e0',
          'base-300': '#bdbdbd',
          'base-content': '#0000',
          '--rounded-btn': '1.9rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}
