import '../../App.css'
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';





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
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone</label>
      <input type='tel' name='user_phone'/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      {
                                status.message&&
                                    <p className={status.success===false? "danger":"success"}>{status.message}</p>
                            }
    </form>
    </>
    );

}

export default Contact