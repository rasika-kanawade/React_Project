// src/DataFetcher.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {data.map(album => (
          <li key={album.id}>
            <strong>{album.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
