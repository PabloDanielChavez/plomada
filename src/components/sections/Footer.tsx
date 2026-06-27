import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/sections/footer.module.scss";
import { WHATSAPP_URL } from "@/data/site";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cobertura", href: "#cobertura" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <span aria-hidden="true">P</span>
            <div><strong>Plomada</strong><small>Soluciones técnicas</small></div>
          </div>
          <p>Servicio de plomería, reparaciones e instalaciones en Buenos Aires.</p>
          <nav aria-label="Navegación del pie de página">
            {links.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
            <FaWhatsapp aria-hidden="true" /> WhatsApp
          </Link>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Plomada. Todos los derechos reservados.</span>
          <span>Sitio desarrollado por Pablo Daniel Chávez.</span>
        </div>
      </div>
    </footer>
  );
}
