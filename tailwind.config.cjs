/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontSize: '1em',
            fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif;',
            a:{
              color: '#00c',
              textDecoration: 'none',
            },
            h1:{
              color: '#039',
            },
            h2: {
              color: '#039',
            },
            h3: {
              color: '#039',
            },
            h4: {
              color: '#039',
            }
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}