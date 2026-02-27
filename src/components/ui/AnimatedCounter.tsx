import { useState, useEffect } from "react";
import { useInView } from "../../hooks/useInView";

interface AnimatedCounterProps {
    target: string;
    suffix?: string;
}

export function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
    const [count, setCount] = useState<number | string>(0);
    const [ref, inView] = useInView(0.5);

    // Parse target to extract numeric value
    const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
    const isDecimal = target.includes(".");

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1800; // ms

        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);

            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * numericTarget;

            setCount(isDecimal ? current.toFixed(2) : Math.floor(current));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [inView, numericTarget, isDecimal]);

    const prefix = target.replace(/[0-9.,%.ms]+.*/, "");
    const displaySuffix = target.replace(/^[^0-9]*[0-9.,]+/, "");

    return (
        <span ref={ref}>
            {prefix}{count}{displaySuffix}{suffix}
        </span>
    );
}
