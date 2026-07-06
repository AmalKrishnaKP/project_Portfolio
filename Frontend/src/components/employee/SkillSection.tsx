import { useState } from "react";
import type { Employee } from "../../types/employee";

type Props = {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
  isEditing: boolean;
};

function SkillsSection({
  employee,
  setEmployee,
  isEditing,
}: Props) {
  const [newSkill, setNewSkill] = useState("");

  const removeSkill = (skill: string) => {
    setEmployee({
      ...employee,
      skills: employee.skills.filter((s) => s !== skill),
    });
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;

    if (employee.skills.includes(newSkill.trim())) return;

    setEmployee({
      ...employee,
      skills: [...employee.skills, newSkill.trim()],
    });

    setNewSkill("");
  };

  return (
    <section>
    <h2
  className="
  mb-6
  border-l-[5px]
  border-[#0B4AA8]
  pl-4
  text-2xl
  font-semibold
  text-[var(--text-primary)]
  "
>
  Technical Expertise
</h2>

      <div className="flex flex-wrap gap-3">

        {employee.skills.map((skill) => (
          <span
            key={skill}
            className="flex items-center gap-2 rounded-full border border-gray-300 bg-blue-50 px-4 py-2 text-[var(--text-primary)] transition hover:bg-blue-100"
          >
            {skill}

            {isEditing && (
              <button
                onClick={() => removeSkill(skill)}
                className="font-bold text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            )}
          </span>
        ))}

        {isEditing && (
          <>
            <input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addSkill();
                }
              }}
              placeholder="New Area of Expertise"
              className="rounded-full border px-4 py-2"
            />

            <button
              onClick={addSkill}
              className="rounded-full bg-[var(--primary)] px-4 py-2 text-white"
            >
              + Add Area of Expertise
            </button>
          </>
        )}

      </div>

    </section>
  );
}

export default SkillsSection;