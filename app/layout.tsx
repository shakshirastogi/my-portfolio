import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sakshi Rastogi | Full Stack Developer",
  description: "Portfolio showcasing projects, skills, and experience of Sakshi Rastogi.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300">
        {children}
      </body>
    </html>
  );
}
