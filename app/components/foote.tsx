import Image from "next/image";
import HeroBackground from "../../public/hero.jpg";

const jobListings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    duration: "Full-time",
    seniority: "senior",
    technologies: ["Python", "TensorFlow", "PyTorch", "Docker", "AWS"],
    description:
      "Join our AI team to develop cutting-edge machine learning solutions",
    companyName: "TechAI Solutions",
    companyLogo: "/companies/techai.png",
    location: "Berlin, Germany",
    sendCvTillDate: "2024-03-30",
    isRemote: true,
    aboutRole: "Lead AI development initiatives and mentor junior engineers",
    tasks: [
      "Design and implement machine learning models",
      "Optimize model performance and scalability",
      "Collaborate with cross-functional teams",
      "Conduct code reviews and maintain best practices",
    ],
    qualifications: [
      "5+ years of experience in AI/ML",
      "Strong Python programming skills",
      "Experience with deep learning frameworks",
      "PhD or MSc in Computer Science or related field",
    ],
    bonus: [
      "Experience with NLP",
      "Published research papers",
      "Open source contributions",
    ],
    moreInfoLink: "https://techai.com/careers/senior-ai-engineer",
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    duration: "Full-time",
    seniority: "mid",
    technologies: ["Python", "Scikit-learn", "Keras", "Git", "SQL"],
    description: "Build and deploy ML models for real-world applications",
    companyName: "DataMind",
    companyLogo: "/companies/datamind.png",
    location: "Amsterdam, Netherlands",
    sendCvTillDate: "2024-03-25",
    isRemote: true,
    aboutRole: "Develop and maintain machine learning pipelines",
    tasks: [
      "Implement ML algorithms",
      "Process and analyze large datasets",
      "Deploy models to production",
      "Monitor model performance",
    ],
    qualifications: [
      "3+ years of ML experience",
      "Strong programming background",
      "Experience with cloud platforms",
      "BSc in Computer Science or related field",
    ],
    bonus: [
      "Experience with MLOps",
      "Knowledge of distributed systems",
      "Cloud certifications",
    ],
    moreInfoLink: "https://datamind.ai/careers/ml-engineer",
  },
  {
    id: 3,
    title: "Junior Data Scientist",
    duration: "Full-time",
    seniority: "junior",
    technologies: ["Python", "Pandas", "NumPy", "SQL", "Jupyter"],
    description: "Start your career in data science with a dynamic team",
    companyName: "Analytics Pro",
    companyLogo: "/companies/analyticspro.png",
    location: "London, UK",
    sendCvTillDate: "2024-03-28",
    isRemote: false,
    aboutRole:
      "Support data science initiatives and learn from senior team members",
    tasks: [
      "Analyze data sets",
      "Create data visualizations",
      "Build predictive models",
      "Prepare technical documentation",
    ],
    qualifications: [
      "BSc in Statistics/Mathematics/Computer Science",
      "Basic Python programming skills",
      "Understanding of statistical concepts",
      "Good communication skills",
    ],
    bonus: [
      "Kaggle competition experience",
      "Data visualization portfolio",
      "Previous internship experience",
    ],
    moreInfoLink: "https://analyticspro.com/careers/junior-data-scientist",
  },
  {
    id: 4,
    title: "AI Research Scientist",
    duration: "Full-time",
    seniority: "senior",
    technologies: ["Python", "PyTorch", "TensorFlow", "CUDA", "Linux"],
    description: "Lead cutting-edge AI research initiatives",
    companyName: "AI Research Labs",
    companyLogo: "/companies/airesearch.png",
    location: "Boston, USA",
    sendCvTillDate: "2024-04-15",
    isRemote: true,
    aboutRole: "Drive innovation in AI research and development",
    tasks: [
      "Conduct advanced AI research",
      "Develop novel algorithms",
      "Write research papers",
      "Mentor junior researchers",
    ],
    qualifications: [
      "PhD in AI/ML or related field",
      "Strong publication record",
      "Deep learning expertise",
      "Research experience",
    ],
    bonus: [
      "Industry experience",
      "Conference presentations",
      "Patent portfolio",
    ],
    moreInfoLink: "https://airesearch.com/careers/research-scientist",
  },
  {
    id: 5,
    title: "Computer Vision Engineer",
    duration: "Full-time",
    seniority: "mid",
    technologies: ["Python", "OpenCV", "PyTorch", "CUDA", "C++"],
    description: "Develop advanced computer vision solutions",
    companyName: "Vision AI",
    companyLogo: "/companies/visionai.png",
    location: "Munich, Germany",
    sendCvTillDate: "2024-04-20",
    isRemote: true,
    aboutRole: "Create innovative computer vision applications",
    tasks: [
      "Implement vision algorithms",
      "Optimize performance",
      "Develop real-time solutions",
      "Conduct system testing",
    ],
    qualifications: [
      "3+ years in computer vision",
      "Strong C++/Python skills",
      "Deep learning experience",
      "MSc in Computer Vision",
    ],
    bonus: [
      "GPU optimization experience",
      "Research publications",
      "Robotics experience",
    ],
    moreInfoLink: "https://visionai.com/careers/cv-engineer",
  },
  {
    id: 6,
    title: "NLP Engineer",
    duration: "Full-time",
    seniority: "mid",
    technologies: ["Python", "BERT", "Transformers", "SpaCy", "PyTorch"],
    description: "Build advanced natural language processing systems",
    companyName: "TextAI",
    companyLogo: "/companies/textai.png",
    location: "Toronto, Canada",
    sendCvTillDate: "2024-04-25",
    isRemote: true,
    aboutRole: "Develop NLP solutions for enterprise applications",
    tasks: [
      "Implement NLP models",
      "Fine-tune transformers",
      "Develop text analytics",
      "Optimize model performance",
    ],
    qualifications: [
      "3+ years in NLP",
      "Strong Python skills",
      "Experience with transformers",
      "MSc in NLP/ML",
    ],
    bonus: [
      "Multiple languages",
      "Production deployment",
      "Research experience",
    ],
    moreInfoLink: "https://textai.com/careers/nlp-engineer",
  },
  {
    id: 7,
    title: "MLOps Engineer",
    duration: "Full-time",
    seniority: "senior",
    technologies: ["Python", "Kubernetes", "Docker", "AWS", "CI/CD"],
    description: "Build and maintain ML infrastructure at scale",
    companyName: "ML Platform",
    companyLogo: "/companies/mlplatform.png",
    location: "Stockholm, Sweden",
    sendCvTillDate: "2024-04-30",
    isRemote: true,
    aboutRole: "Lead MLOps initiatives and infrastructure development",
    tasks: [
      "Design ML pipelines",
      "Implement CI/CD",
      "Manage cloud infrastructure",
      "Optimize deployment",
    ],
    qualifications: [
      "5+ years in DevOps/MLOps",
      "Strong cloud experience",
      "Container orchestration",
      "Infrastructure as code",
    ],
    bonus: [
      "Cloud certifications",
      "ML background",
      "Open source contributions",
    ],
    moreInfoLink: "https://mlplatform.com/careers/mlops-engineer",
  },
  {
    id: 8,
    title: "AI Product Manager",
    duration: "Full-time",
    seniority: "senior",
    technologies: ["Product Management", "AI/ML", "Agile", "Analytics"],
    description: "Lead AI product development and strategy",
    companyName: "AI Products",
    companyLogo: "/companies/aiproducts.png",
    location: "Dublin, Ireland",
    sendCvTillDate: "2024-05-05",
    isRemote: true,
    aboutRole: "Drive AI product strategy and execution",
    tasks: [
      "Define product roadmap",
      "Coordinate with teams",
      "Analyze market trends",
      "Drive product success",
    ],
    qualifications: [
      "5+ years in product management",
      "AI/ML background",
      "Strong technical skills",
      "MBA preferred",
    ],
    bonus: ["Startup experience", "Technical degree", "Leadership experience"],
    moreInfoLink: "https://aiproducts.com/careers/product-manager",
  },
  {
    id: 9,
    title: "AI Ethics Researcher",
    duration: "Full-time",
    seniority: "senior",
    technologies: ["Python", "Fairness Tools", "Bias Detection", "Analytics"],
    description: "Ensure ethical AI development and deployment",
    companyName: "Ethical AI",
    companyLogo: "/companies/ethicalai.png",
    location: "Copenhagen, Denmark",
    sendCvTillDate: "2024-05-10",
    isRemote: true,
    aboutRole: "Lead AI ethics research and implementation",
    tasks: [
      "Develop fairness metrics",
      "Audit AI systems",
      "Create guidelines",
      "Research bias mitigation",
    ],
    qualifications: [
      "PhD in Ethics/AI",
      "Research experience",
      "Strong analytics",
      "Publication record",
    ],
    bonus: ["Policy experience", "Public speaking", "Diverse background"],
    moreInfoLink: "https://ethicalai.com/careers/ethics-researcher",
  },
  {
    id: 10,
    title: "Robotics AI Engineer",
    duration: "Full-time",
    seniority: "senior",
    technologies: ["Python", "ROS", "C++", "Control Systems", "PyTorch"],
    description: "Develop AI solutions for robotics",
    companyName: "Robotics AI",
    companyLogo: "/companies/roboticsai.png",
    location: "Zurich, Switzerland",
    sendCvTillDate: "2024-05-15",
    isRemote: false,
    aboutRole: "Lead robotics AI development",
    tasks: [
      "Develop control systems",
      "Implement ML algorithms",
      "Optimize performance",
      "System integration",
    ],
    qualifications: [
      "5+ years in robotics",
      "Strong programming",
      "Control systems",
      "MSc/PhD in Robotics",
    ],
    bonus: ["Hardware experience", "Patents", "Research publications"],
    moreInfoLink: "https://roboticsai.com/careers/robotics-engineer",
  },
  {
    id: 11,
    title: "AI Infrastructure Engineer",
    duration: "Full-time",
    seniority: "mid",
    technologies: ["Python", "Kubernetes", "AWS", "Terraform", "Docker"],
    description: "Build scalable AI infrastructure",
    companyName: "AI Infra",
    companyLogo: "/companies/aiinfra.png",
    location: "Helsinki, Finland",
    sendCvTillDate: "2024-05-20",
    isRemote: true,
    aboutRole: "Design and implement AI infrastructure",
    tasks: [
      "Design architecture",
      "Implement scaling",
      "Optimize performance",
      "Manage infrastructure",
    ],
    qualifications: [
      "3+ years infrastructure",
      "Cloud expertise",
      "DevOps experience",
      "System design",
    ],
    bonus: ["ML experience", "Certifications", "Open source"],
    moreInfoLink: "https://aiinfra.com/careers/infrastructure-engineer",
  },
  {
    id: 12,
    title: "AI Security Engineer",
    duration: "Full-time",
    seniority: "senior",
    technologies: ["Python", "Security", "ML", "Cryptography", "Cloud"],
    description: "Secure AI systems and infrastructure",
    companyName: "Secure AI",
    companyLogo: "/companies/secureai.png",
    location: "Oslo, Norway",
    sendCvTillDate: "2024-05-25",
    isRemote: true,
    aboutRole: "Lead AI security initiatives",
    tasks: [
      "Security assessment",
      "Implement protection",
      "Threat modeling",
      "Security training",
    ],
    qualifications: [
      "5+ years security",
      "AI/ML knowledge",
      "Security certifications",
      "MSc in Security",
    ],
    bonus: ["Research papers", "CTF experience", "Bug bounties"],
    moreInfoLink: "https://secureai.com/careers/security-engineer",
  },
  {
    id: 13,
    title: "AI Research Engineer",
    duration: "Full-time",
    seniority: "mid",
    technologies: ["Python", "PyTorch", "TensorFlow", "JAX", "Linux"],
    description: "Transform research into production AI systems",
    companyName: "Research AI",
    companyLogo: "/companies/researchai.png",
    location: "Cambridge, UK",
    sendCvTillDate: "2024-05-30",
    isRemote: true,
    aboutRole: "Bridge research and engineering in AI",
    tasks: [
      "Implement papers",
      "Develop prototypes",
      "Optimize models",
      "Research support",
    ],
    qualifications: [
      "3+ years AI/ML",
      "Strong programming",
      "Research experience",
      "MSc in CS/ML",
    ],
    bonus: ["PhD candidates", "Publications", "Open source"],
    moreInfoLink: "https://researchai.com/careers/research-engineer",
  },
  {
    id: 14,
    title: "AI Technical Writer",
    duration: "Full-time",
    seniority: "mid",
    technologies: ["Technical Writing", "ML", "Documentation", "Git"],
    description: "Create comprehensive AI documentation",
    companyName: "AI Docs",
    companyLogo: "/companies/aidocs.png",
    location: "Austin, USA",
    sendCvTillDate: "2024-06-05",
    isRemote: true,
    aboutRole: "Lead technical documentation for AI products",
    tasks: [
      "Write documentation",
      "Create tutorials",
      "API documentation",
      "Technical blogs",
    ],
    qualifications: [
      "3+ years tech writing",
      "AI/ML understanding",
      "Strong communication",
      "Documentation tools",
    ],
    bonus: ["Programming skills", "Blog portfolio", "Community management"],
    moreInfoLink: "https://aidocs.com/careers/technical-writer",
  },
  {
    id: 15,
    title: "AI Education Specialist",
    duration: "Full-time",
    seniority: "mid",
    technologies: ["Python", "ML", "Education", "Content Creation"],
    description: "Develop AI education programs",
    companyName: "AI Learn",
    companyLogo: "/companies/ailearn.png",
    location: "Singapore",
    sendCvTillDate: "2024-06-10",
    isRemote: true,
    aboutRole: "Create and deliver AI education content",
    tasks: [
      "Develop curriculum",
      "Create content",
      "Conduct workshops",
      "Student mentoring",
    ],
    qualifications: [
      "3+ years teaching",
      "AI/ML expertise",
      "Content creation",
      "Communication skills",
    ],
    bonus: ["Online teaching", "Course portfolio", "Multiple languages"],
    moreInfoLink: "https://ailearn.com/careers/education-specialist",
  },
];

export default function Home() {
  return (
    <section className="relative min-h-screen w-full bg-[#01070a]">
      <Image
        src={HeroBackground}
        alt="Hero Background"
        className="w-full h-[90vh] object-fill absolute"
      />
      <div className="container mx-auto h-full flex flex-col justify-evenly relative z-10">
        <div className="flex-col px-8 space-y-8 text-white">
          <p className="text-6xl font-bold max-w-lg">
            Turn AI research into real-world impact
          </p>
          <p className="text-3xl font-medium">
            Looking to post a job or explore AI-powered CV generation?
          </p>
        </div>

        <div className="rounded-lg p-8 mt-8">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Available Positions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {job.title}
                    </h3>
                    <p className="text-gray-400">{job.companyName}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      job.seniority === "senior"
                        ? "bg-purple-900 text-purple-200"
                        : job.seniority === "mid"
                        ? "bg-blue-900 text-blue-200"
                        : "bg-green-900 text-green-200"
                    }`}
                  >
                    {job.seniority}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-gray-300 mb-2">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 px-2 py-1 rounded-md text-sm text-gray-300 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  {job.isRemote && (
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      Remote
                    </span>
                  )}
                </div>

                <a
                  href={job.moreInfoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block w-full text-center bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
