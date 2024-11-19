import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";


import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CarePulse",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("Font variable:", fontSans.variable); // Debug: Ensure consistent output on SSR and CSR

  return (
    <html lang="en" style={{colorScheme: 'dark'}}>
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased dark", // Ensure 'dark' is applied statically
          fontSans.variable
        )}
      >
       {children}
      </body>
    </html>
  );
}
