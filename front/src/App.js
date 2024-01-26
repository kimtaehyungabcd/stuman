import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Add from './component/Input_form';
import MyNavbar from './component/MyNavbar';
import './component/css.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/input_form' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
