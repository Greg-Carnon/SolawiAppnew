import React, {useState} from "react";
import "./navigation.css";

const Navbar = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false) 

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div style={{width: "100%", height: "100px"}}>
            <nav>
                <h1 className="head-nav">SOLAWI Neufarn</h1>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}>  </div>
                    <div className={burger_class}>  </div>
                    <div className={burger_class}>  </div>
                </div>
            </nav>

            <div className={menu_class}>
                <div className="menu-item">
                    <div style={{padding: "10px"}}>Ernteplan</div>
                    <div style={{padding: "10px"}}>Pflanzen A-Z</div>
                    <div style={{padding: "10px"}}>Rezepte A-Z</div>
                    <div style={{padding: "10px"}} onClick={() => openInNewTab('https://www.solawineufarn.de/')}>Website</div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;