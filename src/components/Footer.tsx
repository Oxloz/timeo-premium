import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold font-display text-foreground">Timeo</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Timeo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
