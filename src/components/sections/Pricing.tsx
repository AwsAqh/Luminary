import { useInView } from "../../hooks/useInView";
import { PRICING } from "../../constants/landingData";

export function Pricing() {
    const [pricingRef, pricingInView] = useInView(0.1);

    return (
        <section ref={pricingRef} style={{ maxWidth: "1200px" }}>
            <div
                className={`fade-in ${pricingInView ? "visible" : ""}`}
                style={{ textAlign: "center" }}
            >
                <span className="section-tag">— Pricing</span>
                <h2 className="section-title" style={{ margin: "0 auto" }}>
                    Simple. Honest. No gotchas.
                </h2>
                <p className="section-sub" style={{ margin: "1rem auto" }}>
                    Scale as you grow. Cancel anytime. Seriously.
                </p>
            </div>
            <div className="pricing-grid">
                {PRICING.map((p, i) => (
                    <div
                        key={p.name}
                        className={`pricing-card ${p.highlight ? "highlighted" : ""} fade-in ${pricingInView ? "visible" : ""
                            }`}
                        style={{ transitionDelay: `${i * 0.1}s` }}
                    >
                        {p.highlight && <div className="pricing-badge">Most Popular</div>}
                        <div className="pricing-name">{p.name}</div>
                        <div className="pricing-price">{p.price}</div>
                        <div className="pricing-period">{p.period}</div>
                        <p className="pricing-desc">{p.desc}</p>
                        <hr className="pricing-divider" />
                        <ul className="pricing-feats">
                            {p.features.map((f) => (
                                <li key={f} className="pricing-feat">
                                    {f}
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#"
                            className={`btn btn-lg pricing-cta ${p.highlight ? "btn-primary" : "btn-outline"
                                }`}
                        >
                            {p.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
