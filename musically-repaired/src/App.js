import './assets/css/App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
