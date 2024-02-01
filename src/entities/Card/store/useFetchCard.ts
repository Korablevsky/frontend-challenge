import { useState, useEffect } from 'react';
import { getCard } from './store'

export function useFetchCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await getCard();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
}