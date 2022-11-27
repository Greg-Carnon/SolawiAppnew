import React from 'react'
import './App.css';
import "./einzelnesfeld.css";
import { Link, Routes, Route} from "react-router-dom";
import Feldeins from './feldeins.js';
import Feldzwei from './feldzwei';
import Felddrei from './felddrei';
import Feldvier from './feldvier';
import Feldfunf from './feldfunf';
import Feldsechs from './feldsechs';
import Feldsieben from './feldsieben';
import Feldacht from './feldacht';
import Feldneun from './feldneun';
import Feldzehn from './feldzehn';
import Tunnel from './Tunnel';


const Home = () => {
  return (
    <div>
        <div>
            <h2 className='headline'>FELDÜBERSICHT
            </h2>
        </div>

        <div>
             <p>Herzlich Willkommen in der Solawi Neufarn App. Mit dieser App findest du zu jeder unserer 
                Pflanzen eine Beschreibung, Ernteanleitung & passende Rezepte.
                Klicke auf ein Feld!
            </p>
        </div>

        <div class="containeruber">
            <div class="feld">
                <Link className='verlinkung2' to="/feldsieben">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 7
                </div>
                </Link>

                <Link className='verlinkung2' to="/feldacht">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 8
                </div>
                </Link>

                <Link className='verlinkung2' to="/feldneun">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 9
                </div>
                </Link>

                <Link className='verlinkung2' to="/feldzehn">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 10
                </div>
                </Link>
            </div>



            <div class="feld">
                <Link className='verlinkung2' to="/feldfunf">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 5
                </div>
                </Link>

                <Link className='verlinkung2' to="/feldsechs">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 6
                </div>
                </Link>

                <Link className='verlinkung2' to="/tunnel">
                <div class="tunnel feldHintergrund">
                Tunnel
                </div>
                </Link>
            </div>

            <div class="feldSpezial">
                
                <Link className='verlinkung2' to="/feldvier">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 4
                </div>
                </Link>
                
                <Link className='verlinkung2' to="/felddrei">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 3
                </div>
                </Link>

                <Link className='verlinkung2' to="/feldzwei">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 2
                </div>
                </Link>

                <Link className='verlinkung2' to="/feldeins">
                <div class="kleinesFeld feldTeiler feldHintergrund">
                    Feld 1
                </div>
                </Link>


            </div>
        </div>


      

        <Routes>
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
  )
}

export default Home;