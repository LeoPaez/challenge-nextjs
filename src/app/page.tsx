import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <header className="flex flex-col">
        <nav className="flex justify-end pt-6 pr-6 md:pr-10">
          <button>
            <svg className="hover:opacity-70" width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 1C17.6536 1 27 1 27 1M1 10.75H27M7.5 20.5H27" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </nav>
        <div className="flex flex-col md:flex-row md:justify-between px-3 py-3 md:px-[70px] md:py-12 2xl:px-28">
          <div className="flex md:basis-[45%] justify-center md:items-start items-center flex-col">
            <p className="text-xs mb-3 md:text-sm">A B O U T — P E R S O N A L</p>
            <h1 className="text-3xl mb-6 md:text-4xl xl:text-5xl">
              ¡Hello!&nbsp;
              <b className="font-semibold">
                I’m Angela Smith
              </b>
            </h1>
            <p className="mb-8 text-center block md:hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p className="mb-8 hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Image
              src="/hero-img.png"
              width={648}
              height={664}
              alt="Imagen hero"
              className="block px-10 mb-6 md:hidden"
            />
            <button className="flex items-center justify-center py-5 px-8 bg-black rounded-[10px] gap-2 w-full md:w-auto md:self-start hover:opacity-80">
              <p className={`${lato.className} text-white text-sm`}>Get Started</p>
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.658545 5.65855H8.01449L4.80079 8.87224C4.54396 9.12908 4.54396 9.55054 4.80079 9.80738C5.05762 10.0642 5.47251 10.0642 5.72934 9.80738L10.0691 5.46757C10.326 5.21073 10.326 4.79585 10.0691 4.53902L5.73592 0.192624C5.47909 -0.0642081 5.06421 -0.0642081 4.80738 0.192624C4.55054 0.449457 4.55054 0.86434 4.80738 1.12117L8.01449 4.34146H0.658545C0.296345 4.34146 0 4.6378 0 5C0 5.3622 0.296345 5.65855 0.658545 5.65855Z" fill="white"/>
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/hero-img.png"
              width={348}
              height={364}
              alt="Imagen hero"
              className="hidden md:block lg:hidden"
            />
            <Image
              src="/hero-img.png"
              width={448}
              height={464}
              alt="Imagen hero"
              className="hidden lg:block xl:hidden"
            />
            <Image
              src="/hero-img.png"
              width={548}
              height={564}
              alt="Imagen hero"
              className="hidden xl:block 2xl:hidden"
            />
            <Image
              src="/hero-img.png"
              width={648}
              height={664}
              alt="Imagen hero"
              className="hidden 2xl:block"
            />
          </div>
        </div>
      </header>
      <button className="block md:hidden mt-1">
        <svg className="hover:opacity-70" width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1161 21.8839C24.6043 22.372 25.3957 22.372 25.8839 21.8839C26.372 21.3957 26.372 20.6043 25.8839 20.1161L24.1161 21.8839ZM18 14L18.8839 13.1161C18.3957 12.6279 17.6043 12.6279 17.1161 13.1161L18 14ZM10.1161 20.1161C9.62796 20.6043 9.62796 21.3957 10.1161 21.8839C10.6043 22.372 11.3957 22.372 11.8839 21.8839L10.1161 20.1161ZM32.75 18C32.75 26.1462 26.1462 32.75 18 32.75V35.25C27.5269 35.25 35.25 27.5269 35.25 18H32.75ZM18 32.75C9.8538 32.75 3.25 26.1462 3.25 18H0.75C0.75 27.5269 8.47309 35.25 18 35.25V32.75ZM3.25 18C3.25 9.8538 9.8538 3.25 18 3.25V0.75C8.47309 0.75 0.75 8.47309 0.75 18H3.25ZM18 3.25C26.1462 3.25 32.75 9.8538 32.75 18H35.25C35.25 8.47309 27.5269 0.75 18 0.75V3.25ZM25.8839 20.1161L18.8839 13.1161L17.1161 14.8839L24.1161 21.8839L25.8839 20.1161ZM17.1161 13.1161L10.1161 20.1161L11.8839 21.8839L18.8839 14.8839L17.1161 13.1161Z" fill="black"/>
        </svg>
      </button>
      <button className="hidden md:block">
        <svg className="hover:opacity-70" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.1161 21.8839C24.6043 22.372 25.3957 22.372 25.8839 21.8839C26.372 21.3957 26.372 20.6043 25.8839 20.1161L24.1161 21.8839ZM18 14L18.8839 13.1161C18.3957 12.6279 17.6043 12.6279 17.1161 13.1161L18 14ZM10.1161 20.1161C9.62796 20.6043 9.62796 21.3957 10.1161 21.8839C10.6043 22.372 11.3957 22.372 11.8839 21.8839L10.1161 20.1161ZM32.75 18C32.75 26.1462 26.1462 32.75 18 32.75V35.25C27.5269 35.25 35.25 27.5269 35.25 18H32.75ZM18 32.75C9.8538 32.75 3.25 26.1462 3.25 18H0.75C0.75 27.5269 8.47309 35.25 18 35.25V32.75ZM3.25 18C3.25 9.8538 9.8538 3.25 18 3.25V0.75C8.47309 0.75 0.75 8.47309 0.75 18H3.25ZM18 3.25C26.1462 3.25 32.75 9.8538 32.75 18H35.25C35.25 8.47309 27.5269 0.75 18 0.75V3.25ZM25.8839 20.1161L18.8839 13.1161L17.1161 14.8839L24.1161 21.8839L25.8839 20.1161ZM17.1161 13.1161L10.1161 20.1161L11.8839 21.8839L18.8839 14.8839L17.1161 13.1161Z" fill="black"/>
        </svg>
      </button>
    </main>
  );
}
