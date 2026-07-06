import { FaLinkedin, FaGlobe, FaEnvelope } from "react-icons/fa";
import { company } from "../../data/company/company";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          <img
            src={company.logo}
            alt={company.name}
            className="h-10 object-contain"
          />

          <div>

            <h3 className="font-semibold text-slate-900">
              {company.name}
            </h3>

            <p className="text-sm text-gray-500">
              Empowering Digital Transformation
            </p>

          </div>

        </div>

        {/* Center */}

        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {company.name}. All Rights Reserved.
        </p>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gray-100 p-3 transition hover:bg-[#0052CC] hover:text-white"
          >
            <FaGlobe />
          </a>

          <a
            href="mailto:info@tarento.com"
            className="rounded-full bg-gray-100 p-3 transition hover:bg-[#0052CC] hover:text-white"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://linkedin.com/company/tarento"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gray-100 p-3 transition hover:bg-[#0052CC] hover:text-white"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;