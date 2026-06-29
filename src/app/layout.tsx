import MainHeader from "../components/layout/main-header";
import "./globals.css";
import { LayoutProps } from "../types";
import localFont from "next/font/local";
import MainFooter from "../components/layout/main-footer";
import { CartProvider } from "../context/CartContext";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../context/AuthContext";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const Satoshi = localFont({
  src: [
    { path: "../../public/font/Satoshi-Bold.otf", weight: "700" },
    { path: "../../public/font/Satoshi-Medium.otf", weight: "500" },
    { path: "../../public/font/Satoshi-Regular.otf", weight: "400" },
  ],
  variable: "--font-satoshi",
});
const Integral = localFont({
  src: "../../public/font/Fontspring-DEMO-integralcf-bold.otf",
  variable: "--font-integral",
});
export const metadata = {
  title: "SHOP.CO",
  description: "Your one-stop fashion destination",
};
export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${Satoshi.variable} ${Integral.variable}`}>
        <AuthProvider>
          <CartProvider>
            <MainHeader />
            {children}
            <MainFooter />
          </CartProvider>
        </AuthProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
