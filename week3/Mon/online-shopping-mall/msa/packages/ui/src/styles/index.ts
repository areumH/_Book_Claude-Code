// Export Tailwind CSS configuration for consuming applications
export const tailwindConfig = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shopping-mall/ui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
    },
  },
  plugins: [],
};