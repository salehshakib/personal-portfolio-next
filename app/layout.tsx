import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saleh Shakib | Personal Portfolio",
  description:
    "Hey, I am a fresh graduate from Ahsanullah University of Science and Technlogy with a Bachelor of Science degree on Computer Science and Engineering ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
