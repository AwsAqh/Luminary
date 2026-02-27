import { useInView } from "../../hooks/useInView";

export function Hero() {
    const [heroRef] = useInView(0.1);

    return (
        <div className="hero" ref={heroRef}>
            <div className="hero-bg" />
            <div className="hero-grid" />
            <div className="hero-badge">
                <span className="pulse" />
                New — AI Anomaly Detection v2.0
            </div>
            <h1>
                Data that actually<br />
                <span className="highlight">tells you something</span>
            </h1>
            <p className="hero-sub">
                Luminary is the analytics platform for teams who refuse to wait. Real-time insights, predictive AI, and dashboards your whole team will actually open.
            </p>
            <div className="hero-cta">
                <a href="#" className="btn btn-primary btn-lg">
                    Start for free — no card needed
                </a>
                <a href="#" className="btn btn-outline btn-lg">
                    ▶ Watch 2-min demo
                </a>
            </div>
            <p className="hero-proof">
                Trusted by <strong>4,200+ teams</strong> · SOC 2 Type II · No credit card required
            </p>

            <div className="hero-mockup">
                <div className="mockup-window">
                    <div className="mockup-bar">
                        <div className="mockup-dot" style={{ background: "#ff5f57" }} />
                        <div className="mockup-dot" style={{ background: "#ffbd2e" }} />
                        <div className="mockup-dot" style={{ background: "#28c840" }} />
                        <div
                            style={{
                                flex: 1,
                                height: "20px",
                                background: "rgba(255,255,255,0.04)",
                                borderRadius: "4px",
                                marginLeft: "0.5rem",
                            }}
                        />
                    </div>
                    <div className="mockup-body">
                        <div className="mockup-sidebar">
                            {["Overview", "Revenue", "Users", "Funnels", "Alerts"].map((item, i) => (
                                <div key={item} className={`sidebar-item ${i === 0 ? "active" : ""}`}>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="mockup-content">
                            <div className="metric-row">
                                {[
                                    { label: "MRR", value: "$124,840", badge: "+14.2%" },
                                    { label: "Active Users", value: "28,411", badge: "+6.7%" },
                                    { label: "Churn", value: "1.2%", badge: "-0.4%" },
                                ].map((m) => (
                                    <div key={m.label} className="metric-card">
                                        <div className="metric-label">{m.label}</div>
                                        <div className="metric-value">
                                            {m.value} <span className="metric-badge">{m.badge}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="chart-bars">
                                {[
                                    55, 70, 45, 85, 60, 95, 75, 88, 50, 72, 90, 65, 80, 78, 92, 85, 70, 95, 88, 100,
                                ].map((h, i) => (
                                    <div
                                        key={i}
                                        className={`chart-bar ${i === 19 ? "accent" : ""}`}
                                        style={{ height: `${h}%`, animationDelay: `${i * 0.05}s` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
