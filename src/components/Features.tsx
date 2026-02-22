import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ShoppingBag, Shield, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Booking Management",
    description: "Let customers book appointments online. Manage schedules, confirmations, and reminders automatically.",
    points: ["Online self-service booking", "Automated confirmations", "Calendar integration"],
  },
  {
    icon: ShoppingBag,
    title: "Product Commerce",
    description: "Sell products alongside your services. Manage inventory, orders, and fulfillment in one place.",
    points: ["Product catalog", "Order management", "Real-time tracking"],
  },
  {
    icon: Shield,
    title: "Team Management",
    description: "Invite team members, assign roles, and manage permissions with built-in RBAC.",
    points: ["Role-based access control", "Multi-tenant isolation", "Activity audit logs"],
  },
];

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card p-8 group hover:glow-gold transition-shadow duration-500"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold font-display text-foreground mb-3">{feature.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{feature.description}</p>
      <ul className="space-y-2.5">
        {feature.points.map((point) => (
          <li key={point} className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Features = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-foreground mb-4">Everything you need</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            From scheduling to sales, Timeo brings all your operations together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
