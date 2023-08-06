import './ThemeAction.css'
import iconTheme from "../assets/iconTheme.png"

function ThemeAction() {
    function themeAction() {
        const element = document.getElementById("app")
        element.classList.toggle("darkTheme");
    }
    return (
        <button onClick={themeAction} className="themeAction">
            <img className="iconThemeChat" src={iconTheme} alt=""/>
        </button>
    );
}

export default ThemeAction;
