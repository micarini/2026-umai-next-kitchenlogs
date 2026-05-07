"use client";

import items from "@/lib/navItems";
import Link from "next/link";
import { useState } from "react";

const logoName = "KitchenLogs";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const handleColor = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header
      className={`flex items-center justify-between gap-4 rounded-full px-5 py-3 ${
        theme === "light" ? "bg-[#f7edcc] text-[#101010]" : "bg-[#2a3223] text-[#f3ecd3]"
      }`}
    >
      <Link href="/" className="[font-family:var(--font-fraunces)] text-[1.65rem] leading-none">
        {logoName}
      </Link>

      <nav className="hidden flex-1 md:block">
        <ul className="flex items-center justify-center gap-8">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className="[font-family:var(--font-dm-sans)] text-[0.85rem] font-bold uppercase tracking-[0.06em] transition-colors hover:text-[#d66b36]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <button className="rounded-full border-2 border-(--foreground) px-3 py-1.5 [font-family:var(--font-dm-sans)] text-[0.75rem] font-bold uppercase tracking-[0.05em] transition hover:-translate-y-0.5 hover:bg-(--foreground) hover:text-(--surface)">
          Login
        </button>

        <button className="rounded-full border-2 border-(--foreground) px-3 py-1.5 [font-family:var(--font-dm-sans)] text-[0.75rem] font-bold uppercase tracking-[0.05em] transition hover:-translate-y-0.5 hover:bg-(--foreground) hover:text-(--surface)">
          Sign up
        </button>

        <button
          onClick={handleColor}
          className="rounded-full border-2 border-(--foreground) px-3 py-1.5 [font-family:var(--font-dm-sans)] text-[0.75rem] font-bold uppercase tracking-[0.05em] transition hover:-translate-y-0.5 hover:bg-(--foreground) hover:text-(--surface)"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
