import { FiMessageSquare, FiSearch, FiCalendar, FiTool, FiCheckCircle } from "react-icons/fi";
import type { IconType } from "react-icons";
import styles from "./proceso.module.scss";
import { landingData } from "@/data/site";
import type { ProcessIconKey } from "@/types/landing.types";

const icons: Record<ProcessIconKey, IconType> = {
  message: FiMessageSquare,
  search: FiSearch,
  calendar: FiCalendar,
  tool: FiTool,
  checkCircle: FiCheckCircle,
};

export default function Proceso() {
  const { process } = landingData;

  return (
    <section className={styles.section} id={process.id} aria-labelledby={process.headingId}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className="sectionLabel">{process.eyebrow}</span>
          <h2 id={process.headingId}>{process.titleLines[0]}<br />{process.titleLines[1]}</h2>
          <p>{process.description}</p>
        </header>
        <ol className={styles.steps}>
          {process.items.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <li key={item.title}>
                <div className={styles.iconWrap}>
                  <Icon aria-hidden="true" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
