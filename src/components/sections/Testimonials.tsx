import { useInView } from "../../hooks/useInView";
import { TESTIMONIALS } from "../../constants/landingData";

export function Testimonials() {
    const [testimRef, testimInView] = useInView(0.1);

    return (
        <section ref={testimRef}>
            <div className={`fade-in ${testimInView ? "visible" : ""}`}>
                <span className="section-tag">— Testimonials</span>
                <h2 className="section-title">Don't take our word for it</h2>
                <p className="section-sub">
                    Real teams. Real results. Zero cherry-picking (okay, maybe a little).
                </p>
            </div>
            <div className="testim-grid">
                {TESTIMONIALS.map((t, i) => (
                    <div
                        key={t.author}
                        className={`testim-card fade-in ${testimInView ? "visible" : ""}`}
                        style={{ transitionDelay: `${i * 0.12}s` }}
                    >
                        <div className="quote-mark">"</div>
                        <p className="testim-quote">{t.quote}</p>
                        <div className="testim-author">
                            <div
                                className="testim-avatar"
                                style={{ background: ["#7b61ff", "#ff6b6b", "#06d6a0"][i] }}
                            >
                                {t.avatar}
                            </div>
                            <div>
                                <div className="testim-name">{t.author}</div>
                                <div className="testim-role">{t.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
