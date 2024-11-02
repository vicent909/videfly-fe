'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  state: string;
  toggleState: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<string>("Hello, World!");

  const toggleState = () => {
    console.log('aa')
    setState((prevState) => (prevState === "Hello, World!" ? "Goodbye, World!" : "Hello, World!"));
  };

  return (
    <GlobalContext.Provider value={{ state, toggleState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
