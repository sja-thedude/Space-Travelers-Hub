import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Line from './components/Line';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions/Missions';

function App() {
  return (
    <>
      <Navbar />
      <Line />
      <Routes>
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </>
  );
}

export default App;
