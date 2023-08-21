import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'desktop': {'min': '1024px'},
      'tablet': {'max': '1023px', 'min': '768px'},
      'mobile': {'max': '767px'},
    },
    extend: {},
  },
  plugins: [],
}
export default config
