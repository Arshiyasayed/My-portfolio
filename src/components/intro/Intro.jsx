import "./intro.css"
import Me from "../../img/Me.jpeg"


const Intro = () => {
    return (
        
        <div className="i">    
        <div className="th">
            
        </div>    
            <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Arshiya Sayed</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Student</div>
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Python Developer</div>
                    </div>
                </div>
                <p className="i-desc">
                Passionate and enthusiast Software Developer and UI Designer aiming to secure a 
                responsible career opportunity to fully utilize my training and skills, while 
                making a significant contribution to the success of the company and personal 
                growth.
                </p>
            </div>
            </div>
            <div className="i-right">
            <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro;