import {
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#081B4B] shadow-2xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-8 text-white sm:px-8 lg:flex-row lg:px-10 lg:py-10">

        {/* Left */}
        <p className="text-center text-sm text-gray-300 sm:text-base lg:text-left">
          © {new Date().getFullYear()} Tarento Technologies. All rights reserved.
        </p>

        {/* Center */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium sm:gap-5 sm:text-base">

          <a
            href="#"
            className="transition-colors hover:text-blue-300"
          >
            Privacy Policy
          </a>

          <span className="hidden text-gray-500 sm:block">|</span>

          <a
            href="#"
            className="transition-colors hover:text-blue-300"
          >
            Terms of Service
          </a>

          <span className="hidden text-gray-500 sm:block">|</span>

          <a
            href="#"
            className="transition-colors hover:text-blue-300"
          >
            Contact Us
          </a>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-xl">

          <a
            href="https://in.linkedin.com/company/tarento-group"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.twitter.com/tarentogroup"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-300"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.youtube.com/@tarentogroup"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-300"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.instagram.com/tarento_group"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-300"
          >
            <FaInstagram />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;