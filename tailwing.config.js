export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "heading-primary": "var(--color-heading-primary)",
        "heading-accent": "var(--color-heading-accent)",
        "color-subheading": "var(--color-subheading)",
        "color-text": "var(--color-text)",
        "color-logo": "var(--color-logo)",
        "color-caption": "var(--color-caption)",
        "caption-icon": "var(--color-caption-icon)",
        "glass-bg": "var(--glass-bg)",
        "glass-blur": "var(--glass-blur)",
        "accordion-text-active": "var(--accordion-text-active)",
        "accordion-text-default": "var(--accordion-text-default)",
        "accordion-nr-active": "var(--accordion-nr-active)",
        "accordion-nr-default": "var(--accordion-nr-default)",
        "logo-footer": "var(--logo-footer)",
        "logo-text": "var(--logo-text)",
      },
      backgroundImage: {
        "button-gradient": "linear-gradient( 90deg, #1ed1a8 0%, #22c3df 80%)",
        "title-border": "linear-gradient(90deg, #22c3df 40%, #1ed1a8 100%)",
        "pagination-button":
          "linear-gradient( 180deg, #1ed1a8 0%, #22c3df 60% )",
      },
    },
  },
  plugins: [],
};
