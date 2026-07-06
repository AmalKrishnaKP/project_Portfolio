import type { Employee } from "@/types/employee";

type Props = {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
  isEditing: boolean;
};

function AboutSection({
  employee,
  
}: Props) {
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
  About {employee.name}
</h2>
        <p className="leading-8 text-gray-600">
          {employee.about}
        </p>
      

    </section>
  );
}

export default AboutSection;