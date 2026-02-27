export const NAV_LINKS = ["Features", "Pricing", "About", "Blog"];

export const FEATURES = [
    {
        icon: "⚡",
        title: "Real-time Intelligence",
        desc: "Process millions of data points per second. Your dashboard updates before you blink.",
        tag: "Core",
    },
    {
        icon: "🧠",
        title: "Predictive Models",
        desc: "AI that learns your business patterns and surfaces insights you didn't know to ask for.",
        tag: "AI",
    },
    {
        icon: "🔗",
        title: "One-Click Integrations",
        desc: "Connect Postgres, Stripe, Salesforce, Notion, and 200+ tools in under 60 seconds.",
        tag: "Integrations",
    },
    {
        icon: "🛡️",
        title: "Enterprise Security",
        desc: "SOC 2 Type II, GDPR compliant. Your data never leaves your infrastructure.",
        tag: "Security",
    },
    {
        icon: "📐",
        title: "Custom Dashboards",
        desc: "Drag, drop, and deploy pixel-perfect dashboards without touching a line of CSS.",
        tag: "Design",
    },
    {
        icon: "🚀",
        title: "Instant Deploy",
        desc: "From query to shareable report in seconds. Built for speed-obsessed teams.",
        tag: "DevEx",
    },
];

export const STATS = [
    { value: "12ms", label: "Avg. query time" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "4,200+", label: "Teams onboarded" },
    { value: "2.4B", label: "Events processed daily" },
];

export const TESTIMONIALS = [
    {
        quote: "Luminary replaced our entire BI stack. It's faster, prettier, and our PM team actually uses it.",
        author: "Sarah Chen",
        role: "CTO at Vercel-backed startup",
        avatar: "SC",
    },
    {
        quote: "The predictive alerts caught a revenue anomaly before our finance team noticed. Paid for itself in a week.",
        author: "Marcus Webb",
        role: "VP Engineering, Fintech",
        avatar: "MW",
    },
    {
        quote: "I've tried Mixpanel, Amplitude, Looker. Luminary is what happens when you start from scratch in 2024.",
        author: "Priya Nair",
        role: "Head of Data, E-commerce Scale-up",
        avatar: "PN",
    },
];

export const PRICING = [
    {
        name: "Starter",
        price: "$0",
        period: "forever",
        desc: "For indie hackers and solo founders.",
        features: ["5 dashboards", "1M events/mo", "7-day history", "Community support"],
        cta: "Start free",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$49",
        period: "per month",
        desc: "For growing teams that move fast.",
        features: ["Unlimited dashboards", "100M events/mo", "1-year history", "AI insights", "Priority support"],
        cta: "Start 14-day trial",
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        desc: "For teams that need everything.",
        features: ["Unlimited everything", "Custom retention", "SSO & SAML", "SLA guarantee", "Dedicated engineer"],
        cta: "Talk to sales",
        highlight: false,
    },
];
