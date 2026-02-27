import { motion } from "framer-motion";
import { Ban, Database, Lightbulb, Users } from "lucide-react";

const reasons = [
  {
    icon: Ban,
    title: "Marketing agencies are expensive",
    description: "Most African SMEs can't afford $2,000+/month for a marketing team. PromoGPT gives you agency-level execution at a fraction of the cost.",
  },
  {
    icon: Database,
    title: "Data exists but isn't used",
    description: "Your product data, customer behavior, and sales patterns hold gold — but most businesses never turn it into action.",
  },
  {
    icon: Lightbulb,
    title: "SMEs need execution, not advice",
    description: "You don't need another marketing guide. You need campaigns created, posted, and tracked — automatically.",
  },
  {
    icon: Users,
    title: "Your virtual marketing team",
    description: "PromoGPT acts as a full marketing department — strategizing, creating, posting, and optimizing in real time.",
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

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="flex gap-4 p-5 rounded-2xl glass-card"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <reason.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeExist;
