import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import { GlobalProvider } from "@/contexts/GlobalContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Videfly",
  description: "create your brand video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.className} ${poppins.className} antialiased`}
      >
        <GlobalProvider>
          <div className="flex w-full">
            <div className="hidden lg:inline w-1/6">
              <SideBar />
            </div>
            <div className="w-full lg:w-5/6">
              <Navbar />
              {children}
            </div>
          </div>
        </GlobalProvider>
      </body>
    </html>
  );
}
