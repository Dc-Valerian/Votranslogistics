/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero': "url('https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/banner11.jpg')",
        // 'righthero': "url('https://votranslogistics.com/wp-content/uploads/2021/09/Home-page.jpg')",
        // 'lefthero': "url('https://votranslogistics.com/wp-content/uploads/2021/09/Home-page-1.jpg')",
        'mapimage': "url('https://votranslogistics.com/wp-content/uploads/2019/01/bg_5-1.jpg?id=2003')",
        'aboutImage':"url('https://p.w3layouts.com/demos_new/template_demo/08-09-2021/shipper-liberty-demo_Free/1111825838/web/assets/images/banner2.jpg')"

      },
      
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'herotext': '#00214f',
        'black': '#3459DA',
        'heroparagraph': '#232333',
        'herobutton': '#3CD19C',
        'header': '#3459DA',
        'hover': '#FF641D',
        'buttoncol': '#001328',
        'buttonhover': '#007bff',
        'h3text': '#0057B3',
      },
      screens: {
        'xl': { 'max': '1280px' },
        'xsm': {'max': '320px'},
        'sm': {'max': '375px'},
        'xmd': {'max': '500px'},
        'md': {'max': '768px'},
        'lg': {'max': '1024px'}
      },
    },
  },
  plugins: [],
}