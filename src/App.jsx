import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { backend } from './utils/constants';

const App = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const getWelcomeMessage = async () => {
      try {
        const response = await axios.get(`${backend}/api`);
        const data = response.data;
        setMessage(data.message)
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    
    getWelcomeMessage();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
