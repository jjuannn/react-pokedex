import { useEffect, useReducer } from "react";

const ACTIONS = {
  loading: "LOADING",
  success: "SUCCESS",
  failed: "FAILED",
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
  const [state, dispatch] = useReducer(fetchReducer, initialValue);
  useEffect(() => {
    dispatch({ type: ACTIONS.loading });
    const getData = async () => {
      try {
        const apiData = await fetchFunction(param);
        dispatch({ type: ACTIONS.success, payload: apiData });
      } catch (error) {
        dispatch({ type: ACTIONS.failed, payload: error });
      }
    };
    getData();
  }, [fetchFunction, param]);

  return state;
}
