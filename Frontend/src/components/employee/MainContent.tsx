import type { Employee } from "@/types/employee";

import AboutSection from "./AboutSection";
import SkillsSection from "./SkillSection";
import ContactCard from "./ContactCard";
import ProfileVisitsCard from "./ProfileVisitsCard";

type Props = {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
  isEditing: boolean;
  setShowAnalytics: React.Dispatch<React.SetStateAction<boolean>>;
};

function MainContent({
  employee,
  setEmployee,
  isEditing,
  setShowAnalytics,
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-8 py-16">

      <div className="grid grid-cols-12 gap-10">

        <div className="col-span-7 space-y-10">

          <AboutSection
            employee={employee}
            setEmployee={setEmployee}
            isEditing={isEditing}
          />

          <SkillsSection
  employee={employee}
  setEmployee={setEmployee}
  isEditing={isEditing}
/>

        </div>

        <div className="col-span-5 space-y-8">

          <ContactCard
            employee={employee}
            setEmployee={setEmployee}
            isEditing={isEditing}
          />

          <ProfileVisitsCard
            setShowAnalytics={setShowAnalytics}
          />

        </div>

      </div>

    </section>
  );
}

export default MainContent;