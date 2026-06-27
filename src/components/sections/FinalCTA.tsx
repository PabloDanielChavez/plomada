import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "@/styles/sections/finalCta.module.scss";
import { WHATSAPP_URL } from "@/data/site";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="contacto" aria-labelledby="contacto-title">
      <div className={styles.container}>
        <span className={styles.kicker}>¿Tenés un problema para resolver?</span>
        <h2 id="contacto-title">Hablemos de la solución.</h2>
        <p>
          Contanos qué necesitás y coordinamos un servicio claro, rápido y profesional.
        </p>
        <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.button}>
          <FaWhatsapp aria-hidden="true" />
          Pedir presupuesto ahora
          <FiArrowUpRight aria-hidden="true" />
        </Link>
        <small>
          Consultas por plomería, destapaciones, pérdidas, filtraciones, instalaciones y mantenimiento.
        </small>
      </div>
    </section>
  );
}