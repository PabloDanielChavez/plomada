import {
  MdOutlinePlumbing,
  MdWaterDrop,
  MdOutlineCleaningServices,
  MdOutlineLocalFireDepartment,
  MdOutlineWaterDamage,
  MdOutlineApartment,
} from "react-icons/md";
import type { IconType } from "react-icons";
import styles from "./servicios.module.scss";
import { landingData } from "@/data/site";
import type { ServiceIconKey } from "@/types/landing.types";

const icons: Record<ServiceIconKey, IconType> = {
  plumbing: MdOutlinePlumbing,
  waterDrop: MdWaterDrop,
  cleaning: MdOutlineCleaningServices,
  fire: MdOutlineLocalFireDepartment,
  waterDamage: MdOutlineWaterDamage,
  apartment: MdOutlineApartment,
};

export default function Servicios() {
  const { services } = landingData;

  return (
    <section className={styles.section} id={services.id} aria-labelledby={services.headingId}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <span className="sectionLabel sectionLabelLight">{services.eyebrow}</span>
            <h2 id={services.headingId}>{services.title}</h2>
          </div>
          <p>{services.description}</p>
        </header>
        <div className={styles.grid}>
          {services.items.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <article className={styles.card} key={item.title}>
                <div className={styles.cardTop}>
                  <Icon aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className={styles.cardLine} aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
