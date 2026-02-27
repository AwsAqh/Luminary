export function Logos() {
    return (
        <div className="logos">
            <p className="logos-label">Trusted by teams at</p>
            <div className="logos-row">
                {["Stripe", "Vercel", "Linear", "Notion", "Figma", "Loom", "Retool"].map((l) => (
                    <span key={l} className="logo-item">
                        {l}
                    </span>
                ))}
            </div>
        </div>
    );
}
