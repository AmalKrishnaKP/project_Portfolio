import {
  FiZap,
  FiShield,
  FiAward,
} from "react-icons/fi";

function KnowMoreSection() {
  return (
    <section className="bg-[#0B4AA8] py-20 text-white">

      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Heading */}

        <h2 className="text-5xl font-bold">
          Know More About Us
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Global presence, local impact. Tarento combines deep technical
          expertise with industry insights to deliver excellence across
          boundaries.
        </p>

        {/* Divider */}

        <div className="my-14 border-t border-blue-400/40"></div>

        {/* Statistics */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          <div>
            <h3 className="text-6xl font-bold">3+</h3>
            <p className="mt-3 text-sm uppercase tracking-[3px] text-blue-200">
              Continents
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-bold">500+</h3>
            <p className="mt-3 text-sm uppercase tracking-[3px] text-blue-200">
              Successful Transformations
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-bold">20+</h3>
            <p className="mt-3 text-sm uppercase tracking-[3px] text-blue-200">
              Countries Reached
            </p>
          </div>

        </div>

        {/* Divider */}

        <div className="my-14 border-t border-blue-400/40"></div>

        {/* Features */}

        <div className="flex flex-wrap justify-center gap-12 text-blue-100">

          <div className="flex items-center gap-2">
            <FiZap />
            <span>Innovation Driven</span>
          </div>

          <div className="flex items-center gap-2">
            <FiShield />
            <span>Integrity Focused</span>
          </div>

          <div className="flex items-center gap-2">
            <FiAward />
            <span>Excellence First</span>
          </div>

        </div>

        {/* Button */}

        <button
          className="
            mt-14
            rounded-lg
            bg-white
            px-12
            py-4
            text-lg
            font-semibold
            text-[#0B4AA8]
            transition
            duration-300
            hover:bg-blue-100
          "
        >
          KNOW MORE
        </button>

      </div>

    </section>
  );
}

export default KnowMoreSection;