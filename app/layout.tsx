import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spartaco Repuestos | Repuestos Automotrices Chile",
  description: "Repuestos automotrices para vehículos chinos. Maxus, Chery, JAC, BYD, DFSK, Geely y más. Envíos a todo Chile.",
  keywords: "repuestos, automotriz, Maxus, Chery, JAC, BYD, DFSK, Geely, Chile",
  openGraph: {
    title: "Spartaco Repuestos",
    description: "Repuestos automotrices para vehículos chinos. Envíos a todo Chile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Barlow:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
