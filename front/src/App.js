import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './component/Add';
import Homepage from './component/Homepage';
import MyNavbar from './component/MyNavbar';
import './component/css.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
