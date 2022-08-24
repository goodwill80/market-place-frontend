import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Registration from './pages/Registration';
import About from './pages/About';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={ <Layout /> }>

        {/* HOME PAGE */}
        <Route index element={ <Home /> } />

        {/* ABOUT PAGE */}
        <Route path='about' element={ <About />} />

         {/* PRODUCT PAGE */}
         <Route path='products' element={ <Products />} />

        {/* LOGIN PAGE */}
        <Route path='login' element={ <Login />} />

        {/* REGISTRATION PAGE */}
        <Route path='registration' element={ <Registration />} />

        {/* Catch all - replace with 404 component if you want */}
        <Route path='*' element={<Navigate to='/' replace />} />

      </Route>
    </Routes>
  );
}

export default App;
