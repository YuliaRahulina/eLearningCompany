import './liveChatAction.css'
import iconChat from "../../assets/iconChat.png"

function LiveChatAction(props) {
    return (
        <button onClick={props.onClick} className="liveChatAction">
            <img className="iconChat" src={iconChat} alt=""/>
        </button>
    );
}

export default LiveChatAction;
