import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]" style={{ background: "hsl(42, 100%, 50%)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-12 md:p-20 text-center glow-gold"
        >
          <h2 className="section-heading text-foreground mb-4">
            Ready to simplify your business?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Start for free. No credit card required. Set up in minutes.
          </p>
          <a href="https://timeo.my/sign-up" className="btn-gold text-base">
            Get Started Free
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
