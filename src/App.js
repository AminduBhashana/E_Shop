import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';
import { Routes ,Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
