import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SupplyNex",
  description: "AL based website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/jalaali-js/dist/jalaali.js"
          strategy="afterInteractive"
        />
        {/* Raychat Config Script */}
        <Script id="raychat-config" strategy="afterInteractive">
          {`
            window.RAYCHAT_TOKEN = "88d9aea6-fd2e-4ecc-a96c-02ad53fb76ae";
            window.LOAD_TYPE = "SEO_FRIENDLY";
          `}
        </Script>
        {/* Raychat Widget Loader */}
        <Script
          src="https://widget-react.raychat.io/install/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer autoClose={5000} hideProgressBar={false} />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
