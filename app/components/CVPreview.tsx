"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CVPreview = () => {
  const {
    firstName,
    lastName,
    email,
    phone,
    summary,
    currentSkills,
    hobbies,
    currentExperience,
    currentProjects,
    currentEducations,
    currentCertificates,
    currentCourses,
    currentSocials,
    currentLanguages,
    loading,
    updateApplicant,
  } = useApplicant();

  const pdfRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const element = pdfRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      scrollY: -window.scrollY,
      height: element.offsetHeight,
      windowHeight: element.offsetHeight,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pageHeight = pdf.internal.pageSize.getHeight();
    let heightLeft = imgHeight;
    let position = 0;

    // First page
    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Add subsequent pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${firstName}_${lastName}_CV.pdf`);
  };

  const handleSave = async () => {
    await updateApplicant();
  };

  return (
    <div className="w-1/2 bg-gray-800/50 rounded-lg p-8 border border-gray-700 overflow-y-auto max-h-[80vh] scrollbar-hide">
      <div className="flex justify-between items-end pb-8 border-b border-gray-700">
        <h1 className="text-4xl font-bold text-white">CV Preview</h1>
        <div className="flex gap-4">
          <button
            onClick={handleDownloadPdf}
            className="mt-4 font-bold text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors"
          >
            Download PDF
          </button>
          <button
            onClick={handleSave}
            className="mt-4 font-bold text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      <div
        ref={pdfRef}
        className="mt-8 bg-white text-black rounded-lg shadow-xl mx-auto w-full p-[2cm]"
        style={{
          minHeight: "29.7cm",
          // width: "21cm",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Header Section */}
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">
            {firstName} {lastName}
          </h1>
          <div className="text-gray-600 mt-2 space-y-1">
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="col-span-2 space-y-6">
            {summary && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Professional Summary
                </h2>
                <p className="text-gray-600">{summary}</p>
              </section>
            )}

            {currentExperience?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Work Experience
                </h2>
                {currentExperience.map((experience, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-gray-800">
                      {experience.position}
                    </h3>
                    <p className="text-gray-600">{experience.company}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      {experience.description}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {currentEducations?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Education
                </h2>
                {currentEducations.map((education, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="font-bold text-gray-800">
                      {education.degree} in {education.field}
                    </h3>
                    <p className="text-gray-600">{education.institution}</p>
                    <p className="text-gray-500 text-sm">
                      {education.startDate} - {education.endDate}
                    </p>
                  </div>
                ))}
              </section>
            )}

            {currentProjects?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Projects
                </h2>
                {currentProjects.map((project, index) => (
                  <div key={index} className="mb-2">
                    <h3 className="font-bold text-gray-800">{project.name}</h3>
                  </div>
                ))}
              </section>
            )}
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="col-span-1 space-y-6">
            {currentSkills?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Skills</h2>
                <div className="space-y-2">
                  {currentSkills.map((skill, index) => (
                    <div key={index} className="text-gray-600">
                      {skill.name} -{" "}
                      <span className="text-gray-500">{skill.efficiency}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {currentLanguages?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Languages
                </h2>
                {currentLanguages.map((language, index) => (
                  <div key={index} className="text-gray-600">
                    {language.name} -{" "}
                    <span className="text-gray-500">{language.efficiency}</span>
                  </div>
                ))}
              </section>
            )}

            {currentCertificates?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Certificates
                </h2>
                <div className="space-y-2">
                  {currentCertificates.map((certificate, index) => (
                    <div key={index} className="text-gray-600">
                      {certificate.name}
                      {certificate.issueDate && (
                        <span className="text-gray-500 text-sm block">
                          Issued: {certificate.issueDate}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {currentCourses?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Courses
                </h2>
                <div className="space-y-2">
                  {currentCourses.map((course, index) => (
                    <div key={index} className="text-gray-600">
                      {course.name}
                      {course.url && (
                        <span className="text-gray-500 text-sm block">
                          {course.url}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {currentSocials?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Social Links
                </h2>
                <div className="space-y-2">
                  {currentSocials.map((social) => (
                    <a
                      key={social.id}
                      href={
                        social.url.startsWith("http")
                          ? social.url
                          : `https://${social.url}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 block"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </section>
            )}

            {hobbies?.length > 0 && (
              <section className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Hobbies
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  {hobbies.map((hobby, index) => (
                    <li key={index} className="text-gray-600">
                      {hobby}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVPreview;
