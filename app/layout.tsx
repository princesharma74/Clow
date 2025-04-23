import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css"

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clow",
  description: "Build Ideas, Not Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={font.className}>
          {/* Add Providers below */}
            {children}
        </body>
      </html>
  );
}