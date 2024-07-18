import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Landing from './Pages/Landing';
import State from './Pages/State';
import EventHandling from './Pages/EventHandling';
import UseEffect from './Pages/UseEffect';
import Animasi from './Pages/Timer';
import FetchApi from './Pages/Fetch';
import ReactContext from './Pages/ReactContext';

function App () {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/landingpage" Component={Landing}/>
        <Route path="/state" Component={State}/>
        <Route path="/eventhandling" Component={EventHandling}/>
        <Route path="/UseEffect" element={<UseEffect/>} />
        <Route path="/Timer" element={<Animasi/>} />
        <Route path="/Fetch" element={<FetchApi/>} />
        <Route path="/reactContext" element={<ReactContext/>} />
      </Routes>
    </>
  )
}

export default App;
