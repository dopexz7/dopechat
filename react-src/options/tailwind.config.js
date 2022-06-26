module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-purple': 'var(--main-purple)',
        'accent-purple': 'var(--accent-purple)',
        'darker-purple': 'var(--darker-purple)',
        'accent-white': 'var(--accent-white)',
        'main-black': 'var(--main-black)',
        'main-white': 'var(--main-white)',
        'border-white': 'var(--border-white)',
        'accent-gray': 'var(--accent-gray)',
      },
      backgroundImage: {
        'main-gradient': 'var(--main-gradient)',
        'header-bg': 'var(--header-bg)',
        'blog-img': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8))",
        'reference-img1': 'url(https://pbs.twimg.com/media/FJ4qe66XwAEtAik?format=jpg&name=4096x4096)',
        'reference-img2': 'url(turbo01.png)',
        'reference-img3': 'url(turbo02.png)',
        'reference-img4': 'url(turbo03.png)',
      },
    },
  },
  plugins: [],
};
