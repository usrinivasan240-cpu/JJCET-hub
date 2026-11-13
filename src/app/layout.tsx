import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteMeta } from "@/data/content";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font" });

export const metadata: Metadata = {
  title: siteMeta.name,
  description: siteMeta.description,
  keywords: [
    "JJCET-STIF",
    "JJCET Sowdambikaa Technology Incubation Foundation",
    "StartupTN",
    "pre-incubation centre",
    "Trichy incubation",
    "JJCET",
  ],
  openGraph: {
    title: siteMeta.name,
    description: siteMeta.description,
    type: "website",
    siteName: "JJCET-STIF",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.name,
    description: siteMeta.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JJCET Sowdambikaa Technology Incubation Foundation",
              alternateName: "JJCET-STIF",
              email: siteMeta.email,
              telephone: siteMeta.phones.join(", "),
              address: {
                "@type": "PostalAddress",
                streetAddress: "J.J. College of Engineering and Technology, Ammapettai",
                addressLocality: "Tiruchirappalli",
                addressRegion: "Tamil Nadu",
                postalCode: "620009",
                addressCountry: "IN",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
