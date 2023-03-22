import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './components/NaviBar'
// import Footer from './components/Footer'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from './pages/home';
import {Users} from './pages/users';
import {About} from './pages/about';


function App() {
  return (
    <>
    <Router>
      <Navibar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>

      {/* <Footer/> */}
    </>
  );
}

export default App;
