export const metadata = { title: "Julian Wiser", description: "Portfolio of Julian Reed Wiser" };
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
