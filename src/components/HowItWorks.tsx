import { motion } from "framer-motion";
import { Store, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Connect Your Store",
    description: "Link your product catalog and marketing channels in minutes.",
  },
  {
    icon: Rocket,
    title: "We Create & Post Campaigns",
    description: "PromoGPT generates tailored campaigns and publishes them for you.",
  },
  {
    icon: LineChart,
    title: "Track Sales & Optimize",
    description: "Watch real conversions roll in with weekly intelligence updates.",
  },
];

const HowItWorks = () => {
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
            How It <span className="gold-gradient-text">Works</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal line */}
          <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-primary/20" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step dot */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full gold-gradient flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">{index + 1}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
