import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
