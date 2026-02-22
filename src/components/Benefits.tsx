import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ShieldCheck, Radio } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ hours/week",
    description: "Automate repetitive admin tasks and focus on what matters.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise security",
    description: "Multi-tenant isolation with role-based access control.",
  },
  {
    icon: Radio,
    title: "Real-time everything",
    description: "Live updates across all devices. Never miss a booking.",
  },
];

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-timeo" className="relative py-32">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center group"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
