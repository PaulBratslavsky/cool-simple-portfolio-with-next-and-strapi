import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { getGlobalPageData } from "@/loaders";
import { notFound } from "next/navigation";
import { GlobalPageProps } from "@/types";
import Navbar from "@/components/navbar";
import Footer from "@/components/navbar/footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Shadcn UI Portfolio",
  description:
    "A beautiful portfolio template built with Shadcn UI, Tailwind CSS 4, and Next.js 15",
};

async function loader(): Promise<GlobalPageProps> {
  try {
    const data = await getGlobalPageData();
    if (!data?.data) return notFound();
    return data.data as GlobalPageProps;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalPageData = await loader();

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar {...globalPageData} />
          <main>{children}</main>
          <Footer {...globalPageData} />
        </ThemeProvider>
      </body>
    </html>
  );
}
