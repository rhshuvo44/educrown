import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import SingUp from './Component/LogIn/SingUp';
import Footer from './Component/Shared/Footer';
import NotFound from './Component/Shared/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SingUp/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
