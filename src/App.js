import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Line from './components/Line';
import Rockets from './components/Rockets';
import Dragons from './components/dragons/Dragons';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <Line />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
