import Modal from "./Modal.js";
import './App.css';
import React, { useState } from "react";
import Navbar from "./components/navigation.js";
import EinzelnesFeld from "./components/einzelnesFeld.js";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
   
   <div> 
      <Navbar />

   <div class="container">
    <div class="feld">
        <div class="kleinesFeld feldTeiler feldHintergrund">
            Feld 4
        </div>

        <div class="kleinesFeld feldTeilerGross feldHintergrund">
            Feld 3
        </div>

        <div class="kleinesFeld feldTeiler feldHintergrund">
            Feld 2
        </div>

        <div class="kleinesFeld feldTeiler feldHintergrund">
            Feld 1
        </div>

    </div>



    <div class="feld">
        <div class="kleinesFeld feldTeiler feldHintergrund">
            Feld 5
        </div>

        <div class="feldSechs feldHintergrund">
            Feld 6
        </div>

        <div class="tunnel feldHintergrund">
        Tunnel
        </div>

    </div>

    <div class="feldSpezial">
        
    <div class="ghostFeld feldTeiler ">
             
        </div>

        <div class="ghostFeld feldTeiler ">
             
        </div>
        
        <div class="kleinesFeld feldTeiler feldHintergrund">
            Feld 7
        </div>

        <div class="kleinesFeld feldTeiler feldHintergrund">
            Feld 8
        </div>
    </div>
    
    
        
    <Modal open={isOpen} close={() => setIsOpen(false)}>
    <iframe width="500" height="400" src="https://www.solawineufarn.de/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Modal>

        <div><EinzelnesFeld /></div>
    </div>

    </div>
  );
}

export default App;
