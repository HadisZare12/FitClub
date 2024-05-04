import React,{useRef} from 'react'
import './join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_3d1r3fn', 'template_bgrkyxr', form.current, 'Cl1p_d8BSpViwf3ba')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
   <div className="Join" id="join-us">
    <div className="left-j">
        <hr/>
        <div>
            <span className="stroke-text"> READY TO</span>
            <span>LEVEL UP</span>
        </div>
        <div>
            <span>YOUR BODY</span>
            <span className="stroke-text">WITH US?</span>
        </div>
    </div>
    <div className="join-r">
       <form ref={form} className="email-container" onSubmit={sendEmail}>
         <input type="text" name="user_email" placeholder="Enter your Email address" />
         <button className="btn btn-j">Join Now</button>
       </form>
    </div>
   </div>
  )
}

export default Join