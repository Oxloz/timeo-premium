import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-5 blur-[100px]" style={{ background: "hsl(42, 100%, 50%)" }} />
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <motion.a
          href="#"
          className="flex items-center gap-2.5 group"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold font-display text-foreground">Timeo</span>
        </motion.a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Timeo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
