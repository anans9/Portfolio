import React, { useState } from "react";
import { motion } from "framer-motion";
import { GrContact } from "react-icons/gr";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const timelineVariants = {
  initial: { 
    opacity: 0, 
    x: -50 
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
  
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
  
    try {
      await axios.post("/", params, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
  
      toast.success("Message Sent Successfully!");
  
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden text-gray-900 dark:text-gray-200 mb-20"
    >
      <Toaster />

      <motion.div
        className="flex flex-row items-center text-3xl sm:text-4xl font-bold text-light dark:text-dark mb-6"
        variants={timelineVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <GrContact />
        <span className="ml-4">Contact</span>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Get In Touch
        </h2>
        
        <form 
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit} 
          className="w-full md:w-1/2"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <input
            className="block w-full text-light bg-gray-100 border border-gray-300 rounded-md py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-primaryLight dark:focus:border-primaryDark"
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleChange}
            required
          />

          <input
            className="block w-full text-light bg-gray-100 border border-gray-300 rounded-md py-3 px-4 mb-4 leading-tight focus:outline-none focus:bg-white focus:border-primaryLight dark:focus:border-primaryDark"
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
            required
          />

          <textarea
            className="block w-full text-light bg-gray-100 border border-gray-300 rounded-md py-3 px-4 mb-4 h-40 leading-tight focus:outline-none focus:bg-white focus:border-primaryLight dark:focus:border-primaryDark"
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={handleChange}
            required
          ></textarea>

          <div className="flex flex-wrap justify-start items-center w-full">
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center mt-2 py-2 px-4 text-lg font-bold text-primaryLight hover:bg-primaryLight dark:text-primaryDark border-2 border-primaryLight dark:border-primaryDark rounded dark:hover:bg-secondaryDark h-12 transition-colors duration-300 ease-in-out w-full md:w-auto"
            >
              {isLoading ? "Sending Message..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
