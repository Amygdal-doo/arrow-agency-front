"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "./LoginForm";
import Modal from "./Modal";
import RegistrationForm from "./RegistrationForm";
import { signOut, useSession } from "next-auth/react";
import { useProfile } from "@/providers/ProfileInfoProvider";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { profile } = useProfile();
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
      <Link href="/for-talent">
        <li className="text-white hover:underline font-medium text-lg lg:text-xl md:font-medium hover:text-orange-500 transition-colors">
          Jobs
        </li>
      </Link>
      <Link href="/for-talent">
        <li className="text-white hover:underline font-medium text-lg lg:text-xl md:font-medium hover:text-orange-500 transition-colors">
          For Talent
        </li>
      </Link>
      {status === "authenticated" && session?.user?.accessToken && (
        <Link href="/applicant">
          <li className="text-white hover:underline font-medium text-lg lg:text-xl md:font-medium hover:text-orange-500 transition-colors">
            Applicants
          </li>
        </Link>
      )}
    </>
  );

  const AuthButtons = () => (
    <>
      {status === "authenticated" && session?.user?.accessToken && (
        <button
          onClick={() => router.push("/profile")}
          className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full text-sm font-bold hover:from-gray-600 hover:to-gray-500 transition-all"
        >
          {profile?.user
            ? getInitials(profile.user.firstName, profile.user.lastName)
            : getInitials(
                session.user.profile?.firstName,
                session.user.profile?.lastName
              )}
        </button>
      )}
      <button
        onClick={() => {
          if (status === "authenticated" && session?.user?.accessToken) {
            signOut();
          } else {
            setShowLoginModal(true);
          }
        }}
        className="w-full md:w-auto bg-white/10 backdrop-blur-sm px-6 py-3 md:px-3 lg:px-6 md:py-2 rounded-xl md:rounded-md text-white font-bold hover:bg-white/20 transition-all"
      >
        {status === "authenticated" && session?.user?.accessToken
          ? "Log out"
          : "Login"}
      </button>
      <Link href="/post-job" className="w-full md:w-auto">
        <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 px-6 md:px-3 lg:px-6 py-3 md:py-2 rounded-xl md:rounded-md text-white font-bold transition-all">
          Post a Job
        </button>
      </Link>
    </>
  );

  return (
    <nav className="w-full bg-black p-1 fixed top-0 left-0 right-0 h-24 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <div className="flex items-center md:space-x-16">
          <Link href="/">
            <Image
              src={"/arrow.png"}
              alt="Arrow"
              height={3000}
              width={4000}
              className="w-24"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-10">
            <NavLinks />
          </ul>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <AuthButtons />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
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
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-gray-900/95 backdrop-blur-lg">
            <div className="flex flex-col h-full pt-28 px-6">
              <ul className="space-y-8 mb-12">
                <NavLinks />
              </ul>

              <div className="mt-auto mb-12 flex flex-col space-y-4">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-500/20 to-transparent mb-8" />
                <AuthButtons />
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-7 right-4 text-white p-2 rounded-full bg-white/10 backdrop-blur-sm"
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
    </nav>
  );
};

export default Navbar;
