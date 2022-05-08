import logo from './logo.svg';
import './App.css';
import Nav from './layout/nav';
import Store from './pages/store';
import Home from './pages/home'; 
import Data from './pages/data'; 
import Analysis from './pages/analysis'; 
import Resluts from './pages/resluts'; 
import Details from './pages/details'; 
import UploadFile from './pages/Uploadfile';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
   
  return  (
<BrowserRouter>
  <Nav/>  

    <Routes>
      <Route path="/Home" element={<Home />}> </Route>

      <Route path="/store" element={<Store />}/>
    <Route path="/data" element={<Data />}/>
      <Route path="/analysis" element={<Analysis />}/>
      <Route path="/resluts" element={<Resluts />}/>
      <Route path="/details" element={<Details />}/>
  </Routes>
  <Routes>
          <Route path="/" element={<UploadFile />}> </Route>

  </Routes>
</BrowserRouter>

  )

}

export default App;
