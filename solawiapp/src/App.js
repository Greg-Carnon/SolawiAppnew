
import Home from './components/Home';
import Navbar from "./components/navigation.js";
import { Routes, Route} from "react-router-dom";
import Feldeins from './components/feldeins';
import Feldzwei from './components/feldzwei';
import Felddrei from './components/felddrei';
import Feldvier from './components/feldvier';
import Feldfunf from './components/feldfunf';
import Feldsechs from './components/feldsechs';
import Feldsieben from './components/feldsieben';
import Feldacht from './components/feldacht';
import Feldneun from './components/feldneun';
import Feldzehn from './components/feldzehn';
import Tunnel from './components/Tunnel';


function App() {
  return (

    <div>
            <div> 
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/feldeins" element={<Feldeins />} />
                <Route path="/feldzwei" element={<Feldzwei />} />
                <Route path="/felddrei" element={<Felddrei />} />
                <Route path="/feldvier" element={<Feldvier />} />
                <Route path="/feldfunf" element={<Feldfunf />} />
                <Route path="/feldsechs" element={<Feldsechs />} />
                <Route path="/feldsieben" element={<Feldsieben />} />
                <Route path="/feldacht" element={<Feldacht />} />
                <Route path="/feldneun" element={<Feldneun />} />
                <Route path="/feldzehn" element={<Feldzehn />} />
                <Route path="/tunnel" element={<Tunnel />} />
            </Routes>
    </div>
   
  );
}

export default App;
