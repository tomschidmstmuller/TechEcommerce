import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "@/components/LoadingScreen";

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

async function getAuthWrapper() {
  if (process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    const { ClerkProvider } = await import("@clerk/nextjs");
    const { ClerkAuthProvider } = await import("@/components/ClerkAuthProvider");
    return { ClerkProvider, ClerkAuthProvider };
  }
  const { AuthProvider } = await import("@/components/AuthProvider");
  return { AuthProvider };
}

export default async function RootLayout({ children }) {
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (hasClerk) {
    const { ClerkProvider } = await import("@clerk/nextjs");
    const { ClerkAuthProvider } = await import("@/components/ClerkAuthProvider");
    return (
      <ClerkProvider>
        <ClerkAuthProvider>
          <html lang="en">
            <body className={`${notoSansJP.variable} ${inter.variable} font-body antialiased text-jp-navy bg-jp-bg`}>
              <LoadingScreen />
              <Toaster />
              <AppContextProvider>
                {children}
              </AppContextProvider>
            </body>
          </html>
        </ClerkAuthProvider>
      </ClerkProvider>
    );
  }

  const { AuthProvider } = await import("@/components/AuthProvider");
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${notoSansJP.variable} ${inter.variable} font-body antialiased text-jp-navy bg-jp-bg`}>
          <LoadingScreen />
          <Toaster />
          <AppContextProvider>
            {children}
          </AppContextProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
