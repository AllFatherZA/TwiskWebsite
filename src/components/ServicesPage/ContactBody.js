import '../../contactform.css'
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import FormImage from '../images/galaxycontactform.png'





export const Contact=()=>{
  const form = useRef();
  const [status,setStatus] =useState({});
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_service', 'template_w9xqpvc', form.current, 'bZMz1yOYejFgN-TxJ')
      .then((result) => {
          console.log(result.text);
          setStatus({success:true,message:'Message sent successfully'});
      }, (error) => {
          console.log(error.text);
          setStatus({success:false,message:'Something went wrong,please try again later'});
      });
  };

 return(
    <>
      <div className='contact-container'>
        <form ref={form} onSubmit={sendEmail} className='contact-left'>
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr/>
          </div>
        <label className='contact-label'>Name</label>
        <input type="text" name="user_name" className='contact-inputs'/>
        <label className='contact-label'>Email</label>
        <input type="email" name="user_email" className='contact-inputs'/>
        <label className='contact-label'>Phone</label>
        <input type='tel' name='user_phone'className='contact-inputs'/>
        <label className='contact-label'>Message</label>
        <textarea name="message" className='contact-inputs'/>
        <input type="submit" value="Send" />
        {
                                  status.message&&
                                      <p className={status.success===false? "danger":"success"}>{status.message}</p>
        }
        </form>

        <div className="contact-right">
          <img src={FormImage} alt='right side' className='contact-image'/>
        </div>
      </div>
    </>
    );

}

export default Contact