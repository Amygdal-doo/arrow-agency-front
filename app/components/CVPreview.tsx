"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import React from "react";
import CVPreviewOne from "./templates/CVPreviewOne";
import CVPreviewTwo from "./templates/CVPreviewTwo";
import CVPreviewThree from "./templates/CVPreviewThree";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

const CVPreview = () => {
  const {
    loading,
    applicant,
    updateApplicant,
    firstName,
    lastName,
    email,
    phone,
    summary,
    skills,
    hobbies,
    experience,
    projects,
    educations,
    certificates,
    courses,
    socials,
    languages,
    deleteItems,
    templateId,
    setTemplateId,
    colorPalette,
    setColorPalette,
  } = useApplicant();

  // const pdfRef = useRef<HTMLDivElement>(null);

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const handleDownloadPdf = async () => {
  //   const element = pdfRef.current;
  //   if (!element) return;

  //   const canvas = await html2canvas(element, {
  //     scale: 2,
  //     useCORS: true,
  //     scrollY: -window.scrollY,
  //     height: element.offsetHeight,
  //     windowHeight: element.offsetHeight,
  //   });

  //   const imgData = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF({
  //     orientation: "portrait",
  //     unit: "px",
  //     format: "a4",
  //   });

  //   const imgWidth = pdf.internal.pageSize.getWidth();
  //   const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //   const pageHeight = pdf.internal.pageSize.getHeight();
  //   let heightLeft = imgHeight;
  //   let position = 0;

  //   // First page
  //   pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //   heightLeft -= pageHeight;

  //   // Add subsequent pages if needed
  //   while (heightLeft >= 0) {
  //     position = heightLeft - imgHeight;
  //     pdf.addPage();
  //     pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
  //     heightLeft -= pageHeight;
  //   }

  //   pdf.save(`${firstName}_${lastName}_CV.pdf`);
  // };

  const handleSave = async () => {
    console.log("update ", {
      firstName,
      lastName,
      email,
      phone,
      summary,
      skills,
      hobbies,
      experience,
      projects,
      educations,
      certificates,
      courses,
      socials,
      languages,
      deleteItems,
    });
    await updateApplicant();
  };

  const templates = [
    { id: "cv2", name: "Modern Template" },
    { id: "cv3", name: "Professional Template" },
    { id: "cv4", name: "Creative Template" },
  ];

  // const templateColors = [
  //   { id: 1, value: "#000000", name: "Classic Black" },
  //   { id: 2, value: "#0f172a", name: "Slate Dark" },
  //   { id: 3, value: "#4f46e5", name: "Royal Blue" },
  //   { id: 4, value: "#2563eb", name: "Ocean Blue" },
  //   { id: 5, value: "#0891b2", name: "Cyan" },
  //   { id: 6, value: "#059669", name: "Emerald" },
  //   { id: 7, value: "#ea580c", name: "Vibrant Orange" },
  //   { id: 8, value: "#7f1d1d", name: "Deep Burgundy" },
  //   { id: 9, value: "#6d28d9", name: "Royal Purple" },
  //   { id: 10, value: "#be185d", name: "Magenta" },
  // ];

  const templateColors = [
    {
      id: 1,
      value: "rgb(0, 0, 0)",
      secondary: "rgb(236, 72, 153)",
      name: "Classic Black",
    },
    {
      id: 2,
      value: "rgb(15, 23, 42)",
      secondary: "rgb(99, 102, 241)",
      name: "Slate Dark",
    },
    {
      id: 3,
      value: "rgb(79, 70, 229)",
      secondary: "rgb(15, 23, 42)",
      name: "Royal Blue",
    },
    {
      id: 4,
      value: "rgb(37, 99, 235)",
      secondary: "rgb(234, 179, 8)",
      name: "Ocean Blue",
    },
    {
      id: 5,
      value: "rgb(8, 145, 178)",
      secondary: "rgb(15, 23, 42)",
      name: "Cyan",
    },
    {
      id: 6,
      value: "rgb(5, 150, 105)",
      secondary: "rgb(168, 85, 247)",
      name: "Emerald",
    },
    {
      id: 7,
      value: "rgb(234, 88, 12)",
      secondary: "rgb(59, 130, 246)",
      name: "Vibrant Orange",
    },
    {
      id: 8,
      value: "rgb(127, 29, 29)",
      secondary: "rgb(34, 197, 94)",
      name: "Deep Burgundy",
    },
    {
      id: 9,
      value: "rgb(109, 40, 217)",
      secondary: "rgb(234, 179, 8)",
      name: "Royal Purple",
    },
    {
      id: 10,
      value: "rgb(190, 24, 93)",
      secondary: "rgb(17,24,39)",
      name: "Magenta",
    },
  ];
  const handleTemplateChange = async (newTemplateId: string) => {
    setTemplateId(newTemplateId);
  };

  return (
    <div className="w-full xl:w-1/2 bg-gray-800/50 rounded-lg p-8 border border-gray-700 overflow-y-auto max-h-[80vh] scrollbar-hide">
      <div className="lg:flex justify-between items-end pb-8 border-b border-gray-700">
        <h1 className="text-4xl font-bold text-white">CV Preview</h1>

        <div className="flex gap-4">
          {applicant && (
            <button
              onClick={() =>
                handleDownload(applicant.file.url, applicant.file.name)
              }
              className="mt-4 font-bold text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors"
            >
              Download PDF
            </button>
          )}
          <button
            onClick={handleSave}
            className="mt-4 font-bold text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      <div className="flex gap-4 py-8">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => handleTemplateChange(template.id)}
            className={`px-4 py-2 rounded-md transition-all ${
              templateId === template.id
                ? "bg-orange-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {template.name}
          </button>
        ))}
      </div>
      <div className="pb-6">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-lg font-semibold text-gray-300">Color Theme</h3>
          <div className="h-px flex-1 bg-gray-700" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          {templateColors.map((color) => (
            <div
              key={color.id}
              onClick={() => setColorPalette(color.value)}
              className="group cursor-pointer relative"
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-xl shadow-lg transition-all duration-300 ${
                    colorPalette === color.value
                      ? "ring-2 ring-offset-2 ring-offset-gray-800 ring-orange-500 scale-110"
                      : "hover:scale-105"
                  }`}
                >
                  <div
                    className="w-full h-full rounded-xl"
                    style={{ backgroundColor: color.value }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Message */}
      <div className="md:hidden flex flex-col items-center justify-center py-12 text-center space-y-4">
        <svg
          className="w-16 h-16 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-300">
          CV Preview is optimized for larger screens
        </h3>
        <p className="text-gray-400 max-w-md">
          Please download the PDF file to view your CV on mobile devices, or
          switch to a larger screen for the preview.
        </p>
      </div>

      {/* CV Preview for larger screens */}
      <div className="hidden md:block">
        {templateId === "cv4" && <CVPreviewThree />}
        {templateId === "cv3" && <CVPreviewTwo />}
        {templateId === "cv2" && <CVPreviewOne />}
      </div>
    </div>
  );
};

export default CVPreview;
