import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Index';
import Page from './Components/Page/Page';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Page   />}  />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>  
    </>
  );
}

export default App;
