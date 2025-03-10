import NextAuthProvider from "@/providers/NextAuthProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import { ProfileProvider } from "@/providers/ProfileInfoProvider";
import { ApplicantsProvider } from "@/providers/ApplicantsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <ProfileProvider>
            <ApplicantsProvider>
              <div className="flex flex-col min-h-screen bg-[#0a0a23]">
                <Navbar />
                <main className="w-full">{children}</main>
                <footer className="w-full bg-[#01070a] py-6 border-t border-gray-800">
                  <div className="container mx-auto px-8 flex justify-between">
                    <div></div>
                    <div>
                      <a
                        href="mailto:info@digital-arrow.agency"
                        className="text-gray-400 hover:text-orange-600 transition-colors text-sm"
                      >
                        info@digital-arrow.agency
                      </a>
                    </div>
                    <div>
                      <ul className="text-gray-400 flex space-x-4">
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                      </ul>
                    </div>
                  </div>
                </footer>
              </div>
            </ApplicantsProvider>
          </ProfileProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
