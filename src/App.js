import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './GlobalStyle/GlobalStyle.js';
import { Route, Routes } from 'react-router-dom';
import InitialPage from "./Pages/InitialPage";
import InformationPage from "./Pages/InformationPage.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/information" element={<InformationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

