import { FiClock, FiFileText, FiShield, FiTool } from "react-icons/fi";
import type { IconType } from "react-icons";
import styles from "./bienvenida.module.scss";
import { landingData } from "@/data/site";
import type { BenefitIconKey } from "@/types/landing.types";

const icons: Record<BenefitIconKey, IconType> = {
  clock: FiClock,
  fileText: FiFileText,
  shield: FiShield,
  tool: FiTool,
};

export default function Bienvenida() {
  const { benefits } = landingData;

  return (
    <section className={styles.section} aria-labelledby={benefits.headingId}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className="sectionLabel">{benefits.eyebrow}</span>
          <h2 id={benefits.headingId}>{benefits.title}</h2>
        </div>
        <div className={styles.grid}>
          {benefits.items.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <article className={styles.card} key={item.title}>
                <span className={styles.number}>0{index + 1}</span>
                <Icon className={styles.icon} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
