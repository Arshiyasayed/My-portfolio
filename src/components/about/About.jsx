import "./about.css"
import Python from "../../img/python.png"


const About = () => {
    return (
        <div className="a">
        <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg" alt="" className="a-img"></img>
        </div>
        </div>
        <div className="a-right">
        <h1 className="a-title">My Interests</h1>
        <p className="a-sub">
        UI designers design all the screens that make up a digital user interface, as well as the
        individual elements featured on those screens. As such, they consider both the overall layout 
        of each individual screen and how all the separate screens fit together.
        </p>
        <p className="a-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae tellus ac leo tincidunt 
        blandit. Nulla facilisi. Praesent eu velit vitae est fringilla pharetra sit amet id ante. 
        Donec volutpat arcu purus, vitae sodales mauris dignissim nec. 
        </p>
        <div className="a-award">
            <img src={Python} alt="" className="a-award-img" />
            <div className="a-award-texts">
            <h4 className="a-award-title">Python Programming</h4>
            <p className="a-award-desc">
            Python is a popular general-purpose programming language. It is used in machine learning, web development, 
            desktop applications, and many other fields.
            </p>

            </div>
        </div>

        </div>

        </div>
    )
}

export default About;