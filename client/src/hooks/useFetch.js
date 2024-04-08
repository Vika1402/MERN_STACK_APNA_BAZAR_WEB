import React, { useEffect, useState } from 'react';
import { fetchDataFromApi } from '../utils/api';

 // Assuming you have a function to fetch data from the API

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await fetchDataFromApi(endpoint);
        setData(res);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

  }, [endpoint]);

  return { data, error };
};

export default useFetch;
