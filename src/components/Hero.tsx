import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: "hsl(42, 100%, 50%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-6 pt-32 pb-20 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">All-in-one business platform</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight mb-6"
        >
          Your Business,
          <br />
          <span className="text-gradient-gold">Simplified</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xl mx-auto text-lg text-muted-foreground mb-10"
        >
          Manage bookings, sell products, and run your operations from a single platform. Built for modern service businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://timeo.my/sign-up" className="btn-gold text-base">
            Get Started Free
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#features" className="btn-outline-gold text-base">
            Learn More
          </a>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 left-[10%] w-2 h-2 rounded-full bg-primary/40"
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-60 right-[15%] w-3 h-3 rounded-full bg-primary/20"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-[20%] w-1.5 h-1.5 rounded-full bg-primary/30"
        />
      </div>
    </section>
  );
};

export default Hero;
