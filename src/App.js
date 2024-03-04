import './styles/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Convene from './pages/convenePage/convene';
import Createaccount from './pages/Create/createAccount';
import Signin from './pages/Sign-in/signIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="./convene" element={<Convene />} />
        <Route exact path="./createAccount" element={<Createaccount />} />
        <Route exact path="./signIn" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;