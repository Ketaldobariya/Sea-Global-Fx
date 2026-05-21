import './App.css';
import Copyright from './components/copyright';
import Footer from './components/footer';
import Header from './components/header';
import Whatsapp from './components/whatsapp';
import Accountsection from './routes/account';
import ForexMarket from './routes/forexMarket';
import Homepage from './routes/homepage';
import Platforms from './routes/platforms';

function App() {
  return (
    <div>
      <Header/>
      <Platforms/>
      {/* <Accountsection/> */}
      {/* <ForexMarket/> */}
      {/* <Homepage/> */}
      <Whatsapp/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
