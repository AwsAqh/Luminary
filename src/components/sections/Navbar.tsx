import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../constants/landingData";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-logo">
                Luminary<span className="dot">.</span>
            </div>
            <ul className="nav-links">
                {NAV_LINKS.map((l) => (
                    <li key={l}>
                        <a href="#">{l}</a>
                    </li>
                ))}
            </ul>
            <div className="nav-actions">
                <a href="#" className="btn btn-ghost">
                    Sign in
                </a>
                <a href="#" className="btn btn-primary">
                    Get started →
                </a>
            </div>
        </nav>
    );
}
