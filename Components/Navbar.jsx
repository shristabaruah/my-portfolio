import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/router";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    // if (
    //   router.asPath === "/BloomTronics" ||
    //   router.asPath === "/BloomNote" ||
    //   router.asPath === "/BloomTube" ||
    //   router.asPath === "/Bloom-Station" ||
    //   router.asPath === "/BloomUI"
    // ) {
    //   setNavBg("transparent");
    //   setLinkColor("#ecf0f3");
    // } else {
    //   setNavBg("#ecf0f3");
    //   setLinkColor("#1f2937");
    // }
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
      window.addEventListener("scroll", handleShadow);
      if (
        router.asPath === "/BloomTronics" ||
        router.asPath === "/BloomNote" ||
        router.asPath === "/BloomTube" ||
        router.asPath === "/Bloom-Station" ||
        router.asPath === "/BloomUI"
      ) {
        setLinkColor("#ecf0f3");
      } else {
        setLinkColor("#1f2937");
      }
    };
  }, []);

  const mobNavHandler = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100] bg-[#ecf0f3] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-10">
        <Link href="/">
          <Image src={Logo} alt="/" width={100} />
        </Link>
        <div>
          <ul style={{ color:`${linkColor}`}} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#1f2937]">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#1f2937]">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#1f2937]">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#1f2937]">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#1f2937]">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={() => mobNavHandler()} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          navOpen
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <Image src="/../public/logo.png" alt="/" width="87" height="35" />
              <div
                onClick={() => mobNavHandler()}
                className="rounded-full shadow-lg p-3 cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li
                    onClick={() => setNavOpen(false)}
                    className="py-4 text-sm"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setNavOpen(false)}
                    className="py-4 text-sm"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setNavOpen(false)}
                    className="py-4 text-sm"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setNavOpen(false)}
                    className="py-4 text-sm"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setNavOpen(false)}
                    className="py-4 text-sm"
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Lets connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <Link href="https://www.linkedin.com/in/shrista-baruah/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
