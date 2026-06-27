"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import styles from "@/styles/sections/header.module.scss";
import { WHATSAPP_URL } from "@/data/site";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cobertura", href: "#cobertura" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="#inicio" className={styles.brand} aria-label="Plomada, ir al inicio">
          <span className={styles.brandMark} aria-hidden="true">P</span>
          <span>
            <strong>Plomada</strong>
            <small>Soluciones técnicas</small>
          </span>
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <nav
          id="main-navigation"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Navegación principal"
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link
            href={WHATSAPP_URL}
            className={styles.contact}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar a Plomada por WhatsApp"
          >
            <FiPhoneCall aria-hidden="true" />
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
