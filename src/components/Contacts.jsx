import './contacts.css'
function Contacts() {
    return (
        <div className="contactsContainer">
            <p className="contactsMainTitle">Talk To Us About Your Project</p>
            <p className="contactsTitle">We will never send spam or add you to a mailing list</p>
            <input className="contactsInput" placeholder="Enter your Name" type="text"/>
            <input className="contactsInput" placeholder="Enter your Email Address" type="email"/>
            <textarea className="textarea" placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea>
            <button className="buttonContacts">Send</button>
        </div>
    );
}

export default Contacts;
