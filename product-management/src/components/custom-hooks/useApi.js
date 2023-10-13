import { useState, useEffect } from "react";

export const useApi = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, error, loading];
};

//1.custom hook name should start with use
//2.do not use hooks inside loops
//3.hooks must be placed at the top of component
