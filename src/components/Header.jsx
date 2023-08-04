import './header.css'
import imgLogo from '../assets/logo.png'

function Header() {

    return (
        <header className="header">
            <div className="hero">
                <div className="cotainer">
                    <div className="raw">
                        <div className="item bg1"></div>
                        <div className="item bg2"></div>
                        <div className="item bg3"></div>
                        <div className="item bg4"></div>
                    </div>
                    <div className="raw">
                        <div className="item bg5"></div>
                        <div className="item bg6"></div>
                        <div className="item bg7"></div>
                        <div className="item bg8"></div>
                    </div>
                </div>
            </div>
            <div className="greenBar">
                <div className="green"></div>
            </div>
            <nav className="nav">
                <div className="navElements">
                    <img className="imgLogo" src={imgLogo} alt=""/>
                    <div className="navTextContainer">
                        <a href="/">Home</a>
                        <a href="/">Services</a>
                        <a href="/">Instructional Design</a>
                        <a href="/">eLearning Development</a>
                        <a href="/">eLearning Price Quote</a>
                        <a href="/">eLearning Packages</a>
                        <a href="/">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
