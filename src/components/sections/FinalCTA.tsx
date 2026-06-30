import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./finalCta.module.scss";
import { landingData } from "@/data/site";
import { createWhatsappUrl } from "@/lib/whatsapp";

const whatsappUrl = createWhatsappUrl(landingData.contact.whatsapp);

export default function FinalCTA() {
  const { finalCta } = landingData;

  return (
    <section className={styles.section} id={finalCta.id} aria-labelledby={finalCta.headingId}>
      <div className={styles.container} data-monogram={landingData.brand.monogram}>
        <span className={styles.kicker}>{finalCta.eyebrow}</span>
        <h2 id={finalCta.headingId}>{finalCta.title}</h2>
        <p>{finalCta.description}</p>
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
          <FaWhatsapp aria-hidden="true" />
          {finalCta.cta.label}
          <FiArrowUpRight aria-hidden="true" />
        </Link>
        <small>{finalCta.microcopy}</small>
      </div>
    </section>
  );
}
