import React, { createContext, useState } from "react";

const offsetContext = createContext({});

export function OffsetContextProvider({ children }) {
  const [pageOffset, setPageOffset] = useState(0);

  return (
    <offsetContext.Provider value={{ pageOffset, setPageOffset }}>
      {children}
    </offsetContext.Provider>
  );
}

export default offsetContext;
