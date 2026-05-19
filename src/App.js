import './App.css';
import Copyright from './components/copyright';
import Footer from './components/footer';
import Header from './components/header';
import Whatsapp from './components/whatsapp';
import Homepage from './routes/homepage';

function App() {
  return (
    <div>
      <Header/>
      <Homepage/>
      <Whatsapp/>
      {/* <Footer/> */}
      {/* <Copyright/> */}
    </div>
  );
}

export default App;
