import type { CompanyProps } from "@/types/props";

function CompanySection({ company }: CompanyProps) {
  return (
    <section className="w-full border-y border-gray-200 bg-[#F1F3FF] py-16">

      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-xl border border-gray-300 bg-[#D8E2FF] p-8">

          {/* Header */}

          <div className="mb-4 flex items-center justify-between">

            <h3 className="text-sm font-semibold uppercase tracking-[3px] text-[#0052CC]">
              About {company.name}
            </h3>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#0052CC]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h6"
              />
            </svg>

          </div>

          {/* Description */}

          <p className="leading-8 text-[#434654]">
            {company.description}
          </p>

          {/* Website */}

          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-medium text-[#0052CC] hover:underline"
          >
            View Company Website →
          </a>

        </div>

      </div>

    </section>
  );
}

export default CompanySection;