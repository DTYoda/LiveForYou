import "./globals.css";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "LiveForYou",
  description: "",
  icons: {
    icon: "/icon.png", // /public path
  },
  themeColor: "black",
  other: {
    colorScheme: "dark", // Adds <meta name="color-scheme" content="dark">
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" className="">
      <body className="min-h-screen h-fit w-[100vw] m-0 p-0">{children}</body>
    </html>
  );
}
