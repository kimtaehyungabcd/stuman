import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Add from './component/Input_form';
import Input_marks from './component/Input_marks';
import Listing from './component/Listing';
import ListingMarks from './component/Listing_marks';
import MyNavbar from './component/MyNavbar';
import Query from './component/Query';
import './component/css.css';
import Year from './component/Year';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/input_form' element={<Add />} />
          <Route path='/Listing_details' element={<Listing/>} />
          <Route path='/Listing_marks' element={<ListingMarks/>} />
          <Route path='/query' element={<Query />}  />
          <Route path='/input_marks' element={<Input_marks />} />
          <Route path='/year' element={<Year />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
