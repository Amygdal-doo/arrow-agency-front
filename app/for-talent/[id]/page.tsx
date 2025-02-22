import { jobListings } from "@/app/conts/jobList";
import { notFound } from "next/navigation";

export default async function JobDetails({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const job = jobListings.find((job) => job.id === parseInt(id));

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#01070a] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8 border border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-white">
                {job.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-300">
                <span>{job.companyName}</span>
                <span>•</span>
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.duration}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium mb-2 ${
                  job.seniority === "senior"
                    ? "bg-purple-900 text-purple-200"
                    : job.seniority === "mid"
                    ? "bg-blue-900 text-blue-200"
                    : "bg-green-900 text-green-200"
                }`}
              >
                {job.seniority}
              </span>
              {job.isRemote && (
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                  Remote
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Role */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                About the Role
              </h2>
              <p className="text-gray-300 mb-6">{job.aboutRole}</p>
              <p className="text-gray-300">{job.description}</p>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Key Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {job.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>

            {/* Required Qualifications */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Required Qualifications
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {job.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>

            {/* Bonus Qualifications */}
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Bonus Qualifications
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {job.bonus.map((bonus, index) => (
                  <li key={index}>{bonus}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Application Details */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700 sticky top-4">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Application Details
              </h2>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Application Deadline */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Application Deadline
                </h3>
                <p className="text-gray-300">{job.sendCvTillDate}</p>
              </div>

              {/* Apply Button */}
              <a
                href={job.moreInfoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-400 transition-colors font-semibold"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}