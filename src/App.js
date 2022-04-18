import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Custom Theme
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

//Pages
import { HomePage, FavoritesPage } from './pages'
import { listDevelopers } from "./redux/developer/developer.actions";

import { useDispatch } from 'react-redux'
import { listCurrencies } from "./redux/currency/currency.actions";


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listDevelopers())
    dispatch(listCurrencies())
  }, [
    dispatch
  ])
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
