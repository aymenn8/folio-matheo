import { Archivo, Pixelify_Sans, Aldrich } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
  display: "swap",
});

const jacquesFrancois = localFont({
  src: "../public/fonts/JacquesFrancois-Regular.ttf",
  variable: "--font-jacques-francois",
  display: "swap",
});

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Mat - FOLIO",
  description: "my personal folio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${pixelifySans.variable} ${jacquesFrancois.variable} ${aldrich.variable}`}
    >
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}
