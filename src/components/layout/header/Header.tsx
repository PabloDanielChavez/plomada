"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import styles from "./header.module.scss";
import { landingData } from "@/data/site";
import { createWhatsappUrl } from "@/lib/whatsapp";

const whatsappUrl = createWhatsappUrl(landingData.contact.whatsapp);

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
        <Link
          href={`#${landingData.hero.id}`}
          className={styles.brand}
          aria-label={landingData.brand.homeAriaLabel}
        >
          <span className={styles.brandMark} aria-hidden="true">{landingData.brand.monogram}</span>
          <span>
            <strong>{landingData.brand.name}</strong>
            <small>{landingData.brand.tagline}</small>
          </span>
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={
            open
              ? landingData.navigation.menuCloseLabel
              : landingData.navigation.menuOpenLabel
          }
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <nav
          id="main-navigation"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label={landingData.navigation.mainLabel}
        >
          <ul>
            {landingData.navigation.main.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <Link
            href={whatsappUrl}
            className={styles.contact}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={landingData.contact.whatsapp.ariaLabel}
          >
            <FiPhoneCall aria-hidden="true" />
            {landingData.contact.whatsapp.headerLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
