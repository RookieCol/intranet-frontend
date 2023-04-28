import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backend } from './utils/constants';
import {Register} from './components/Register';
import { Header } from './components/Header';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
const App = () => {
  const [message, setMessage] = useState("");
  const [token,setToken]= useContext(UserContext)
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
    <>
    <Header title={message}/>
    <div className="colum">
      <div className="colum m-5 is-two-thirds">
        {
        !token ? (
          <div className="colums">
            <Register />
          </div>
        ):(
          <p>Table</p>
        )}

        <div className="colum"></div>
      </div>
    </div>
    </>
  );
};

export default App;
