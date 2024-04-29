import type { Metadata } from "next";
import "./globals.css";
import "./globalicon.css";

export const metadata: Metadata = {
  title: "Shiv Bhandar",
  description: "Shiv Bhandar by Khushi Kumari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
