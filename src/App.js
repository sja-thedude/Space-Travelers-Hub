import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Line from './components/Line';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <Navbar />
      <Line />
      <Routes>
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
