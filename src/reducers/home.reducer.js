export const homeInitialState = {
  title: 'Welcome!',
  subtitle: 'Your project starts here.',
  description:
    'With support for Redux, Jest, Enzyme, ESLint, Stylelint, Prettier, React Axe, and Travis CI.',
  links: [
    { url: 'https://parceljs.org/', text: 'Parcel' },
    { url: 'https://www.atomikui.com/', text: 'Atomik UI' },
  ],
};

export default (state = homeInitialState, action) => state;
