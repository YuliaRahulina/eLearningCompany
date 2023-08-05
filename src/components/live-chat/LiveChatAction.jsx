import './liveChatAction.css'
import iconChat from "../../assets/iconChat.png"

function LiveChatAction() {
    return (
        <button className="liveChatAction">
            <img className="iconChat" src={iconChat} alt=""/>
        </button>
    );
}

export default LiveChatAction;
