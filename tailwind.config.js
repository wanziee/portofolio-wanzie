// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        background: "rgba(var(--background))",
        muted: "rgba(var(--muted-foreground))",
        accent: "rgba(var(--accent))",
        dock: "rgba(var(--dark-dock))",
      },
    },
  },
  plugins: [],
};
