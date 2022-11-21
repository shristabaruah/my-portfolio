import Link from "next/link";
import React from "react";

import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAngleDoubleUp } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="h-full lg:p-4 ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://res.cloudinary.com/dopc1gfoj/image/upload/v1668502036/jpxgkubshlsf9okhkztl.jpg"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Shrista Baruah</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for Freelance and Full-time position. Contact
                  me and lets talk. You can mail me at eternalshrista@gmail.com
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect with Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/shrista-baruah/"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>

                  <Link href="https://github.com/shristabaruah" target="_blank">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link
                    href="https://twitter.com/ShristaBaruah"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaTwitter />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="py-4">
              <form
                action="https://getform.io/f/b223016d-7467-4142-b096-5b2e46aaab34"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaAngleDoubleUp className="text-[#5651e5]  " size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
