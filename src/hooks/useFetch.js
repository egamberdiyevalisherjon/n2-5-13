import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unmounted = false;
    const get = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        if (unmounted) return;
        if (res.status >= 200 && res.status < 300) {
          setData(res.data);
        }
      } catch (error) {
        setIsError(true);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    get();

    return () => {
      unmounted = true;
    };
  }, [url]);

  return { data, isLoading, isError, error };
}

export default useFetch;
