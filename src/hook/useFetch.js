import { useContext, useEffect, useReducer, useState } from "react";
import cacheContext from "../context/cacheContext.js";
const ACTIONS = {
  loading: "LOADING",
  success: "SUCCESS",
  failed: "FAILED",
  set_cache: "SET_CACHE",
};

function fetchReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.loading:
      return { ...state, loading: true, data: null, error: null };
    case ACTIONS.success:
      return { ...state, loading: false, data: payload, error: null };
    case ACTIONS.failed:
      return { ...state, loading: false, data: null, error: payload };
    default:
      return state;
  }
}

const initialValue = { loading: false, data: null, error: null };

export default function useFetch(fetchFunction, param) {
  const cache = useContext(cacheContext);
  const [state, dispatch] = useReducer(fetchReducer, initialValue);
  useEffect(() => {
    if (cache.page && cache.page[param]) {
      dispatch({ type: ACTIONS.success, payload: cache.page[param] });
      return;
    }

    dispatch({ type: ACTIONS.loading });
    const getData = async () => {
      try {
        const apiData = await fetchFunction(param);
        dispatch({ type: ACTIONS.success, payload: apiData });
        cache.dispatch({
          type: ACTIONS.set_cache,
          payload: { key: param, value: apiData },
        });
      } catch (error) {
        dispatch({ type: ACTIONS.failed, payload: error });
      }
    };
    getData();
  }, [fetchFunction, param]);

  return state;
}
