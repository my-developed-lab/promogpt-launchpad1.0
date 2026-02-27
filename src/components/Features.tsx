import { motion } from "framer-motion";
import { Database, Megaphone, TrendingUp, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Connect your product data",
    description: "Sync inventory from Shopify, WooCommerce, Jumia, or your POS so PromoGPT sees what actually sells.",
  },
  {
    icon: Megaphone,
    title: "Campaigns across real channels",
    description: "PromoGPT turns that data into WhatsApp, Instagram, and email campaigns you approve with one click.",
  },
  {
    icon: TrendingUp,
    title: "See which campaigns move stock",
    description: "See which post moved units in Lagos vs Nairobi — from first view to paid order.",
  },
  {
    icon: BarChart3,
    title: "Weekly plain-language updates",
    description: "Every week you get a short summary of what worked, what wasted spend, and what to do next.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            From catalog to{" "}
            <span className="gold-gradient-text">cash in the bank</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not another tool. PromoGPT connects your products, channels, and sales into one loop that keeps moving stock.
          </p>
        </motion.div>

        {/* Asymmetric feature layout: one large + two small + footer strip */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {/* Large primary card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 sm:p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 gold-gradient opacity-[0.06] rounded-bl-[70px] group-hover:opacity-[0.14] transition-opacity duration-300" />
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-4 md:mb-0 group-hover:bg-accent/20 transition-colors duration-300">
                <features[0].icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{features[0].title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{features[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Two smaller side-by-side cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {features.slice(1, 3).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-20 h-20 gold-gradient opacity-[0.06] rounded-bl-[60px] group-hover:opacity-[0.14] transition-opacity duration-300" />
                <div className="flex flex-row items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-1.5">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom strip card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ y: -3 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 lg:p-8 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 lg:ml-12"
          >
            <div className="absolute top-0 right-10 w-24 h-24 gold-gradient opacity-[0.05] rounded-bl-[70px] group-hover:opacity-[0.13] transition-opacity duration-300" />
            <div className="flex flex-row items-start gap-4 sm:gap-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                <features[3].icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1.5">{features[3].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{features[3].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
