"use client";

import { use } from "react";

import { PublicCVProvider } from "@/providers/PublicCvProvider";

export default function PublicCvLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const { id } = use(params);

  return <PublicCVProvider id={id}>{children}</PublicCVProvider>;
}
