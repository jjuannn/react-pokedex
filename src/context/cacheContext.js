import React, { createContext, useEffect, useReducer } from "react";

export const cacheContext = createContext();

export function CacheContextProvider({ children }) {
  const [page, dispatch] = useReducer(
    cacheReducer,
    JSON.parse(localStorage.getItem("pokedex_cache"))
  );

  useEffect(() => {
    const data = JSON.stringify(page);
    localStorage.setItem("pokedex_cache", data);
  }, [page]);

  return (
    <cacheContext.Provider value={{ page, dispatch }}>
      {children}
    </cacheContext.Provider>
  );
}
const ACTIONS = {
  set_cache: "SET_CACHE",
};
function cacheReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.set_cache:
      return { ...state, [payload.key]: payload.value };
    default:
      return state;
  }
}

export default cacheContext;
