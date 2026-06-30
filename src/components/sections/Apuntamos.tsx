import {
  FiHome,
  FiBriefcase,
  FiGrid,
  FiMap,
  FiKey,
  FiUsers,
  FiMapPin,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import styles from "./apuntamos.module.scss";
import { landingData } from "@/data/site";
import type { AudienceIconKey } from "@/types/landing.types";

const icons: Record<AudienceIconKey, IconType> = {
  home: FiHome,
  briefcase: FiBriefcase,
  grid: FiGrid,
  map: FiMap,
  key: FiKey,
  users: FiUsers,
};

export default function Apuntamos() {
  const { audienceCoverage } = landingData;
  const { audience, coverage } = audienceCoverage;

  return (
    <section
      className={styles.section}
      id={audienceCoverage.id}
      aria-labelledby={audienceCoverage.headingId}
    >
      <div className={styles.container}>
        <div className={styles.audiences}>
          <span className="sectionLabel">{audience.eyebrow}</span>
          <h2>{audience.title}</h2>
          <p>{audience.description}</p>
          <div className={styles.audienceGrid}>
            {audience.items.map((item) => {
              const Icon = icons[item.icon];

              return (
                <div className={styles.audience} key={item.label}>
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.coverage}>
          <div className={styles.coverageTop}>
            <span className={styles.status}><i aria-hidden="true" /> {coverage.status}</span>
            <span>{coverage.regionCode}</span>
          </div>
          <div className={styles.map} aria-hidden="true">
            <span className={styles.ringOne} />
            <span className={styles.ringTwo} />
            <span className={styles.pin}><FiMapPin /></span>
            <span className={styles.mapLabel}>{coverage.mapLabel}</span>
            <span className={styles.north}>{coverage.compassLabel}</span>
          </div>
          <div className={styles.coverageText}>
            <span className="sectionLabel sectionLabelLight">{coverage.eyebrow}</span>
            <h2 id={audienceCoverage.headingId}>{coverage.title}</h2>
            <p>{coverage.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
