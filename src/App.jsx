import { Routes, Route } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home';


function App() {
  return (
    <Routes>
        <Route path="/Home" element={<Home/>} />
      <Route path="/" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;
