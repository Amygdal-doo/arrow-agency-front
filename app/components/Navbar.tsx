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

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const getInitials = (firstName = "", lastName = "") => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <nav className="w-full bg-black p-1">
      {/* <pre>{JSON.stringify(profile, null, 2)}</pre> */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-16">
          <Link href="/">
            <Image
              src={"/arrow.png"}
              alt="Arrow"
              height={3000}
              width={4000}
              className="w-24"
            />
          </Link>

          <ul className="flex space-x-10">
            <Link href="/for-talent">
              <li className="text-white hover:underline font-medium text-xl">
                Jobs
              </li>
            </Link>
            <Link href="/for-talent">
              <li className="text-white hover:underline font-medium text-xl">
                For Talent
              </li>
            </Link>
            <Link href="/applicant">
              <li className="text-white hover:underline font-medium text-xl">
                Applicants
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {status === "authenticated" && session?.user?.accessToken && (
            <button
              onClick={() => router.push("/profile")}
              className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white rounded-full text-sm font-bold"
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
            className="bg-white px-6 py-2 rounded-md text-[#0a0a23] font-bold"
          >
            {status === "authenticated" && session?.user?.accessToken
              ? "Log out"
              : "Login"}
          </button>

          <Link href="/post-job">
            <button className="bg-orange-600 hover:bg-orange-400 px-6 py-2 rounded-md text-white font-bold">
              Post a Job
            </button>
          </Link>
        </div>
      </div>

      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        {showLoginForm ? (
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
