import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Machaé | Matcha & Dessert Kitchen",
  description: "A little matcha, a lot of happiness. Discover Machaé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
