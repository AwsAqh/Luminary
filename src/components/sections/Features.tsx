import { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";
import { FEATURES } from "../../constants/landingData";

export function Features() {
    const [activeFeature, setActiveFeature] = useState(0);
    const [featRef, featInView] = useInView(0.1);

    useEffect(() => {
        const id = setInterval(() => setActiveFeature((p) => (p + 1) % FEATURES.length), 3000);
        return () => clearInterval(id);
    }, []);

    return (
        <section ref={featRef}>
            <div className={`fade-in ${featInView ? "visible" : ""}`}>
                <span className="section-tag">— Features</span>
                <h2 className="section-title">Everything your data team's been asking for</h2>
                <p className="section-sub">
                    Built from the ground up for the speed, scale, and aesthetics modern teams expect.
                </p>
            </div>
            <div className="features-grid">
                {FEATURES.map((f, i) => (
                    <div
                        key={f.title}
                        className={`feature-card ${activeFeature === i ? "active-feat" : ""} fade-in ${featInView ? "visible" : ""
                            }`}
                        style={{ transitionDelay: `${i * 0.08}s` }}
                        onMouseEnter={() => setActiveFeature(i)}
                    >
                        <div className="feat-icon">{f.icon}</div>
                        <div className="feat-tag">{f.tag}</div>
                        <div className="feat-title">{f.title}</div>
                        <p className="feat-desc">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
