import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Records from './components/Records';
import Cassettes from './components/Cassettes';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Header/>
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/records" element={<Records />} />
              <Route path="/cassettes" element={<Cassettes />} />
             </Routes>

         <Footer/>
         </BrowserRouter>
















     {/*} <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
    </div>
  );
}

export default App;
