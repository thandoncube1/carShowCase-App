import { Navbar, Footer } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Trader",
  description: "Discover the best car in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
