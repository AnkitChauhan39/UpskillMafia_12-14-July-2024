import React, { createContext, useState } from "react";

// Create a context with a default value
const ScreenLoaderContext = createContext();

export const ScreenLoaderProvider = ({ children }) => {
  // State to be shared
  const [showLoader, setShowLoader] = useState(false);

  return (
    <ScreenLoaderContext.Provider value={{ showLoader, setShowLoader }}>
      {children}
    </ScreenLoaderContext.Provider>
  );
};

export default ScreenLoaderContext;
