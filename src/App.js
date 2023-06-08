import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Header from './componets/Header';
import Destino from './Pages/Destino';
import Time from './Pages/Time';
import Tecnologia from './Pages/Tecnologia';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/destin' element={<Destino/>}/>
        <Route path='/flightCrew' element={<Time/>} />
        <Route path='/technologySection' element={<Tecnologia/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
