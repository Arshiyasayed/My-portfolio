import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import Github from "../../img/githubCat.png"
import { useRef } from "react"
//import emailjs from 'emailjs-com';



const Contact = () =>{

    const formRef =useRef()

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     emailjs.sendForm('service_8uxetpy', 'template_0m16ahs', formRef.current, 'tqV_EKR6B2CRjyDcI')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);      });

    // }

    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                    <div className="c-info-item">
                    <a href="https://github.com/Arshiyasayed" target="_blank" rel="noreferrer" className="a-g">
                            <img
                                src={Github}
                                alt="phone"
                                className="c-icon"/> Github</a>
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Phone}
                                alt="phone"
                                className="c-icon"/> +91 9606719405
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt="phone"
                                className="c-icon"/><a href="mailto:arshiyasayed3000@gmail.com" className="a-g"> arshiyasayed3000@gmail.com</a>.
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt="phone"
                                className="c-icon"/> #56<sup>th</sup> Street, Mangalore, Karnataka, India
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story? </b> Get in Touch. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae tellus ac leo tincidunt 
                        blandit. Nulla facilisi.
                    </p>
                    <form ref={formRef} /*onSubmit={handleSubmit}*/>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact