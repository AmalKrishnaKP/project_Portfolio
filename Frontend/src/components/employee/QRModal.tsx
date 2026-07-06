import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import type { Employee } from "@/types/employee";

type Props = {
  open: boolean;
  employee: Employee;
  onClose: () => void;
};

function QRModal({ open, employee, onClose }: Props) {
  if (!open) return null;

  const profileUrl = `https://tarento.com/employee/${employee.name
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  const downloadQR = async () => {
    const qrElement = document.getElementById("qr-card");

    if (!qrElement) return;

    const dataUrl = await htmlToImage.toPng(qrElement);

    const link = document.createElement("a");
    link.download = `${employee.name}-QR.png`;
    link.href = dataUrl;
    link.click();
  };

  const shareQR = async () => {
    if (navigator.share) {
      await navigator.share({
        title: employee.name,
        text: "Check out my digital business card",
        url: profileUrl,
      });
    } else {
      await navigator.clipboard.writeText(profileUrl);
      alert("Profile link copied to clipboard!");
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[650px] rounded-xl bg-white p-8 shadow-2xl"
      >
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Tarento Digital
            </p>

            <h2 className="text-3xl font-bold">{employee.name}</h2>
          </div>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ✕
          </button>
        </div>

        <div
          id="qr-card"
          className="flex items-center gap-10"
        >
          <div className="rounded-lg border p-4">
            <QRCode
              value={profileUrl}
              size={200}
            />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p>{employee.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <p>{employee.phone}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p>{employee.linkedin}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 rounded-lg border py-3"
          >
            Close
          </button>

          <button
            onClick={downloadQR}
            className="flex-1 rounded-lg bg-blue-700 py-3 text-white"
          >
            Download
          </button>

          <button
            onClick={shareQR}
            className="flex-1 rounded-lg bg-green-600 py-3 text-white"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default QRModal;