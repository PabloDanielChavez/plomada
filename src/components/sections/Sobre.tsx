import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import styles from "./sobre.module.scss";
import { landingData } from "@/data/site";
import { createWhatsappUrl } from "@/lib/whatsapp";

const whatsappUrl = createWhatsappUrl(landingData.contact.whatsapp);

export default function Sobre() {
  const { about, brand } = landingData;

  return (
    <section className={styles.section} id={about.id} aria-labelledby={about.headingId}>
      <div className={styles.container}>
        <div className={styles.panel}>
          <div className={styles.brandBlock}>
            <span className={styles.monogram} aria-hidden="true">{brand.monogram}</span>
            <span>{brand.name}</span>
            <small>{brand.tagline}</small>
          </div>
          <p className={styles.quote}>{about.quote}</p>
          <div className={styles.detail}>
            {about.details.map((detail) => <span key={detail}>{detail}</span>)}
          </div>
        </div>

        <div className={styles.content}>
          <span className="sectionLabel">{about.eyebrow}</span>
          <h2 id={about.headingId}>{about.title}</h2>
          {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <ul>
            {about.commitments.map((item) => (
              <li key={item}><FiCheckCircle aria-hidden="true" />{item}</li>
            ))}
          </ul>
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
            <FaWhatsapp aria-hidden="true" /> {about.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
