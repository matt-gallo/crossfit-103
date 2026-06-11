import type { Metadata } from "next";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModalProvider } from "@/components/Modals";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Hero / display headline font — matches the live site's --headlinefont.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crossfit103.com"),
  title: "CrossFit 103 | Possibly the Best Workout in Staten Island",
  description:
    "Get in the best shape of your life at CrossFit 103. Expert coaching, proven training, and a community that pushes you to keep going. CrossFit affiliate since 2016 and an official HYROX affiliate partner.",
  openGraph: {
    title: "CrossFit 103 | Staten Island",
    description:
      "Expert coaching, proven training, and a community that pushes you further—every single session.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-ink">
        <ModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
