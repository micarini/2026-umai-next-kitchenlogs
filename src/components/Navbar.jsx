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
      className={`navbar ${
        theme === "light" ? "navbar--light" : "navbar--dark"
      }`}
    >
      <Link href="/" className="navbar-logo">
        {logoName}
      </Link>

      <nav className="navbar-nav">
        <ul className="navbar-list">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className="navbar-link"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-actions">
        <button className="navbar-btn">
          Login
        </button>

        <button className="navbar-btn">
          Sign up
        </button>

        <button
          onClick={handleColor}
          className="navbar-btn"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
