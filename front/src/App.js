import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Add from './component/Input_form';
import Input_marks from './component/Input_marks';
import Listing from './component/Listing';
import ListingMarks from './component/Listing_marks';
import MyNavbar from './component/MyNavbar';
import Query from './component/Query';
import Sem from './component/Sem_sem';
import Year from './component/Year';
import './component/css.css';
import Both from './component/Both_enroll'
import Result_enroll from './component/Result_enroll'
import Personal_enroll from './component/Personal_enroll'
import Pass_month from './component/Pass_month'
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
          <Route path='/pass_mon' element={<Pass_month />} />
          <Route path='/sem' element={<Sem/>}/>
          <Route path='/both' element={<Both/>}/>
          
          <Route path='/Personal_enroll' element={<Personal_enroll/>}/>
          <Route path='/Result_enroll' element={<Result_enroll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
