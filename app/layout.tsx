import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: [ "300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});


export const metadata: Metadata = {
  title: "CodeOverflow",
  description:
    "A Community-driven platform for asking and answering programming questions.Get help, share knowledge, and collaborate with developers from around the world.Explore topics in web development, mobile app development, data structures, algorithms , machine learning, and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary: 'primary-gradient',
        footerActionLink: 'primary-text-gradient hover:text-primary-500',
      }
    }}>
      <html lang="en">
        <h1 className="h1-bold">This is for test font</h1>
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
