import './App.css';
import Copyright from './components/copyright';
import Footer from './components/footer';
import Header from './components/header';
import Whatsapp from './components/whatsapp';
import ForexMarket from './routes/forexMarket';
import Homepage from './routes/homepage';

function App() {
  return (
    <div>
      <Header/>
      <ForexMarket/>
      {/* <Homepage/> */}
      <Whatsapp/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
