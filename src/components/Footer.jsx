import './footer.css'
import footerLogo from '../assets/footerLogo.png'
function Footer() {
    return (
        <footer className="footer">
            <div className="boxTop">
                <div className="boxTopContainer">
                    <img className="imgFooterLogo" src={footerLogo} alt=""/>
                    <div className="topContainer">
                        <a href="/">Home eLearning</a>
                        <a href="/">Price Quote Services</a>
                        <a href="/">Instructional Design</a>
                    </div>
                    <div className="topContainer">
                        <a href="/">eLearning Development</a>
                        <a href="/">Mobile Learning</a>
                        <a href="/">Product Training</a>
                    </div>
                    <div className="topContainer">
                        <a href="/">Custom eLearning</a>
                        <a href="/">eLearning for Retail</a>
                        <a href="/">eLearning Packages</a>
                        <a href="/">Contact</a>
                    </div>
                </div>
            </div>
            <div className="boxBottom">
                <p className="boxBottomText">Copyright © 2016 eLearning Company</p>
            </div>
        </footer>
    );
}

export default Footer;
