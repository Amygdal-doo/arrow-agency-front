"use client";

import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="bg-[#01070a]">
      <HeroSection />

      {/* How It Works Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Submit Your Profile",
              description:
                "Create your comprehensive AI-enhanced profile showcasing your expertise, experience, and career aspirations. Our intelligent system analyzes your skills and preferences to create a standout professional profile.",
              icon: "📝",
            },
            {
              title: "AI Matching",
              description:
                "Our sophisticated AI algorithms analyze thousands of positions to find your perfect match. We consider technical skills, culture fit, and career growth potential to ensure optimal job recommendations.",
              icon: "🎯",
            },
            {
              title: "Get Hired",
              description:
                "Connect with leading AI companies and startups. Our streamlined process helps you showcase your talents, prepare for interviews, and negotiate offers to land your ideal role in the AI industry.",
              icon: "🚀",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-32 bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center">
            {[
              {
                number: "100+",
                title: "Companies",
                description:
                  "Partner companies actively hiring through our platform",
              },
              {
                number: "95%",
                title: "Match Rate",
                description:
                  "Success rate in matching candidates with their ideal roles",
              },
              {
                number: "48h",
                title: "Average Response",
                description: "Time from application to first interview",
              },
              {
                number: "200+",
                title: "Placements",
                description: "Successful placements in the last quarter",
              },
              {
                number: "100%",
                title: "Career Growth",
                description:
                  "Personalized development plans and mentorship opportunities",
              },
              {
                number: "50+",
                title: "Global Network",
                description:
                  "Countries with active AI opportunities and talent network",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1f2937",
                  transition: { duration: 0.2 },
                }}
                className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all shadow-lg hover:shadow-2xl border border-gray-700/50"
              >
                <h3 className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </h3>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {stat.title}
                </h4>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 container mx-auto px-4 relative overflow-hidden"
      >
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white text-center mb-12 relative z-10"
        >
          Why Choose Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "AI-Powered Matching",
              description:
                "Our advanced algorithms analyze your profile in real-time to ensure the perfect career fit, with 95% accuracy.",
              icon: "🎯",
            },
            {
              title: "Elite Talent Pool",
              description:
                "Join our exclusive network of top 1% AI professionals, carefully vetted and ready for impactful roles.",
              icon: "⭐",
            },
            {
              title: "Lightning-Fast Placement",
              description:
                "Experience our industry-leading 48-hour matching process, reducing hiring time by 75%.",
              icon: "⚡",
            },
            {
              title: "Global Opportunities",
              description:
                "Access premium AI positions worldwide, with remote opportunities in leading tech hubs.",
              icon: "🌍",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
                backgroundColor: "rgba(31, 41, 55, 0.95)",
                transition: { duration: 0.3 },
              }}
              className="bg-gray-800/90 p-8 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/50 transition-all shadow-lg hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/hero.jpg')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-8 leading-tight"
          >
            Ready to Transform Your <br />
            <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              Career Journey?
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Join our elite network of AI professionals and unlock unprecedented
            opportunities. Our AI-powered platform matches you with roles that
            align perfectly with your expertise and aspirations.
          </motion.p>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="bg-white text-orange-600 px-12 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-colors relative group overflow-hidden"
          >
            <span className="relative z-10">Launch Your Career</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "AI Research Engineer",
              company: "TechVision AI",
              image: "https://i.pravatar.cc/150?img=1",
              quote:
                "Arrow Agency helped me find a role that perfectly matches my expertise in computer vision. The AI matching was spot-on!",
            },
            {
              name: "Michael Rodriguez",
              role: "Machine Learning Lead",
              company: "DataFlow Systems",
              image: "https://i.pravatar.cc/150?img=8",
              quote:
                "Within 48 hours of submitting my profile, I was interviewing with top AI companies. Now I'm leading an amazing team.",
            },
            {
              name: "Emily Watson",
              role: "NLP Specialist",
              company: "AI Solutions Corp",
              image: "https://i.pravatar.cc/150?img=3",
              quote:
                "The personalized matching process made job hunting effortless. I found my dream role in AI research within weeks.",
            },
          ].map((story, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-lg text-center"
            >
              {/* <Image
                width={3000}
                height={3000}
                src={story.image}
                alt={story.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-orange-500"
              /> */}
              <p className="text-gray-400 italic mb-6">
                &quot;{story.quote}&quot;
              </p>
              <h3 className="text-xl font-bold text-white mb-1">
                {story.name}
              </h3>
              <p className="text-orange-500 mb-1">{story.role}</p>
              <p className="text-gray-400">{story.company}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Business Acceleration Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to accelerate your business with AI?
          </h2>
          <p className="text-xl text-white mb-8">
            Talk to one of our solutions architects and start innovating with
            AI-powered talent.
          </p>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-md font-bold hover:bg-orange-700 transition-colors">
            Get Started
          </button>
        </div>
      </motion.section>
    </main>
  );
}
