import { motion } from "framer-motion";
import { Database, Megaphone, TrendingUp, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Connect Product Data",
    description: "Seamlessly sync your product catalog and let our AI understand your brand, pricing, and audience.",
  },
  {
    icon: Megaphone,
    title: "AI Campaign Creation & Posting",
    description: "We create, schedule, and publish marketing campaigns across your approved platforms automatically.",
  },
  {
    icon: TrendingUp,
    title: "Real Sales Conversion Tracking",
    description: "Track engagement-to-sale pipelines with real attribution — not vanity metrics.",
  },
  {
    icon: BarChart3,
    title: "Weekly Intelligent Business Updates",
    description: "Receive strategic insights every week with actionable recommendations to grow revenue.",
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
            What Makes PromoGPT <span className="gold-gradient-text">Different</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Not another scheduler. Not another analytics tool. PromoGPT executes marketing and drives measurable sales growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl p-6 cursor-default hover:shadow-xl hover:shadow-accent/10 transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
