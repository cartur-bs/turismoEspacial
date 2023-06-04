import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Header from './componets/Header';
import Destino from './Pages/Destino';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Home/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/destin' element={<Destino/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
