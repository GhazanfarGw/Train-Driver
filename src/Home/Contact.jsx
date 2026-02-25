import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Nav from './header';

function Contact () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState ('');
  const [number, setNumber] = useState ('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
        name: name,
        company: company,
        email: email,
        number: number,
        subject: subject,
        message: message,
    };
    emailjs.send(
      'service_twtnibd',
      'template_y2j68gl',
      templateParams,
      'm5W1vJH1hNlv0MfTj'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <>
    <div className='overflow-x-hidden'>
        <Nav/>
        <div className='text-black md:mt-32 pt-5 pb-5 mt-16 md:px-10 px-5 max-w-screen-lg mx-auto border border-[#0847F7] border-opacity-30'>
            <div className='py-10 mx-auto justify-center text-center'>
                <h1 className='md:text-5xl text-3xl font-semibold'>
                    Get In Touch
                </h1>
                <p className='md:pt-3'>
                    If you have any query feel free to ask Contact Us now to get the service We will reach you within a 24 hour.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                { !success && 
                <div className='mx-auto'>
                    <div className='md:grid md:grid-cols-2 gap-8'>
                        <input
                            className='border border-[#0847F7] border-opacity-30 py-2 w-full px-4 mx-auto'
                            placeholder='Full Name'
                            type="name"
                            id="name"
                            value={name}
                            required
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            className='border border-[#0847F7] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Company Name'
                            type="company"
                            id="company"
                            value={company}
                            required
                            onChange={(event) => setCompany(event.target.value)}
                        />
                        <input
                            className='border border-[#0847F7] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Email Address'
                            type="email"
                            id="email"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            className='border border-[#0847F7] border-opacity-30 py-2 w-full px-4 mx-auto mt-8 md:mt-0'
                            placeholder='Phone Number'
                            type="number"
                            id="number"
                            value={number}
                            required
                            onChange={(event) => setNumber(event.target.value)}
                        />
                    </div>
                    <input
                        className='border border-[#0847F7] border-opacity-30 py-2 w-full px-4 mx-auto mt-8'
                        placeholder='Subject'
                        type="subject"
                        id="subject"
                        value={subject}
                        required
                        onChange={(event) => setSubject(event.target.value)}
                    />
                    <textarea
                        className='border border-[#0847F7] border-opacity-30 pb-52 py-5 w-full px-4 mx-auto mt-8 overflow-y-hidden'
                        placeholder='Message'
                        type="message"
                        id="message"
                        value={message}
                        required
                        onChange={(event) => setMessage(event.target.value)}
                    />
                    <div className='items-center'>
                        <button className='border border-[#0847F7] px-10 tracking-wider py-2 md:mt-10 mt-5 text-[#0847F7]' type="submit">
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </div>}
                {success && <p className='justify-center mx-auto text-center pt-10 font-semibold text-[#0847F7]'>Email sent successfully!</p>}
            </form>
        </div>
    </div>
    </>
  );  
}

export default Contact;