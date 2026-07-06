import type { EmployeeProps } from "../../types/props";
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { downloadContact } from "../../utils/downloadContact";

function MainContent({ employee }: EmployeeProps) {

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="absolute right-6 top-6 flex items-center gap-3">
        <button
          onClick={() => downloadContact(employee)}
          className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-1.5 text-white font-semibold text-sm transition hover:opacity-90"
        >
          <FiUserPlus size={16} />
          Save Contact
        </button>
        {/* <button
          onClick={logout}
          className="cursor-pointer inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-1.5 text-[#434654] font-semibold text-sm transition hover:bg-gray-50"
        >
          <FiLogOut size={16} />
          Log Out
        </button> */}
      </div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

        {/* LEFT COLUMN */}
        <div className="space-y-12 lg:col-span-7">

          {/* ABOUT */}

          <div>

            <h2 className="mb-6 border-l-4 border-primary pl-4 text-2xl font-semibold text-[#051A3E]">
              About {employee.name.split(" ")[0]}
            </h2>

            <p className="leading-8 text-[#434654]">
              {employee.about}
            </p>

          </div>

          {/* SKILLS */}

          <div>

            <h2 className="mb-6 border-l-4 border-primary pl-4 text-2xl font-semibold text-[#051A3E]">
              Technical Expertise
            </h2>

            <div className="flex flex-wrap gap-3">

              {employee.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-gray-300
                    bg-[#E9EDFF]
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-primary
                    transition-all
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="lg:col-span-5">

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">

            <h3 className="mb-8 text-sm font-semibold uppercase tracking-[3px] text-[#576377]">
              Contact Information
            </h3>

            <div className="space-y-6">

              {/* Email */}

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F3FF] text-primary">
                  < FaEnvelope size={22} />
                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    Email Address
                  </p>
                  <a
                    href={`mailto:${employee.email}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {employee.email}
                  </a>


                </div>

              </div>

              {/* Phone */}

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F3FF] text-primary">
                  <FaPhoneAlt size={22} />
                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    Mobile
                  </p>

                  <a
                    href={`tel:${employee.phone}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {employee.phone}
                  </a>

                </div>

              </div>

              {/* LinkedIn */}

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F1F3FF] text-primary">
                  <FaLinkedin size={22} />
                </div>

                <div>

                  <p className="text-xs text-gray-500">
                    LinkedIn
                  </p>

                  <a
                    href={employee.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-primary hover:underline break-all"
                  >
                    {employee.linkedin}
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MainContent;