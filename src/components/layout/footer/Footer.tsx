import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./footer.module.scss";
import { landingData } from "@/data/site";
import { createWhatsappUrl } from "@/lib/whatsapp";

const whatsappUrl = createWhatsappUrl(landingData.contact.whatsapp);

export default function Footer() {
  const { brand, contact, footer, navigation } = landingData;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <span aria-hidden="true">{brand.monogram}</span>
            <div><strong>{brand.name}</strong><small>{brand.tagline}</small></div>
          </div>
          <p>{brand.description}</p>
          <nav aria-label={footer.navigationLabel}>
            {navigation.footer.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </nav>
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
            <FaWhatsapp aria-hidden="true" /> {contact.whatsapp.label}
          </Link>
        </div>
        <div className={styles.bottom}>
          <span>{footer.copyright}</span>
          <span>{footer.credit}</span>
        </div>
      </div>
    </footer>
  );
}
