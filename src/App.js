import React, {useEffect, useState} from "react";
import './styles/style.css'
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Login from './pages/Login'
import ClassChoose from "./pages/ClassChoose";
import {publicRoutes, privateRoutes} from "./routes";
import AppRoutes from "./components/AppRoutes";
import {AuthContext} from "./context";

function App() {

    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
     }, []);

  return (
      <AuthContext.Provider value={{
          isAuth,
          setIsAuth
      }}>
          <BrowserRouter>
              <AppRoutes/>
          </BrowserRouter>
      </AuthContext.Provider>
  );
}

export default App;
