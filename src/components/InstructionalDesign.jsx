import './instructionalDesign.css'
import inDsn1 from '../assets/inDsn1.png'
import inDsn2 from '../assets/inDsn2.png'
import checkIcon from '../assets/checkIcon.png'
function InstructionalDesign() {
    return (
        <div className="instructionalDesign">
            <p className="instructionalDesignMainTitle">Instructional Design</p>
            <div className="instructionalDesignElement">
                <img className="imgInDsn" src={inDsn1} alt=""/>
                <div className="instructionalDesignInfo">
                    <p className="instructionalDesignTitle">We know learning inside and out </p>
                    <p className="instructionalDesignDesc">Our instructional design team will work hard to align your business goals with your learning objectives to ensure the training supports your business strategies.</p>
                    <div className="instructionalDesignItem">
                        <img className="checkIcon" src={checkIcon} alt=""/>
                        <p>Each project requires a unique approach, and we are ready for the challenge </p>
                    </div>
                    <div className="instructionalDesignItem">
                        <img className="checkIcon" src={checkIcon} alt=""/>
                        <p>Our expertise in the training and development industry will make your project a succes </p>
                    </div>
                    <div className="instructionalDesignItem">
                        <img className="checkIcon" src={checkIcon} alt=""/>
                        <p>Your goals and deadlines are our priority</p>
                    </div>
                </div>
            </div>
            <div className="instructionalDesignElement">
                <div className="instructionalDesignInfo">
                    <p className="instructionalDesignTitle">Our clients love the work we do </p>
                    <p className="instructionalDesignDesc">We pride ourselves on developing training strategies with the learners in mind, ensuring your time and resources are well utilized.</p>
                    <div className="instructionalDesignItem">
                        <img className="checkIcon" src={checkIcon} alt=""/>
                        <p>We start each project with a careful analysiys of your learning needs</p>
                    </div>
                    <div className="instructionalDesignItem">
                        <img className="checkIcon" src={checkIcon} alt=""/>
                        <p>We constantly look for ways to save your time and money while exceeding your expectations</p>
                    </div>
                    <div className="instructionalDesignItem">
                        <img className="checkIcon" src={checkIcon} alt=""/>
                        <p>We don't stop working until you are satisfied with the
                            products we deliver</p>
                    </div>
                </div>
                <img className="imgInDsn" src={inDsn2} alt=""/>
            </div>
        </div>
    );
}

export default InstructionalDesign;
