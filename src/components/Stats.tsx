import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Active Businesses" },
  { value: 50, suffix: "K+", label: "Bookings Managed" },
  { value: 99.9, suffix: "%", label: "Uptime" },
  { value: 24, suffix: "/7", label: "Real-time Sync" },
];

const AnimatedNumber = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = Number.isInteger(value) ? Math.floor(display).toLocaleString() : display.toFixed(1);

  return (
    <span className="text-4xl md:text-5xl font-bold font-display text-gradient-gold">
      {formatted}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-10 md:p-16"
        >
          <h2 className="section-heading text-foreground text-center mb-4">Trusted by growing businesses</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Join businesses that rely on Timeo to streamline their operations.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
