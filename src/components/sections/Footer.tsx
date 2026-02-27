export function Footer() {
    return (
        <div style={{ borderTop: "1px solid var(--border)" }}>
            <footer>
                <div>
                    <div className="footer-logo">
                        Luminary<span style={{ color: "var(--accent)" }}>.</span>
                    </div>
                    <p className="footer-copy" style={{ marginTop: "0.5rem" }}>
                        © {new Date().getFullYear()} Luminary Inc. All rights reserved.
                    </p>
                </div>
                <ul className="footer-links">
                    {["Privacy", "Terms", "Status", "Docs", "Blog", "Twitter", "GitHub"].map((l) => (
                        <li key={l}>
                            <a href="#">{l}</a>
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    );
}
