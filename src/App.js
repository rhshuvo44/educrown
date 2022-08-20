
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import SingUp from './Component/LogIn/SingUp';
import Parches from './Component/Parches/Parches';
import Footer from './Component/Shared/Footer';
import Navbar from './Component/Shared/Navbar';
import NotFound from './Component/Shared/NotFound';
import RequireAuth from './Component/Shared/RequireAuth';

function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signUp" element={<SingUp/>} />
        <Route
            path="/parches/:id"
            element={
              <RequireAuth>
                <Parches />
              </RequireAuth>
            }
          />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
