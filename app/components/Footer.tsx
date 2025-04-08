"use client";

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { useSession } from "next-auth/react";

export default function Footer() {
  const { status } = useSession();

  const AuthLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    if (status === "authenticated") {
      return (
        <Link
          href={href}
          className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
        >
          {children}
        </Link>
      );
    }
    return (
      <div className="flex items-center gap-2">
        <span className="text-gray-600 text-sm cursor-not-allowed">
          {children}
        </span>
        <span className="text-orange-500/70 text-xs">Members only</span>
      </div>
    );
  };

  return (
    <footer className="w-full bg-[#01070a] pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Digital Arrow</h3>
            <p className="text-gray-400 text-sm">
              Connecting AI talent with innovative companies worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/digital-arrow-agency/"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">For Companies</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/post-job"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <AuthLink href="/companies">Browse Companies</AuthLink>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* For Talent */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">For Talent</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/for-talent"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Create CV
                </Link>
              </li>
              <li>
                <AuthLink href="/profile">Profile</AuthLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <p className="text-gray-400 text-sm">
              Have questions? Get in touch with us.
            </p>
            <a
              href="mailto:info@digital-arrow.agency"
              className="text-orange-500 hover:text-orange-400 transition-colors text-sm"
            >
              info@digital-arrow.agency
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Digital Arrow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
