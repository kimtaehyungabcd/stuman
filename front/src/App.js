import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Add from './component/Input_form';
import MyNavbar from './component/MyNavbar';
import './component/css.css';
import Input_marks from './component/Input_marks';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/input_form' element={<Add />} />
          <Route path='/input_marks' element={<Input_marks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
