import type { Employee } from "@/types/employee";

export const downloadContact = (employee: Employee) => {
  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${employee.name}
TITLE:${employee.designation}
EMAIL;TYPE=INTERNET:${employee.email}
TEL;TYPE=CELL:${employee.phone}
URL:${employee.linkedin}
END:VCARD
  `.trim();

  const blob = new Blob([vCard], {
    type: "text/vcard;charset=utf-8",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = `${employee.name}.vcf`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
};
