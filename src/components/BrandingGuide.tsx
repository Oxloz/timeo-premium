import { motion } from "framer-motion";
import { Zap, Palette, Type, Sparkles, Layers } from "lucide-react";

const brandAssets = [
  {
    label: "Primary Gold",
    color: "hsl(42, 100%, 50%)",
    token: "--primary / --gold",
  },
  {
    label: "Gold Light",
    color: "hsl(42, 100%, 65%)",
    token: "--gold-light",
  },
  {
    label: "Gold Dark",
    color: "hsl(42, 80%, 38%)",
    token: "--gold-dark",
  },
  {
    label: "Background",
    color: "hsl(240, 15%, 5%)",
    token: "--background",
  },
  {
    label: "Surface Glass",
    color: "hsl(240, 12%, 10%)",
    token: "--surface-glass",
  },
  {
    label: "Surface Elevated",
    color: "hsl(240, 12%, 12%)",
    token: "--surface-elevated",
  },
];

const usageRules = [
  {
    icon: Palette,
    title: "Gold Gradient",
    rule: "Always use the 135° gold gradient for primary actions, logo icons, and emphasis elements. Never flatten to a single gold tone.",
  },
  {
    icon: Layers,
    title: "Glassmorphism",
    rule: "Cards use glass-card class with backdrop-blur(20px) and gradient borders. Maintain 0.6–0.4 opacity range for depth hierarchy.",
  },
  {
    icon: Type,
    title: "Typography",
    rule: "Space Grotesk for headings, Plus Jakarta Sans for body. Use text-gradient-gold for brand emphasis text only — never for body copy.",
  },
  {
    icon: Sparkles,
    title: "Glow & Sheen",
    rule: "Logo icons feature a pulsing glow and hover sheen sweep. Ambient glows use 15–25% opacity gold. Never exceed 0.3 opacity for background glows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BrandingGuide = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="branding">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
        style={{ background: "hsl(42, 100%, 50%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-gold uppercase tracking-widest mb-4 block">
            Brand System
          </span>
          <h2 className="section-heading mb-4">
            Branding <span className="text-gradient-gold">Guide</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Consistent gold accent, glassmorphism, and premium motion design across every touchpoint.
          </p>
        </motion.div>

        {/* Color Palette */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold font-display text-foreground mb-6 flex items-center gap-2">
            <Palette className="h-5 w-5 text-gold" />
            Color Palette
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandAssets.map((asset) => (
              <motion.div
                key={asset.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card p-4 text-center"
              >
                <div
                  className="w-full h-16 rounded-lg mb-3 border border-border/30"
                  style={{ background: asset.color }}
                />
                <p className="text-sm font-medium text-foreground">{asset.label}</p>
                <p className="text-xs text-muted-foreground mt-1 font-mono">{asset.token}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logo Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold font-display text-foreground mb-6 flex items-center gap-2">
            <Zap className="h-5 w-5 text-gold" />
            Logo Assets
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dark bg */}
            <motion.div variants={itemVariants} className="glass-card p-8 flex flex-col items-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">On Dark</p>
              <a href="#" className="flex items-center gap-3 group">
                <motion.div className="logo-icon flex h-10 w-10 items-center justify-center" whileHover={{ scale: 1.1, rotate: 5 }}>
                  <Zap className="h-5 w-5 text-primary-foreground relative z-10" />
                </motion.div>
                <span className="text-2xl font-bold font-display text-gradient-gold">Timeo</span>
              </a>
            </motion.div>
            {/* Icon only */}
            <motion.div variants={itemVariants} className="glass-card p-8 flex flex-col items-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Icon Mark</p>
              <a href="#" className="group">
                <motion.div className="logo-icon flex h-14 w-14 items-center justify-center" whileHover={{ scale: 1.15, rotate: 10 }}>
                  <Zap className="h-7 w-7 text-primary-foreground relative z-10" />
                </motion.div>
              </a>
            </motion.div>
            {/* Wordmark only */}
            <motion.div variants={itemVariants} className="glass-card p-8 flex flex-col items-center gap-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Wordmark</p>
              <motion.span
                className="text-3xl font-bold font-display text-gradient-gold"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Timeo
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Usage Rules */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h3 className="text-lg font-semibold font-display text-foreground mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold" />
            Usage Rules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usageRules.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="glass-card p-6 flex gap-4"
              >
                <div className="logo-icon flex h-10 w-10 shrink-0 items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary-foreground relative z-10" />
                </div>
                <div>
                  <h4 className="font-semibold font-display text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.rule}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingGuide;
