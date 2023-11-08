import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './GlobalStyle/GlobalStyle.js';
import { Route, Routes } from 'react-router-dom';
import InitialPage from "./Pages/InitialPage";
import InformationPage from "./Pages/InformationPage.js";
import AllPacks from "./Pages/AllPacks.js";
import { UserProvider } from "./contexts/ContextApi.js";
import TeamPage from "./Pages/TeamPage.js";
import CommonPage from "./Pages/CommonPage.js";
import ContactPage from "./Pages/ContactPage.js";

export default function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/allpacks" element={<AllPacks/>}/>
            <Route path="/teampage" element={<TeamPage/>}/>
            <Route path="/commonpage" element={<CommonPage/>}/>
            <Route path="/contactpage" element={<ContactPage/>}/>
            <Route path="/information" element={<InformationPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

