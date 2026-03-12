import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const banglaFont = localFont({
  src: "../fonts/mayaboti-normal.ttf",
});

export const metadata = {
  title: {
    default: "Kids Zone",
    template: "%s | Kids Zone",
  },
  description:
    "Discover premium educational toys designed for cognitive development. From number boards to logical thinking tools, we make learning fun.",
  metadataBase: new URL("https://kids-zone-iota.vercel.app/"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kids zone | Premium Educational Toys",
    description:
      "Shop the best educational toys for your child's growth. Safe, non-toxic, and effective learning tools.",
    url: "https://kids-zone-iota.vercel.app/",
    siteName: "Kids Learning Store",
    images: [
      {
        url: "https://i.ibb.co.com/3ym2JxH9/Screenshot-790.png", // Homepage Preview
        width: 1200,
        height: 630,
        alt: "Kids Learning Store Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids zone",
    description: "Premium educational toys for your child's growth.",
    images: ["https://i.ibb.co.com/3ym2JxH9/Screenshot-790.png"],
  },
  icons: {
    icon: "https://i.ibb.co.com/Jw0Z0Sxm/logo.webp",
    apple: "https://i.ibb.co.com/Jw0Z0Sxm/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
