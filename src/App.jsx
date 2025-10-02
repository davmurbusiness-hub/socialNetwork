import React, {useEffect, useState} from "react";
import './styles/app.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/index.js";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, isLoading}}>
      <BrowserRouter >
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>

  )


}



export default App;
