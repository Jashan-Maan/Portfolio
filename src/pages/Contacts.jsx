import React, { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    notify();
  };

  const notify = () => {
    toast.success("Message Sent Successfully", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: { Bounce },
    });
  };

  return (
    <section
      id="Contacts"
      className="h-[80vh] w-full px-16 flex flex-col items-center justify-center gap-4 mt-20 text-white"
    >
      <div className="w-full flex flex-col items-start justify-center gap-4">
        <h1 className="text-4xl font-semibold">Get in Touch</h1>
        <p className="text-base text-gray-100">
          I'm always open to new opportunities and collaborations, Feel free to
          reach out!
        </p>
      </div>
      <div className="w-full flex items-center justify-start mt-10">
        <div className="w-1/2 h-full p-2">
          <form
            onSubmit={handleSubmit}
            className=" w-full flex flex-col h-full items-start justify-center gap-4"
            action=""
          >
            <input
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className=" outline-1 w-11/12 outline-gray-100 border-[1] border-gray-100 rounded py-0.5 px-3"
              type="text"
              placeholder="Name"
            />
            <input
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="outline-1 outline-gray-100 border-[1] w-11/12 border-gray-100 rounded py-0.5 px-3"
              type="email"
              placeholder="Email"
            />
            <div
              required
              className="w-full flex flex-col items-start justify-center gap-1.5 h-2/5"
            >
              <label htmlFor="Message">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                id="Message"
                className="outline-1 outline-gray-100 border-[1] w-11/12 h-full resize-none border-gray-100 rounded py-0.5 px-3"
                placeholder="Message"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-gray-200 text-black py-1.5 px-4 rounded font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer"
            >
              Send Message
            </button>
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
              transition={Bounce}
            />
          </form>
        </div>
        <div className="h-11/12 border-r-2 border-gray-200"></div>
        <div className="py-2 px-10 w-2/5 h-full flex flex-col items-start justify-center gap-4">
          <a
            className=" h-full flex items-center justify-start gap-2 hover:scale-105 transition-all duration-100 cursor-pointer"
            href="https://www.linkedin.com/in/jashan-maan/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-8" src="./LinkedIn.svg" alt="LinkedIn" />
            <span className="text-lg tracking-wide font-medium">linkedin</span>
          </a>
          <a
            className=" h-full flex items-center justify-start gap-2 hover:scale-105 transition-all duration-100 cursor-pointer"
            href="https://www.linkedin.com/in/jashan-maan/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-8" src="./X.svg" alt="X" />
            <span className="text-lg tracking-wide font-medium">X</span>
          </a>
          <a
            className="h-full flex items-center justify-start gap-2 hover:scale-105 transition-all duration-100 cursor-pointer"
            href="https://github.com/Jashan-Maan"
            target="_blank"
            rel="noreferrer"
          >
            <img className="h-8" src="./Github-Dark.svg" alt="github" />
            <span className="text-lg tracking-wide font-medium">GitHub</span>
          </a>
          <p className="w-full h-full flex items-center justify-start text-base tracking-wide font-medium text-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer">
            <a
              href="https://github.com/Jashan-Maan"
              target="_blank"
              rel="noreferrer"
            >
              sample420@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
