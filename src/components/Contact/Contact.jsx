import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef()
  const [emailSent, setEmailSent] = useState(false);

  const handleEmail = (e)=>{
    e.preventDefault();
    emailjs 
    .sendForm("service_286z3iq", "template_sk6j0x5",
      form.current,
      "ZWJPXqQ9Kmyr_Yljp"
    ).then(()=>{
      setEmailSent(true);
      form.current.reset();
      toast.success("Message sent successfully!",{
        position: "top-right",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',

      });
    },
    (error)=>{
      toast.error("Error sending Message.", error);
      toast.error("Failed to send message. Please try again.",
        {
        position: "top-right",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
        }
      )
    }
  )
  }
  return (
   <section
     id="contact"
     className='flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]'
  >
    <ToastContainer />
     <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">Contact</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">
             I’d love to hear from you — feel free to reach out with opportunities, questions, or just to connect!
            </p>
          </div>
        <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
          <h3 className='text-xl font-semibold text-white text-center'>
            Contact with ME
          </h3>

          <form 
          ref={form}
          onSubmit={handleEmail}
          className='mt-4 flex flex-col space-y-4'>
            <input 
            type='email' name='user_email' placeholder='Your Email' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus-outline-none focus:border-purple-500' >
            </input>
            <input 
            type='text' name='user_name' placeholder='Your Name' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus-outline-none focus:border-purple-500' >
            </input>
            <input 
            type='text' name='subject' placeholder='Subject' required
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus-outline-none focus:border-purple-500' >
            </input>

            <textarea
            type='message' name='Message' row='4'
            className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus-outline-none focus:border-purple-500' >
            </textarea>
{/* 
            <button type= 'submit'
            className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition' >
              Send
            </button> */}
<button 
type='submit'
className="w-full py-3 bg-purple-600 hover:bg-pink-500 font-semibold rounded-md text-white hover:opacity-90 transition">
            Send
           </button>

          </form>
        </div>

   </section>
  )
}

export default Contact
