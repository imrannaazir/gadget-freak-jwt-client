import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import CheckOut from './components/CheckOut/CheckOut';
import Edit from './components/Edit/Edit';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Upload from './components/Upload/Upload';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<RequireAuth><Orders /></RequireAuth>} />
        <Route path='/upload' element={<RequireAuth><Upload /></RequireAuth>} />
        <Route path='/checkout/:_id' element={<RequireAuth><CheckOut /></RequireAuth>} />
        <Route path='/edit/:_id' element={<RequireAuth><Edit /></RequireAuth>} />
        <Route path='/login' element={<Login />} />

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
