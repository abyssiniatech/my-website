import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surafel Mengist — Portfolio",
  description: "Full-Stack Developer • Video Editor • Graphic Designer • Teacher",
  other: {
    "theme-color": "#0b1220"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
