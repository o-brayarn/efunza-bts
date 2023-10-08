import Header from './components/header/Header';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import About from './pages/about/About';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faUser, faLock, faEye, faInbox } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

library.add(fab, faCheckSquare, faCoffee, faUser, faLock, faEye, faInbox);

 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
