import './liveChat.css'
// import liveChat1 from '../../assets/liveChat1.png'
// import liveChat2 from '../../assets/liveChat2.png'
import liveChat7 from '../../assets/liveChat7.png'
import liveChat8 from '../../assets/liveChat8.png'

function LiveChat() {
    return (
        <div className="liveChat">
            <header className="liveChatHeader">
                <img className="liveChatImg" src={liveChat7} alt=""/>
                <div>
                    <p className="liveChatHeaderMainText">eLearning company</p>
                    <p className="liveChatHeaderText">Operator is online</p>
                </div>
                <img className="liveChatImg" src={liveChat8} alt=""/>
            </header>
            <div className="liveChatContent">
                <p className="liveChat1">Today</p>
                <p className="liveChat2">Hi. How can I help you?</p>
            </div>
            <div className="liveChatInputContainer">
                <input className="liveChatInput" placeholder="Your message..." type="text"/>
                <div className="liveChatImgs">
                    <div className="liveChatImg1"></div>
                    <div className="liveChatImg2"></div>
                </div>
            </div>
        </div>
    );
}

export default LiveChat;
