import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ادرس في جورجيا",
  description: "خدمات القبول الجامعي للطلاب العرب في جورجيا",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}