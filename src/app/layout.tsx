import localFont from "next/font/local";
import "./globals.css";
import Menu from "./components/Menu/page";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--roboto",
  weight: ["100", "300", "400"],
  style: "normal",
  subsets: ["latin"]
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Menu op1="page 1" op2="page 2" op3="page 3" op4="page 4"/>
        {children}
      </body>
    </html>
  );
}
