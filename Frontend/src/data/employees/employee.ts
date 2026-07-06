import type { Employee } from "../../types/employee";
import profileImage from "../../assets/images/employee/employee_photo.jpg";

export const employee: Employee = {
  id: 1,
  name: "Ananya Singh",
  designation: "Software Engineer",
  company: "Tarento Solutions",
  email: "ananya.singh@tarento.com",
  phone: "+91 98765 43210",
  linkedin: "https://linkedin.com/ananyasingh",
  about:
    "Passionate software engineer with extensive experience in building scalable web applications and high-performance cloud solutions. My mission is to bridge the gap between complex business requirements and elegant technical execution, ensuring every line of code contributes to a seamless user experience and robust system architecture. ",
  skills: [
    "Cybersecurity",
    "Data Analytics",
    "Cloud Architecture",
    "System Optimization",
    
  ],
  profileImage: profileImage,
};
