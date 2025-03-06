"use client";

import { use } from "react";
import { ApplicantProvider } from "@/providers/ApplicantDetailsProvider";

export default function ApplicantDetailsLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const { id } = use(params); // Unwrap params using `use()`

  return <ApplicantProvider id={id}>{children}</ApplicantProvider>;
}
