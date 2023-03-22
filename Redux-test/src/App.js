import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Counter from './components/Counter';
import NavbarOne from './components/Navbar';
import CardOne from './components/Card';
import Home from './components/Home';

const App = () => {
  return (
        <BrowserRouter>
          <NavbarOne />
          <div className="bodyStyle" >
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/counter" element={<Counter/>} />
              <Route path="/users" element={<CardOne/>} />
            </Routes>
          </div>
        </BrowserRouter>
      
  );
}

export default App;


