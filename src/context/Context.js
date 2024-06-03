import React, { createContext, useState } from 'react';

// Create a Context
const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState(false);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
