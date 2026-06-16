import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Club Nautical | Superyacht Charter Australia",
  description:
    "Australia's leading luxury superyacht charter broker. Private crewed yacht charters across Sydney, Gold Coast, Brisbane, the Whitsundays and the South Pacific.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
