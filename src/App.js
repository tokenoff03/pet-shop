import as from './App.module.css';
import Header from './components/Header/Header';

import ContactUs from './components/ContactUs/ContactUs';
import Services from './components/Services/Services';
import Facilities from './components/Facilities/Facilities';

import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPages from './components/MainPages/MainPages';
import SignIn from './components/SingIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter >
      <div className={as.App}>
        <Header/>
        <Routes >
          <Route path='/' element={<MainPages/>}/>
          <Route path='/about' element={<ContactUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/facilities' element={<Facilities/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
