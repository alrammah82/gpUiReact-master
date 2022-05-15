import logo from './logo.svg';
import './App.css';
import Nav from './layout/nav';
import Store from './pages/store';
import Home from './pages/home'; 
import Data from './pages/data'; 
import Analysis from './pages/analysis'; 
import Resluts from './pages/resluts'; 
import Details from './pages/details'; 

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './pages/landing_page';
import Header from './components/header';

function App() {
   
  return  (
<BrowserRouter>
<Header />
    <Routes>
      <Route path="/Home" element={<LandingPage />}> </Route>

          <Route path="/"  element={<LandingPage />}> </Route>

      <Route path="/details" element={<Details test={"hi"}/>}/>
  </Routes>
</BrowserRouter>

  )

}

export default App;
