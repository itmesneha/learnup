import { Fugaz_One, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "LearnUp",
  description: "A platform to learn anything - structured and free.",
};

export default function RootLayout({ children }) {
  const header = (
    <header className = {'p-4 sm:p-8 flex items-center justify-between gap-4'}>
      <h1 className = {'text-base sm:text-lg textGradient ' + fugaz.className}>LearnUp</h1>
    </header>
  )

  const footer = (
    <footer className = {'p-4 sm:p-8'}>
      Made with ❤️ @ <a className="textGradient" href=" https://github.com/itmesneha/learnup">LearnUp</a> 
    </footer>
  )

  return (
    <html lang="en">
      <body className={'w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-600 ' + inter.className}> 
       {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
