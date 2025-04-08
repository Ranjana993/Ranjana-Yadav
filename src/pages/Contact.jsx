import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for reaching out!");
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl lg:text-6xl font-semibold md:text-[25px] font-playfair pb-6 text-center lg:text-left">
            Contact Us
          </h2>
          <p className="mb-8 font-light text-center lg:text-left text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="test@gmail.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 text-md font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Let us know how we can help you" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Leave a comment..." required />
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700">
              Send message
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:flex justify-center items-center">
          <img src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact" className="w-full  rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
}
