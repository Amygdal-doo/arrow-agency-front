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
    primaryColor,
    setPrimaryColor,
    setSecondaryColor,
    setTertiaryColor,
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

  const templateColors = [
    {
      id: 1,
      primary: "rgb(0, 0, 0)",
      secondary: "0, 0, 0",
      tertiary: "rgb(236, 72, 153)",
      name: "Classic Black",
    },
    {
      id: 2,
      primary: "rgb(15, 23, 42)",
      secondary: "15, 23, 42",
      tertiary: "rgb(99, 102, 241)",
      name: "Slate Dark",
    },
    {
      id: 3,
      primary: "rgb(79, 70, 229)",
      secondary: "79, 70, 229",
      tertiary: "rgb(15, 23, 42)",
      name: "Royal Blue",
    },
    {
      id: 4,
      primary: "rgb(37, 99, 235)",
      secondary: "37, 99, 235",
      tertiary: "rgb(234, 179, 8)",
      name: "Ocean Blue",
    },
    {
      id: 5,
      primary: "rgb(8, 145, 178)",
      secondary: "8, 145, 178",
      tertiary: "rgb(15, 23, 42)",
      name: "Cyan",
    },
    {
      id: 6,
      primary: "rgb(5, 150, 105)",
      secondary: "5, 150, 105",
      tertiary: "rgb(0, 0, 0)",
      name: "Emerald",
    },
    {
      id: 7,
      primary: "rgb(234, 88, 12)",
      secondary: "234, 88, 12",
      tertiary: "rgb(75, 0, 130)",
      name: "Vibrant Orange",
    },
    {
      id: 8,
      primary: "rgb(127, 29, 29)",
      secondary: "127, 29, 29",
      tertiary: "rgb(34, 197, 94)",
      name: "Deep Burgundy",
    },
    {
      id: 9,
      primary: "rgb(109, 40, 217)",
      secondary: "109, 40, 217",
      tertiary: "rgb(234, 179, 8)",
      name: "Royal Purple",
    },
    {
      id: 10,
      primary: "rgb(190, 24, 93)",
      secondary: "190, 24, 93",
      tertiary: "rgb(17, 24, 39)",
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

        <div className="flex flex-col md:flex-row gap-4">
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
            className="md:mt-4 font-bold text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-8">
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
        <div className="flex space-x-4 justify-evenly scrollbar-hide overflow-x-auto bg-gray-800 rounded-xl p-3 border border-gray-700/50 shadow-lg">
          {templateColors.map((color) => (
            <div
              key={color.id}
              onClick={() => {
                setPrimaryColor(color.primary);
                setSecondaryColor(color.secondary);
                setTertiaryColor(color.tertiary);
              }}
              className="group cursor-pointer relative"
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-xl shadow-lg transition-all duration-300 ${
                    primaryColor === color.primary
                      ? "ring-2 ring-offset-2 ring-offset-gray-800 ring-orange-500 scale-110"
                      : "hover:scale-105"
                  }`}
                >
                  <div
                    className="w-full h-full rounded-xl"
                    style={{ backgroundColor: color.primary }}
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
