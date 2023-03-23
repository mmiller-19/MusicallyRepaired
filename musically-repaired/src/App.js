import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <p>Hello!</p>
    </BrowserRouter>
  );
}

export default App;
