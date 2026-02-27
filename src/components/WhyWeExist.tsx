import { motion } from "framer-motion";
import { Ban, Database, Lightbulb, Users } from "lucide-react";

const reasons = [
  {
    icon: Ban,
    number: "01",
    title: "Marketing agencies are expensive",
    description: "Most African SMEs can't afford $2,000+/month retainers. PromoGPT gives you consistent campaigns without agency overhead.",
  },
  {
    icon: Database,
    number: "02",
    title: "Data exists but isn't used",
    description: "Your POS, Shopify, and marketplace data already show what people buy in Nairobi, Lagos, and Accra — it rarely gets turned into clear campaigns.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "SMEs need execution, not advice",
    description: "You don't need another thread or playbook. You need campaigns created, posted, and tracked across the channels your customers actually use.",
  },
  {
    icon: Users,
    number: "04",
    title: "Your virtual marketing team",
    description: "PromoGPT behaves like a small marketing team: planning, creating, posting, and improving based on which products move and where.",
  },
];

const WhyWeExist = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            African SMEs Deserve{" "}
            <span className="gold-gradient-text">Smarter Marketing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The gap between big-budget brands and hardworking SMEs shouldn't exist. We're here to close it.
          </p>
        </motion.div>

        {/* Large numbered list with dividers */}
        <div className="space-y-0">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group grid grid-cols-[auto_1fr] gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/40 last:border-b-0 first:pt-0"
            >
              {/* Big number */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl sm:text-5xl font-heading font-bold gold-gradient-text leading-none">
                  {reason.number}
                </span>
                <reason.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
