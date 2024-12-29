import type { Config } from 'tailwindcss';
const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        chapterNavy: '#3E64A5',
        ruddyBlue: '#73C2FB',
        babyBlue: '#cbe6ff'
      },
    },
  },
  plugins: [],
});

export default config;
