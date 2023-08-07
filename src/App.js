import {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import DesignLearning from "./components/DesignLearning";
import Contacts from "./components/Contacts";
import Services from "./components/Services";
import InstructionalDesign from "./components/InstructionalDesign";

import srv1 from "./assets/srv1.png";
import srv2 from "./assets/srv2.png";
import srv3 from "./assets/srv3.png";
import srv4 from "./assets/srv4.png";
import srv5 from "./assets/srv5.png";
import srv6 from "./assets/srv6.png";
import srv7 from "./assets/srv7.png";
import srv8 from "./assets/srv8.png";
import srv9 from "./assets/srv9.png";
import srv10 from "./assets/srv10.png";
import srv11 from "./assets/srv11.png";
import srv12 from "./assets/srv12.png";
import srv13 from "./assets/srv13.png";
import srv14 from "./assets/srv14.png";
import srv15 from "./assets/srv15.png";
import srv16 from "./assets/srv16.png";
import LiveChat from "./components/live-chat/LiveChat";
import LiveChatAction from "./components/live-chat/LiveChatAction";
import ThemeAction from "./components/ThemeAction";


const listOne = [
    {img: srv1, title: 'Instructional Design', desc: 'We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.'},
    {img: srv2, title: 'ELEARNING DEVELOPMENT', desc: 'The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.'},
    {img: srv3, title: 'MOBILE LEARNING', desc: 'Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.'},
    {img: srv4, title: 'INSTRUCTOR-LED TRAINING', desc: 'We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.'},
]

const listTwo = [
    {img: srv5, title: 'Instructional Design', desc: 'We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.'},
    {img: srv6, title: 'ELEARNING DEVELOPMENT', desc: 'The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.'},
    {img: srv7, title: 'MOBILE LEARNING', desc: 'Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.'},
    {img: srv8, title: 'INSTRUCTOR-LED TRAINING', desc: 'We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.'},
]

const listThree = [
    {img: srv9, title: 'Instructional Design', desc: 'We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.'},
    {img: srv10, title: 'ELEARNING DEVELOPMENT', desc: 'The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.'},
    {img: srv11, title: 'MOBILE LEARNING', desc: 'Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.'},
    {img: srv12, title: 'INSTRUCTOR-LED TRAINING', desc: 'We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.'},
]

const listFour = [
    {img: srv13, title: 'Instructional Design', desc: 'We provide full-service instructional design consulting. From standalone lessons to the series of courses, no job is too large or too small for us.'},
    {img: srv14, title: 'ELEARNING DEVELOPMENT', desc: 'The eLearning products we create feature deep learner engagement and ensure high knowledge transfer.'},
    {img: srv15, title: 'MOBILE LEARNING', desc: 'Let us help you take your learning process anywhere your business may take you. Any place, any time, any device.'},
    {img: srv16, title: 'INSTRUCTOR-LED TRAINING', desc: 'We are experts at developing a classroom curriculum that meets your business needs and exceeds even your highest expectations.'},
]

function App() {
    const [visibilityLiveChat, toggleVisibilityLiveChat] = useState(false);
    function handleVisibilityLiveChat () {
        toggleVisibilityLiveChat(!visibilityLiveChat)
    }
  return (
    <div id="app" className="app">
        <Header/>
        <div className="appServicesContainer">
            <Services list={listOne} />
            <Services list={listTwo}/>
            <Services list={listThree}/>
            <Services list={listFour}/>
        </div>
        <DesignLearning/>
        <InstructionalDesign/>
        <Contacts/>
        <Footer/>
        {visibilityLiveChat && <LiveChat/>}
        <LiveChatAction onClick={handleVisibilityLiveChat}/>
        <ThemeAction/>
    </div>
  );
}

export default App;
