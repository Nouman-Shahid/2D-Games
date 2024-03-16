import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Gamee from './Components/Game/Gamee';
import Homee from './Components/Home/Homee';
import About from './Components/About/About';
import Shop from './Components/Shop/Shopp';
import Level from './Components/Level/Level';

function App() {
  return (
    <>
<Router>
      <Routes>
        <Route path="/" element={<Homee   />}  />
        <Route path="/game" element={<Gamee />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/level" element={<Level />} />
      </Routes>
    </Router>      
    </>
  );
}

export default App;
