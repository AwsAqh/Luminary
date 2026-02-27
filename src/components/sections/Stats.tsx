import { useInView } from "../../hooks/useInView";
import { STATS } from "../../constants/landingData";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function Stats() {
    const [statsRef, statsInView] = useInView(0.1);

    return (
        <div className="stats-section" ref={statsRef}>
            <div className="stats-grid">
                {STATS.map((s, i) => (
                    <div
                        key={s.label}
                        className={`fade-in ${statsInView ? "visible" : ""}`}
                        style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                        <div className="stat-value">
                            <AnimatedCounter target={s.value} />
                        </div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
