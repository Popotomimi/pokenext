import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grass: '#78C850',
        poison: '#A040A0',
        fire: '#F08030',
        water: '#6890F0',
        bug: '#A8B820',
        flying: '#A890F0',
        normal: '#A8A878',
        electric: '#F8D030',
        ground: '#E0C068',
        ghost: '#d3d3d3',
        fairy: '#FFB6C1',
        fighting: '#D2B48C',
        psychic: '#FFd700',
        rock: '#d3d3d3',
        steel: '#00008b',
        ice: '#d3d3d3'
      },
    },
  },
  plugins: [],
} satisfies Config;

