import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Pages/Home';
// import New from './Components/Pages/New';
import NewCakes from './Components/Pages/NewCakes';
// import Show from './Components/Pages/Show';
import ShowCake from './Components/Pages/ShowCake'
// import Edit from './Components/Pages/Edit';
import EditCakes from './Components/Pages/EditCakes'
import FourOFour from './Components/Pages/FourOFour';
import About from './Components/Pages/About'
import IndexBread from './Components/Pages/IndexBread';
import IndexCake from './Components/Pages/IndexCake';



export default function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<IndexBread />} />
            <Route path='/cakes' element={<IndexCake/>} />
            {/* <Route path='/products/new' element={<New />} /> */}
            <Route path='/cakes/new' element={<NewCakes />} />
            {/* <Route path='/products/:id' element={<Show />} /> */}
            <Route path='/cakes/:id' element={<ShowCake />} />
            {/* <Route path='/products/:id/edit' element={<Edit />} /> */}
            <Route path='/cakes/:id/edit' element={<EditCakes />} />
            <Route path='*' element={<FourOFour />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}