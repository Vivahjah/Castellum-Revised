/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        accent:"#EEF2F5",
      accent2:"#ECF1F4",
      text:"#49495e",
      subtleText:"#8C8CA1",
      secondary:"#EF5DA8",
      tetiary:"#F3DCDD",
      primary:"#FA1E51",
      white:"#FFFFFF",
      gray6:"#F2F2F2",
      readRed:"#FA053E",
      textBody:"#4A4A68",
      iris:"#EFEFFD",
      light:"#FAFCFE",
      flamingo:"#ED4B9E",
      skyBlue:"#B1E3FF",
      success:"#46D4B2",
      dark:"#262641",
      darkShade:"#434B5B",
      black:"#000000",
      faveAccent:"#EFEFFD",
      lightGrey:"#D6D9E1", 
      offWhite:"#F3F4F6",

       
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
   
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}