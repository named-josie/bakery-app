import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
import New from './Components/Pages/New';
import NewCakes from './Components/Pages/NewCakes';
import Show from './Components/Pages/Show';
import ShowCake from './Components/Pages/ShowCake'
import Edit from './Components/Pages/Edit';
import EditCakes from './Components/Pages/EditCakes'
import FourOFour from './Components/Pages/FourOFour';
import About from './Components/Pages/About'
import IndexBread from './Components/Pages/IndexBread';
import IndexCake from './Components/Pages/IndexCake';
import Menu from './Components/Pages/Menu';
import {useState} from 'react';




export default function App() {
  const [item, setItem] = useState(0);
  

  return (
    <div className='App'>
      <Router>
        <NavBar item={item} />
       
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/breads' element={<IndexBread setItem={setItem} />} />
            <Route path='/menu' element={<Menu setItem={setItem} />} />
            <Route path='/cakes' element={<IndexCake setItem={setItem}/>} />
            <Route path='/breads/new' element={<New />} />
            <Route path='/cakes/new' element={<NewCakes />} />
            <Route path='/breads/:id' element={<Show />} />
            <Route path='/cakes/:id' element={<ShowCake />} />
            <Route path='/breads/:id/edit' element={<Edit />} />
            <Route path='/cakes/:id/edit' element={<EditCakes />} />
            <Route path='*' element={<FourOFour />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}