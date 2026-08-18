import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
  variable: '--font-noto-jp',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "QuickCart — Premium Electronics",
  description: "Premium electronics and gaming store. Discover the latest in technology.",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <body className={`${notoSansJP.variable} ${inter.variable} font-body antialiased text-jp-navy bg-jp-bg`}>
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
    </Providers>
  );
}
