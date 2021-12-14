import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Line from './components/Line';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="MainApp">
      <Navbar />
      <Line />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
