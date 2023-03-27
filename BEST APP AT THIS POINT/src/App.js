import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Counter from './components/Counter';
import NavbarOne from './components/Navbar';
import CardOne from './components/Card';
import Home from './components/Home';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
        <BrowserRouter>
          <NavbarOne />
          <div className="bodyStyle" >
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/counter" element={<Counter/>} />
              <Route path="/users" element={<CardOne/>} />
              <Route path="/form" element= {<TaskForm />} />
            </Routes>
          </div>
        </BrowserRouter>
      
  );
}

export default App;


