import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Yeremallu Foundation | Empowering Northern Ghana",
    template: "%s | Yeremallu Foundation"
  },
  description: "Empowering communities in Northern Ghana through education, health awareness, and acts of service. Join us in making a lasting impact through mentorship, diabetes outreach, and community giving.",
  keywords: ["NGO", "Ghana", "Education", "Health", "Diabetes", "Community", "Mentorship", "Northern Ghana", "Nonprofit"],
  authors: [{ name: "Yeremallu Foundation" }],
  creator: "Yeremallu Foundation",
  publisher: "Yeremallu Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yeremallufoundation.org",
    siteName: "Yeremallu Foundation",
    title: "Yeremallu Foundation | Empowering Northern Ghana",
    description: "Empowering communities in Northern Ghana through education, health awareness, and acts of service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yeremallu Foundation - Empowering Northern Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yeremallufound",
    title: "Yeremallu Foundation | Empowering Northern Ghana",
    description: "Empowering communities in Northern Ghana through education, health awareness, and acts of service.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
