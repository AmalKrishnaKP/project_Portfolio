import {
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#081B4B] shadow-2xl">
      <div className="flex flex-col items-center justify-between gap-8 px-16 py-8 text-white lg:flex-row">
        {/* Left */}
        <p className="text-base text-gray-300">
          © {new Date().getFullYear()} Tarento Technologies. All rights reserved.
        </p>

        {/* Center */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-base font-medium">
          <a href="#" className="transition hover:text-blue-300">
            Privacy Policy
          </a>

          <span className="text-gray-500">|</span>

          <a href="#" className="transition hover:text-blue-300">
            Terms of Service
          </a>

          <span className="text-gray-500">|</span>

          <a href="#" className="transition hover:text-blue-300">
            Contact Us
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5 text-lg">
          <a
            href="https://linkedin.com/company/tarento"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-300"
          >
            <FaTwitter />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-300"
          >
            <FaYoutube />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-blue-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;