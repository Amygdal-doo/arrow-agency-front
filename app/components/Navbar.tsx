"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "./LoginForm";
import Modal from "./Modal";
import RegistrationForm from "./RegistrationForm";
import { signOut, useSession } from "next-auth/react";
import { useProfile } from "@/providers/ProfileInfoProvider";
import { usePathname, useRouter } from "next/navigation";
import CVForm from "./CVForm";
import { useApplicants } from "@/providers/ApplicantsProvider";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { profile } = useProfile();

  const { applicants } = useApplicants();

  const [showCVModal, setShowCVModal] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const getInitials = (firstName = "", lastName = "") => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const NavLinks = () => (
    <>
      <Link href="/jobs" onClick={() => setIsMenuOpen(false)}>
        <li
          className={`font-medium text-lg xl:text-xl transition-colors ${
            pathname === "/jobs" || pathname.startsWith("/jobs/")
              ? "text-orange-500 font-semibold"
              : "text-white hover:text-orange-500"
          }`}
        >
          Jobs
        </li>
      </Link>
      <Link href="/for-talent" onClick={() => setIsMenuOpen(false)}>
        <li
          className={`font-medium text-lg xl:text-xl transition-colors ${
            pathname === "/for-talent"
              ? "text-orange-500 font-semibold"
              : "text-white hover:text-orange-500"
          }`}
        >
          For Talent
        </li>
      </Link>
      {status === "authenticated" && session?.user?.accessToken && (
        <Link href="/applicant" onClick={() => setIsMenuOpen(false)}>
          <li
            className={`font-medium text-lg xl:text-xl transition-colors ${
              pathname === "/applicant" || pathname.startsWith("/applicant/")
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-500"
            }`}
          >
            Applicants
          </li>
        </Link>
      )}
      {status === "authenticated" && session?.user?.accessToken && (
        <Link href="/companies" onClick={() => setIsMenuOpen(false)}>
          <li
            className={`font-medium text-lg xl:text-xl transition-colors ${
              pathname === "/companies" || pathname.startsWith("/companies/")
                ? "text-orange-500 font-semibold"
                : "text-white hover:text-orange-500"
            }`}
          >
            Companies
          </li>
        </Link>
      )}
      <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
        <li
          className={`font-medium text-lg xl:text-xl transition-colors ${
            pathname === "/pricing"
              ? "text-orange-500 font-semibold"
              : "text-white hover:text-orange-500"
          }`}
        >
          Pricing
        </li>
      </Link>
    </>
  );

  const AuthButtons = () => (
    <>
      {status === "authenticated" && session?.user?.accessToken && (
        <>
          {/* Desktop Dropdown */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full text-sm font-bold hover:from-gray-600 hover:to-gray-500 transition-all"
            >
              {profile?.user
                ? getInitials(profile.user.firstName, profile.user.lastName)
                : getInitials(
                    session.user.profile?.firstName,
                    session.user.profile?.lastName
                  )}
            </button>

            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-xl shadow-lg py-1 z-50 border border-gray-700">
                <button
                  onClick={() => {
                    router.push("/profile");
                    setShowProfileDropdown(false);
                  }}
                  className="block w-full font-semibold text-left px-4 py-2 text-gray-200 hover:bg-gray-800 rounded-t-xl transition-colors"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    setShowCVModal(true);
                    setShowProfileDropdown(false);
                  }}
                  className="block w-full text-left font-semibold px-4 py-2 text-gray-200 hover:bg-gray-800 transition-colors"
                >
                  Add New Applicant
                </button>
                <div className="h-px bg-gray-700 my-1" />
                <button
                  onClick={() => {
                    signOut();
                    router.push("/");
                    setShowProfileDropdown(false);
                  }}
                  className="block w-full text-left font-semibold px-4 py-2 text-red-400 hover:bg-gray-800 rounded-b-xl transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Profile Links */}
          <div className="lg:hidden flex flex-col w-full space-y-4">
            <button
              onClick={() => {
                router.push("/profile");
                setIsMenuOpen(false);
              }}
              className="w-full text-left font-semibold px-4 py-3 text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all"
            >
              Profile
            </button>
            <button
              onClick={() => {
                setShowCVModal(true);
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 font-semibold text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all"
            >
              Add New Applicant
            </button>
            <button
              onClick={() => {
                signOut();
                router.push("/");
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 font-semibold text-red-500 bg-red-500/10 rounded-xl hover:bg-red-500/20 transition-all"
            >
              Logout
            </button>
          </div>
        </>
      )}

      {/* Only show login button when not authenticated */}
      {status !== "authenticated" && (
        <button
          onClick={() => {
            setShowLoginModal(true);
            setIsMenuOpen(false);
          }}
          className="w-full md:w-auto bg-white/10 px-6 py-3 md:px-3 lg:px-6 md:py-2 rounded-xl md:rounded-md text-white font-bold hover:bg-white/20 transition-all"
        >
          Login
        </button>
      )}

      <Link
        href="/post-job"
        className="w-full md:w-auto"
        onClick={() => setIsMenuOpen(false)}
      >
        <button className="w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 px-6 md:px-3 lg:px-6 py-3 md:py-2 rounded-xl md:rounded-md text-white font-bold transition-all">
          Post a Job
        </button>
      </Link>
    </>
  );

  return (
    <nav className="w-full bg-black p-1 fixed top-0 left-0 right-0 h-20 md:h-24 z-[999] shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-full px-1 md:px-4">
        <div className="flex items-center md:space-x-16">
          <Link href="/">
            <Image
              src={"/arrow.png"}
              alt="Arrow"
              height={100}
              width={100}
              className="w-16 sm:w-20 md:w-24"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-5 xl:space-x-10">
            <NavLinks />
          </ul>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <AuthButtons />
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900">
            <div className="flex flex-col h-full pt-24 px-6">
              {/* Add logo and close button in the same line */}
              <div className="absolute top-2 left-2 right-2 flex justify-between items-center">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image
                    src={"/arrow.png"}
                    alt="Arrow"
                    height={100}
                    width={100}
                    className="w-16"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 rounded-full bg-white/10"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <ul className="space-y-8 mb-12">
                <NavLinks />
              </ul>

              <div className="mt-auto mb-12 flex flex-col space-y-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent mb-8" />
                <AuthButtons />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login/Register Modal */}
      <Modal
        isOpen={showLoginModal}
        onClose={() => {
          setShowLoginModal(false);
          setShowLoginForm(false);
        }}
      >
        {!showLoginForm ? (
          <LoginForm
            toggleContent={toggleLoginForm}
            onClose={() => setShowLoginModal(false)}
          />
        ) : (
          <RegistrationForm toggleContent={toggleLoginForm} />
        )}
      </Modal>

      <Modal isOpen={showCVModal} onClose={() => setShowCVModal(false)}>
        {profile?.user?.role === "USER" &&
        applicants &&
        applicants.length >= 1 ? (
          <div className="bg-gray-800 p-8 rounded-xl w-full">
            <div className="text-center px-2 lg:px-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Premium Subscription Required
              </h3>
              <p className="text-gray-300 mb-8">
                You have reached the maximum number of applicants for a free
                account. Upgrade to premium to add unlimited applicants and
                access more features.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    router.push("/pricing");
                    setShowCVModal(false);
                  }}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-2 md:px-6 rounded-lg transition-colors text-center"
                >
                  Subscribe
                </button>
                <button
                  onClick={() => setShowCVModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-3 px-2 md:px-6 rounded-lg transition-colors text-center"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <CVForm onClose={() => setShowCVModal(false)} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
