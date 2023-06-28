import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Shopping Cart",
  description: "Shopping Cart to demonstrate interception routes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
