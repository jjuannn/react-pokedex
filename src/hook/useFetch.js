import { getPage } from "../api/api.js";
import { useEffect, useState } from "react";

export default function useFetch(fetchFunction, param) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const apiData = await fetchFunction(param);
        setData(apiData);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    getData();
  }, [fetchFunction, param]);

  return { data, error, loading };
}
