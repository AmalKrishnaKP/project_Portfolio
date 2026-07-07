import type { HeroProps } from "@/types/props";
import { MdVerified } from "react-icons/md";
import { motion } from "framer-motion";

function HeroSection({ employee, company }: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-[#F1F3FF] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Company Logo */}
        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src={company.logo}
          alt={company.name}
          className="mb-8 h-8 object-contain sm:mb-10 sm:h-10 lg:mb-14 lg:h-12"
        />

        {/* Hero Content */}
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-12 md:text-left">

          {/* Profile */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-44 sm:w-44 lg:h-48 lg:w-48">
              <img
                src={employee.profileImage}
                alt={employee.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-2 right-2 rounded-full bg-primary p-2 shadow-md sm:bottom-3 sm:right-3">
              <MdVerified
                className="text-white"
                size={18}
              />
            </div>
          </motion.div>

          {/* Employee Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[3px] text-primary sm:text-sm sm:tracking-[4px]">
              Employee Identity
            </p>

            <h1 className="mt-2 text-3xl font-bold leading-tight text-[#051A3E] sm:text-4xl lg:text-5xl">
              {employee.name}
            </h1>

            <h2 className="mt-3 text-lg font-medium text-[#576377] sm:text-xl lg:text-2xl">
              {employee.designation}
            </h2>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}

export default HeroSection;