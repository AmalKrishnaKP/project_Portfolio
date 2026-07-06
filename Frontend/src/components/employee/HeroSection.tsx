import type { ChangeEvent } from "react";

import type { Employee } from "../../types/employee";

type HeroProps = {
  employee: Employee;
  setEmployee: React.Dispatch<React.SetStateAction<Employee>>;
  isEditing: boolean;
};

function HeroSection({
  employee,
  setEmployee,
  isEditing,
}: HeroProps) {

   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (!file) return;

  const imageUrl = URL.createObjectURL(file);

  setEmployee({
    ...employee,
    profileImage: imageUrl,
  });
}; 
  return (
    <section className="bg-[#f1f3ff] px-8 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
      <div className="relative group">

  <img
    src={employee.profileImage}
    alt={employee.name}
    className="h-48 w-48 rounded-full border-4 border-white object-cover shadow-lg"
  />

  <div className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-white">
    ✓
  </div>

  {isEditing && (
    <>
      <label
        htmlFor="profile-image"
        className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/40 text-lg font-semibold text-white opacity-0 transition group-hover:opacity-100"
      >
        📷 Change Photo
      </label>

      <input
        id="profile-image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </>
  )}

</div>
        <div className="flex-1">

          
          
         {isEditing ? (
  <>
    <input
      value={employee.name}
      onChange={(e) =>
        setEmployee({
          ...employee,
          name: e.target.value,
        })
      }
      className="mb-3 w-full rounded-lg border border-gray-300 p-2 text-5xl font-bold"
    />

    <h2 className="mb-3 text-2xl text-gray-600">
      {employee.designation}
    </h2>

    <p className="mb-6 text-gray-500">
      {employee.email}
    </p>
  </>
) : (
            <>
              <h1 className="mb-2 text-5xl font-bold">
                {employee.name}
              </h1>

              <h2 className="mb-3 text-2xl text-gray-600">
                {employee.designation}
              </h2>

              
            </>
          )}

          

        </div>

      </div>
    </section>
  );
}

export default HeroSection;