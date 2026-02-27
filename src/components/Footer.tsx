import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-heading font-bold">
              Promo<span className="gold-gradient-text">GPT</span>
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              The future of SME marketing starts here.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Twitter className="w-4 h-4 text-primary" strokeWidth={1.5} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Linkedin className="w-4 h-4 text-primary" strokeWidth={1.5} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors">
              <Instagram className="w-4 h-4 text-primary" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PromoGPT. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>

        {/* Gold accent line */}
        <div className="mt-6 h-0.5 w-20 mx-auto gold-gradient rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
