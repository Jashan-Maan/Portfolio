import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    toast.success("Message Sent Successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="Contacts"
      className="w-full min-h-10/12 flex flex-col items-center justify-center py-20 px-6 sm:px-10 lg:px-16 text-white "
    >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="w-full max-w-6xl text-center lg:text-left mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-200 drop-shadow-md">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-8">
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full bg-slate-800 border border-slate-700 rounded-md p-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="mt-4 shadow-lg transform transition-all duration-300 bg-blue-600 px-7 py-3 rounded-full text-lg font-semibold text-white hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/50 self-start"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-2">Find me on</h3>
          <a
            href="https://www.linkedin.com/in/jashan-maan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-md transition-colors duration-300 hover:bg-slate-800"
          >
            <FaLinkedin className="text-4xl text-blue-500" />
            <span className="text-lg">LinkedIn</span>
          </a>
          <a
            href="https://github.com/Jashan-Maan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-md transition-colors duration-300 hover:bg-slate-800"
          >
            <FaGithub className="text-4xl" />
            <span className="text-lg">GitHub</span>
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-3 rounded-md transition-colors duration-300 hover:bg-slate-800"
          >
            <FaXTwitter className="text-4xl" />
            <span className="text-lg">Twitter / X</span>
          </a>
          <a
            href="mailto:jashanmaan521@gmail.com"
            className="flex items-center gap-4 p-3 rounded-md transition-colors duration-300 hover:bg-slate-800"
          >
            <HiOutlineMail className="text-4xl text-amber-300" />
            <span className="text-lg">jashanmaan521@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
