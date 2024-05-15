import { useState, useEffect } from 'react';
import axios from 'axios';

const useHttpRequest = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Clean up function
    return () => {
      // Cancel any ongoing requests
    };
  }, [url]);

  return { data, loading, error };
};

export default useHttpRequest;