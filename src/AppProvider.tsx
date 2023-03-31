import React, { useEffect, useState, useContext, createContext } from 'react';

type Props = {
  children: JSX.Element;
};

type AppProviderValues = {
  setSectionOffsetYState: Function;
  nextSection: string;
};

const AppContext = createContext<AppProviderValues>({
  setSectionOffsetYState: () => {},
  nextSection: '',
});
export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }: Props) => {
  const [nextSection, setNextSection] = useState<string>('');
  const [sections, setSections] = useState<object>({});

  const setSectionOffsetYState = (state: { [key: string]: number }) => {
    setSections((prev) => ({ ...prev, ...state }));
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY + 61;
      const sectionEntries = Object.entries(sections);

      sectionEntries.forEach(([section, yOffset]) => {
        if (windowY > yOffset) {
          setNextSection(`/#${section}`);
        }
      });

      const firstSection = sectionEntries[0];

      if (firstSection) {
        const [_, firstSectionOffset] = firstSection;
        if (windowY < firstSectionOffset) {
          setNextSection('');
        }
      }
    });
  }, [sections]);

  return (
    <AppContext.Provider value={{ setSectionOffsetYState, nextSection }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
