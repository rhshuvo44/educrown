import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Footer from './Component/Shared/Footer';
import NotFound from './Component/Shared/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
