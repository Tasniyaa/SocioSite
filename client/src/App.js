import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { LoginPage } from 'scenes/loginPage/LoginPage.jsx';
import { Widget } from 'scenes/widget/Widget.jsx';
import { Navbar } from "scenes/navbar/Navbar.jsx";
import { HomePage } from "scenes/homePage/HomePage.jsx";
import { ProfilePage } from "scenes/profilePage/ProfilePage.jsx";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";


function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));
  
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/profile/:userI" element={<ProfilePage/>} />          
          </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;