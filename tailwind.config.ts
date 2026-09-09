import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink:'#102344', cream:'#f8f5ed', gold:'#c7a15a', mist:'#eefaf7' }, fontFamily:{ serif:['Georgia','Times New Roman','serif'], sans:['Arial','Helvetica','sans-serif'] }, boxShadow:{soft:'0 15px 50px rgba(16,35,68,.08)'} } },
  plugins: []
}
export default config
