import './App.css';
import Home from './Home';
import Edit from './Edit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './View';


function App() {



  return (

    <>

     

      <BrowserRouter>

        <Routes>

          <Route path='/' Component={Home} />
          <Route path='/edit/:id' Component={Edit} />
          <Route path='/view/:id' Component={View} />


        </Routes>


      </BrowserRouter>

    </>

  );
}

export default App;
