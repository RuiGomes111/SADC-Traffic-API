"use client";

import { useState } from "react"; 
import { FaTrafficLight } from "react-icons/fa";
import { TiHomeOutline, TiThMenu, TiTimes } from "react-icons/ti"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const linkStyles = "flex items-center px-4 py-2 md:h-12 rounded-xl transition-all duration-200 font-bold";
  const activeStyles = "bg-blue-600 text-white shadow-md";
  const inactiveStyles = "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-blue-500";

  const navLinks = [
    { name: "Início", href: "/", icon: <TiHomeOutline className="text-xl" /> },
    { name: "Sinais", href: "#sinais" },
    { name: "API", href: "#api" },
  ];

  return (
    <header className="w-full h-20 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 md:px-10 fixed top-0 z-50">
      {/* Logo e Nome */}
      <div className="flex items-center gap-3">
        <FaTrafficLight className="text-3xl md:text-4xl text-red-500" />
        <div className="leading-tight">
          <h1 className="text-sm md:text-lg font-bold text-blue-500 whitespace-nowrap">SADC Traffic API</h1>
          <span className="hidden sm:block text-[10px] md:text-xs text-zinc-500">Southern African Development Community</span>
        </div>
      </div>

      {/* Botão Mobile (Hambúrguer) */}
      <button 
        className="ml-auto md:hidden text-3xl text-zinc-600 dark:text-zinc-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <TiTimes /> : <TiThMenu />}
      </button>

      {/* Navegação */}
      <nav className={`
        absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-white dark:bg-zinc-900 md:bg-transparent
        flex-col md:flex-row flex items-center gap-2 p-6 md:p-0 md:ml-auto transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0"}
      `}>
        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm w-full md:w-auto">
          {navLinks.map((link) => (
            <li key={link.href} className="w-full md:w-auto">
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)} 
                className={`${linkStyles} ${isActive(link.href) ? activeStyles : inactiveStyles}`}
              >
                {link.icon && <span className="mr-2">{link.icon}</span>}
                {link.name}
              </Link>
            </li>
          ))}
          
          <li className="w-full md:w-auto">
            <Link
              href="https://github.com"
              target="_blank"
              className={`${linkStyles} ${inactiveStyles}`}
            >
              GitHub
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
