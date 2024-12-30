// import { draftMode } from "next/headers";
import { Inter, Overpass } from "next/font/google";

import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className={overpass.className} style={{ background: "#002470" }}>
        {/* {isEnabled && <PreviewNotice />} */}
        {/* <Navigation /> */}
        <Header />
        <div className="2xl:pt-0 pt-[100px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
