import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDefault } from "@/components/navbar/Nav";
import {SidebarWithSearch } from "@/components/sidebar/SideBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sidebar and Navbar",
  description:
    "A simple next app: Navbar and Sidebar Layout",
  keywords: [
    "Sidebar",
    "Navbar",
    "next js",
  ],
  openGraph: {
    icon: "/logo.png",
    images:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://sidebarandnavbar.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen">
          <aside className=" shadow-sm -translate-x-80 fixed inset-0 z-50 w-72 my-4 ml-4 h-[calc(100vh-32px)]  transition-transform duration-300 xl:translate-x-0">
            <SidebarWithSearch/>
          </aside>
          <div className="p-4 xl:ml-80 flex flex-col items-center justify-center">
            <NavbarDefault />
            {children}
          <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
