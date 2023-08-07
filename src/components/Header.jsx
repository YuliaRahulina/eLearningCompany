import './header.css'
import imgLogo from '../assets/logo.png'
import bgCar1 from '../assets/bg-car1.png'
import bgCar2 from '../assets/bg-car2.png'
import bgCar3 from '../assets/bg-car3.png'
import bgCar4 from '../assets/bg-car4.png'

function Header() {

    return (
        <header className="header">
            <div className="hero">
                <div className="selfContainer">
                    <div className="raw">
                        <div className="selfItem bg1"></div>
                        <div className="selfItem bg2"></div>
                        <div className="selfItem bg3"></div>
                        <div className="selfItem bg4"></div>
                    </div>
                    <div className="raw">
                        <div className="selfItem bg5"></div>
                        <div className="selfItem bg6"></div>
                        <div className="selfItem bg7"></div>
                        <div className="selfItem bg8"></div>
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
