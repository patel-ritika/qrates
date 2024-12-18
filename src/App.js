import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Records from './components/Records';
import Cassettes from './components/Cassettes';
import Stories from './components/Stories';
import Qrates from './components/Qrates';
import Artist from './components/Artist';
import Fans from './components/Fans';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Header/>
             <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/records" element={<Records />} />
              <Route path="/cassettes" element={<Cassettes />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/qrates curated" element={<Qrates Curated />} />
              <Route path="/artists" element={<Artist />} />
              <Route path="/fans" element={<Fans />} />
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
