"use client";

import items from "@/lib/navItems";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const logoName = "KitchenLogs";

const Navbar = ({ variant, showBack = false }) => {
  const [theme, setTheme] = useState("light");
  const router = useRouter(); /* hook de next/navigation que me da acceso a la funcion router.back() para poder volver a la pagina anterior cuando el usuario hace click en el boton de back, solo se muestra el boton de back cuando showBack es true, y se oculta el menu de navegacion y los botones de login/signup/color cuando showBack es true */

  const handleColor = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const bgClass =
    variant === "green"
      ? "bg-[#93a74d] text-[#101010]"
      : theme === "light"
      ? "bg-[#f7edcc] text-[#101010]"
      : "bg-[#2a3223] text-[#f3ecd3]";

  return (
    <header
      className={`flex ${showBack ? "flex-nowrap" : "flex-wrap"} items-center justify-between gap-4 rounded-full px-4 py-3 ${bgClass}`}
    >
      <div className="flex items-center gap-3">
        <Link href="/" className="[font-family:var(--font-fraunces)] text-[1.65rem] leading-none">
          {logoName}
        </Link>
      </div>
      {!showBack && (
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
      )}

      <div className="flex items-center gap-2">
        {showBack ? (
          <button
            onClick={() => router.back()}
            aria-label="Go back"
            className="px-4 py-2 [font-family:var(--font-dm-sans)] text-sm font-bold uppercase tracking-[0.06em] transition hover:-translate-y-0.5"
          >
            ← GO BACK
          </button>
        ) : (
          <>
            <button className="rounded-full border-2 border-(--foreground) px-2 sm:px-3 py-1.5 [font-family:var(--font-dm-sans)] text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.05em] transition hover:-translate-y-0.5 hover:bg-(--foreground) hover:text-(--surface)">
              Login
            </button>

            <button className="rounded-full border-2 border-(--foreground) px-2 sm:px-3 py-1.5 [font-family:var(--font-dm-sans)] text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.05em] transition hover:-translate-y-0.5 hover:bg-(--foreground) hover:text-(--surface)">
              Sign up
            </button>

            <button
              onClick={handleColor}
              className="rounded-full border-2 border-(--foreground) px-2 sm:px-3 py-1.5 [font-family:var(--font-dm-sans)] text-xs sm:text-[0.75rem] font-bold uppercase tracking-[0.05em] transition hover:-translate-y-0.5 hover:bg-(--foreground) hover:text-(--surface)"
            >
              {theme === "light" ? "Dark" : "Light"}
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
