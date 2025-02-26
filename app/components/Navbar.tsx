"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoginForm from "./LoginForm";
import Modal from "./Modal";
import RegistrationForm from "./RegistrationForm";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <nav className="w-full bg-black p-1">
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
          </ul>
        </div>

        <div className="space-x-2">
          <button
            onClick={() => setShowLoginModal(true)}
            className="bg-white px-6 py-2 rounded-md text-[#0a0a23] font-bold"
          >
            Login
          </button>

          <Link href="/post-job">
            <button
              className="bg-orange-600 hover:bg-orange-400 px-6 py-2 rounded-md text-white font-bold"
            >
              Post a Job
            </button>
          </Link>
        </div>
      </div>

      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        {showLoginForm ? (
          <LoginForm toggleContent={toggleLoginForm} />
        ) : (
          <RegistrationForm toggleContent={toggleLoginForm} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
