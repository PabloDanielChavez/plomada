import Image from "next/image";
import Link from "next/link";
import { FiArrowDownRight, FiCheck, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./hero.module.scss";
import { landingData } from "@/data/site";
import { createWhatsappUrl } from "@/lib/whatsapp";

const whatsappUrl = createWhatsappUrl(landingData.contact.whatsapp);

export default function Hero() {
  const { hero } = landingData;

  return (
    <section className={styles.hero} id={hero.id}>
      <div className={styles.gridTexture} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            <span aria-hidden="true" />
            {hero.eyebrow}
          </span>
          <h1>
            {hero.title} <em>{hero.highlightedTitle}</em>
          </h1>
          <p className={styles.lead}>{hero.description}</p>

          <div className={styles.actions}>
            <Link
              href={whatsappUrl}
              className={styles.primaryButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp aria-hidden="true" />
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href ?? "#"} className={styles.secondaryButton}>
              {hero.secondaryCta.label}
              <FiArrowDownRight aria-hidden="true" />
            </Link>
          </div>

          <ul className={styles.guarantees} aria-label={hero.guaranteesLabel}>
            {hero.guarantees.map((item) => (
              <li key={item}><FiCheck aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 800px) 92vw, 44vw"
            />
            <div className={styles.imageShade} aria-hidden="true" />
            <div className={styles.serviceTag}>
              <span>{hero.serviceTag.label}</span>
              <strong>{hero.serviceTag.title}</strong>
            </div>
          </div>
          <div className={styles.locationCard}>
            <FiMapPin aria-hidden="true" />
            <span><small>{hero.location.label}</small><strong>{hero.location.value}</strong></span>
          </div>
          <div className={styles.experienceCard}>
            <strong>{hero.experience.number}</strong>
            <span>{hero.experience.lines[0]}<br />{hero.experience.lines[1]}</span>
          </div>
        </div>
      </div>
      <div className={styles.bottomNote}>
        {hero.bottomNotes.map((note) => <span key={note}>{note}</span>)}
      </div>
    </section>
  );
}
