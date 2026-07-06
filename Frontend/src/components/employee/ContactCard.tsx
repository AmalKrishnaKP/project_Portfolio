import { FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import type { Employee } from "@/types/employee";

type Props = {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
  isEditing: boolean;
};

function ContactCard({
  employee,
  setEmployee,
  isEditing,
}: Props) {
  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const digits = e.target.value.replace(/\D/g, "");

    setEmployee((prev) => ({
      ...prev,
      phone: digits,
    }));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">

      {/* Heading */}

      <h2 className="mb-8 border-l-4 border-[var(--primary)] pl-4 text-2xl font-semibold text-gray-800">
        Contact Information
      </h2>

      <div className="space-y-6">

        {/* Email */}

        <div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Email Address
          </p>

          <a
            href={`mailto:${employee.email}`}
            className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 transition hover:bg-[var(--primary-light)]"
          >

            <FaEnvelope
              size={20}
              className="text-[var(--primary)]"
            />

            <span className="text-gray-700">
              {employee.email}
            </span>

          </a>

        </div>

        {/* Phone */}

        <div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
            Phone Number
          </p>

          {isEditing ? (

            <div className="flex items-center gap-3 rounded-xl border-2 border-dashed border-black bg-yellow-50 p-4">

              <FaPhoneAlt
                size={20}
                className="text-[var(--primary)]"
              />

              <span className="rounded-md bg-gray-200 px-3 py-2 text-sm font-medium">
                +91
              </span>

              <input
                type="text"
                value={employee.phone}
                maxLength={10}
                onChange={handlePhoneChange}
                placeholder="9876543210"
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[var(--primary)]"
              />

            </div>

          ) : (

            <a
              href={`tel:+91${employee.phone}`}
              className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 transition hover:bg-[var(--primary-light)]"
            >

              <FaPhoneAlt
                size={20}
                className="text-[var(--primary)]"
              />

              <span className="text-gray-700">
                +91 {employee.phone}
              </span>

            </a>

          )}

          {isEditing && employee.phone.length > 0 && employee.phone.length < 10 && (

            <p className="mt-2 text-sm text-red-500">
              Phone number must contain exactly 10 digits.
            </p>

          )}

          {isEditing && employee.phone.length === 10 && (

            <p className="mt-2 text-sm text-green-600">
              ✓ Valid phone number
            </p>

          )}

        </div>

        {/* LinkedIn */}

        <div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
            LinkedIn
          </p>

          {isEditing ? (

            <div className="flex items-center gap-3 rounded-xl border-2 border-dashed border-black bg-yellow-50 p-4">

              <FaLinkedin
                size={20}
                className="text-[var(--primary)]"
              />

              <input
                type="text"
                value={employee.linkedin}
                onChange={(e) =>
                  setEmployee((prev) => ({
                    ...prev,
                    linkedin: e.target.value,
                  }))
                }
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[var(--primary)]"
              />

            </div>

          ) : (

            <a
              href={employee.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 transition hover:bg-[var(--primary-light)]"
            >

              <FaLinkedin
                size={20}
                className="text-[var(--primary)]"
              />

              <span className="break-all text-gray-700">
                {employee.linkedin}
              </span>

            </a>

          )}

        </div>

      </div>

    </div>
  );
}

export default ContactCard;