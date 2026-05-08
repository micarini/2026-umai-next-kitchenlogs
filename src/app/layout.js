import { DM_Sans, Fraunces, Oswald, Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Kitchen Logs",
  description: "TP1 - Recetas con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${oswald.variable} ${roboto.variable} layout-html`}
    >
      <body className="layout-body">
        {children}
        <Footer />
      </body>
    </html>
  );
}
