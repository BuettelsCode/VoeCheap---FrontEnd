import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './GlobalStyle/GlobalStyle.js';
import { Route, Routes } from 'react-router-dom';
import InitialPage from "./Pages/InitialPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<InitialPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

