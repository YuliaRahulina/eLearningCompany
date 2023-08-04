import './designLearning.css'
import imgMan from '../assets/imgMan.png'
function DesignLearning() {
    return (
        <div className="designLearningContainer">
            <div className="designLearning">
                <p className="designLearningBigText">We Design</p>
                <p className="designLearningBigText">Learning.</p>
                <p className="designLearningText">What We Can Do For You?</p>
                <button className="designLearningButton">Know more</button>
            </div>
            <img className="imgMan" src={imgMan} alt=""/>
        </div>
    );
}

export default DesignLearning;
