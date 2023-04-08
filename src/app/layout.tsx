import "./globals.css";
import { Inter, Orbitron, Quicksand } from "next/font/google";
import Navbar from "@/components/navigation/NavBar";
import Header from "@/components/navigation/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable} ${quicksand.variable}`}
    >
      <body>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
