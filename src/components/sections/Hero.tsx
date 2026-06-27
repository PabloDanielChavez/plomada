import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight, FiCheck, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/sections/hero.module.scss";
import { WHATSAPP_URL } from "@/data/site";

const guarantees = ["Respuesta ágil", "Presupuesto claro", "Trabajo con garantía"];

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.gridTexture} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span aria-hidden="true" />
            Plomería · Reparaciones · Mantenimiento integral
          </span>
          <h1>
            Servicio de plomería y mantenimiento en <em>Buenos Aires</em>
          </h1>
          <p className={styles.lead}>
            Soluciones profesionales para hogares, empresas y consorcios. Resolvemos
            reparaciones, instalaciones, destapaciones e impermeabilización con criterio
            técnico, prolijidad y precios transparentes.
          </p>

          <div className={styles.actions}>
            <Link
              href={WHATSAPP_URL}
              className={styles.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              Solicitar presupuesto
            </Link>
            <Link href="#servicios" className={styles.secondaryButton}>
              Ver servicios
              <FiArrowDownRight aria-hidden="true" />
            </Link>
          </div>

          <ul className={styles.guarantees} aria-label="Beneficios del servicio">
            {guarantees.map((item) => (
              <li key={item}><FiCheck aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image
              src="/img/fondo/nosotros.jpg"
              alt="Técnico de Plomada realizando una reparación de plomería"
              fill
              priority
              sizes="(max-width: 800px) 92vw, 44vw"
            />
            <div className={styles.imageShade} aria-hidden="true" />
            <div className={styles.serviceTag}>
              <span>Servicio técnico</span>
              <strong>Profesional y prolijo</strong>
            </div>
          </div>
          <div className={styles.locationCard}>
            <FiMapPin aria-hidden="true" />
            <span><small>Zona de atención</small><strong>CABA + GBA</strong></span>
          </div>
          <div className={styles.experienceCard}>
            <strong>01</strong>
            <span>Un equipo.<br />Todo resuelto.</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomNote}>
        <span>Atención en Buenos Aires y alrededores</span>
        <span>Consultanos por disponibilidad en tu zona</span>
      </div>
    </section>
  );
}
