import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import About from './components/About/About';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import RoomDetails from './components/RoomDetails/RoomDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/booking' element={<RequireAuth>
          <Booking/>
        </RequireAuth>}></Route>
        <Route path='roomdetails/:roomId' element={<RoomDetails/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
