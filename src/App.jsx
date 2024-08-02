import React, { useState } from "react";
import LogIn from "./views/LogIn.jsx";
import HomePage from "./views/HomePage.jsx";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (userId, password) => {
    if (userId && password) {
      setIsLoggedIn(true);
    }
  };

  return <>{!isLoggedIn ? <LogIn onLogin={handleLogin} /> : <HomePage />}</>;
};

export default App;
