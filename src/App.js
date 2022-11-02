import as from './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ContactUs from './components/ContactUs/ContactUs';
import Services from './components/Services/Services';
import Facilities from './components/Facilities/Facilities';
import Groomers from './components/Groomers/Groomers';
import DaCode from './components/DaCode/DaCode';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={as.App}>
      <Header/>
      <Main/>
      <ContactUs/>
      <Services/>
      <Facilities/>
      <Groomers/>
      <DaCode/>
      <Footer/>
    </div>
  );
}

export default App;
