
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import svg from '../assets/contact.png';

function Contact({ setShowPopup }) {
  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');
  const form = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!nameInputValue || !emailInputValue || !messageInputValue) {
      toast.error('Please fill in all fields', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }

    emailjs
      .sendForm('service_wjqdv5i', 'template_zrmsjt8', form.current, {
        publicKey: 'fMJACP8tUIDVXg5AP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          setShowPopup(true);
          toast.success('Message sent', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          setNameInputValue('');
          setEmailInputValue('');
          setMessageInputValue('');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setShowPopup(false);
          toast.error('Failed to send message', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      );
  };

  return (
    <section id='contact' className='mt-[30px]'>
      <h2 className='contact-heading md:text-[25px] text-white font-bold text-center'>
        Get in touch
      </h2>
      <div className='flex flex-col items-center lg:flex-row lg:justify-around lg:items-center lg:mx-[50px] mt-[30px] text-white '>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='contact w-[80%] flex flex-col lg:w-[35%]'
        >
          <label className='text-[#389db6] font-bold text-sm mt-[20px] block mb-[5px]'>
            Name
          </label>
          <input
            type='text'
            name='user_name'
            value={nameInputValue}
            onChange={(e) => setNameInputValue(e.target.value)}
            className={`rounded-md bg-transparent outline-none border-[2px] ${nameInputValue ? 'gradient-border' : 'border-white'}`}
          />
          <label className='text-[#389db6] font-bold text-sm mt-[20px] block mb-[5px]'>
            Email
          </label>
          <input
            type='email'
            name='user_email'
            value={emailInputValue}
            onChange={(e) => setEmailInputValue(e.target.value)}
            className={`rounded-md bg-transparent outline-none border-[2px] ${emailInputValue ? 'gradient-border' : 'border-white'}`}
          />
          <label className='text-[#389db6] font-bold text-sm mt-[20px] block mb-[5px]'>
            Message
          </label>
          <textarea
            name='message'
            rows={'3'}
            value={messageInputValue}
            onChange={(e) => setMessageInputValue(e.target.value)}
            className={`rounded-md bg-transparent outline-none border-[2px] ${messageInputValue ? 'gradient-border' : 'border-white'}`}
          />
          <button
            className='mt-[20px] bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none'
            style={{ border: 'none' }}
          >
            Send Message
          </button>
        </form>
        <img src={svg} alt='thank-you' className='w-[80%] lg:w-[40%]' />
      </div>
    </section>
  );
}

export default Contact;
