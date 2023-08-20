
import Register from './Components/UserRegister';
import UserLogin from './Components/UserLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserRegister from './Components/UserRegister';

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLogin/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
