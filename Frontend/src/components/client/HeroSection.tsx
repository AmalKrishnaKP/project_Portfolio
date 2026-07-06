import type { HeroProps } from "../../types/props";
import { MdVerified } from "react-icons/md";

function HeroSection({ employee, company }: HeroProps) {
  return (
    <section className="w-full bg-[#F1F3FF] py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* Company Logo */}
        <img
          src={company.logo}
          alt={company.name}
          className="mb-14 h-10 object-contain"
        />

        {/* Hero Content */}
        <div className="flex flex-col items-center gap-12 md:flex-row">

          {/* Profile */}
          <div className="relative">

            <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg">

              <img
                src={employee.profileImage}
                alt={employee.name}
                className="h-full w-full object-cover"
              />

            </div>

            {/* Verified Badge */}

            <div className="absolute bottom-3 right-3 rounded-full bg-primary p-2 shadow-md">

              <MdVerified
                className="text-white"
                size={22}
              />

            </div>

          </div>

          {/* Employee Details */}

          <div className="flex-1 text-center md:text-left">

            <p className="text-sm font-semibold uppercase tracking-[4px] text-primary">

              Employee Identity

            </p>

            <h1 className="mt-2 text-5xl font-bold text-[#051A3E]">

              {employee.name}

            </h1>

            <h2 className="mt-3 text-2xl font-medium text-[#576377]">

              {employee.designation}

            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;