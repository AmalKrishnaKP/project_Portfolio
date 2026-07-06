import { useState } from "react";
import Header from "../../components/employee/Header";
import HeroSection from "../../components/employee/HeroSection";
import MainContent from "../../components/employee/MainContent";
import AboutTarento from "../../components/client/CompanySection";
import KnowMore from "../../components/client/KnowMoreSection";
import TrustedBy from "../../components/client/TrustedSection";
import Footer from "../../components/client/Footer";
import QRModal from "../../components/employee/QRModal";
import AnalyticsModal from "../../components/employee/AnalyticsModal";

import { employee as employeeData } from "../../data/employees/employee";
import { company as companyData } from "../../data/company/company";

function EmployeeProfile() {
  const [employee, setEmployee] = useState(employeeData);

  const [isEditing, setIsEditing] = useState(false);

  const [showQR, setShowQR] = useState(false);

  const [showAnalytics, setShowAnalytics] = useState(false);

  return (
    <>
      <Header
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setShowQR={setShowQR}
      />

      <main className="pt-[72px]">
        <HeroSection
          employee={employee}
          setEmployee={setEmployee}
          isEditing={isEditing}
        />

        <MainContent
          employee={employee}
          setEmployee={setEmployee}
          isEditing={isEditing}
          setShowAnalytics={setShowAnalytics}
        />

        <AboutTarento company={companyData} />

        <KnowMore />

        <TrustedBy />
      </main>

      <Footer />

      <QRModal
        open={showQR}
        employee={employee}
        onClose={() => setShowQR(false)}
      />

      <AnalyticsModal
        open={showAnalytics}
        onClose={() => setShowAnalytics(false)}
      />
    </>
  );
}

export default EmployeeProfile;