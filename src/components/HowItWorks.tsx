import { motion, useScroll, useTransform } from "framer-motion";
import { Store, Brain, Share2, TrendingUp } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Store,
    title: "Connect Your Business",
    description: "Link your product catalog, store, or inventory. We sync everything in minutes.",
    visual: "🏪 → 📊",
  },
  {
    icon: Brain,
    title: "AI Builds Campaign Strategy",
    description: "PromoGPT analyzes your data and creates tailored marketing campaigns automatically.",
    visual: "📊 → 📢",
  },
  {
    icon: Share2,
    title: "We Post & Track Performance",
    description: "Campaigns go live on your approved platforms. Every click and conversion is tracked.",
    visual: "📢 → 📱",
  },
  {
    icon: TrendingUp,
    title: "You See Real Sales Impact",
    description: "Watch real revenue roll in with weekly intelligence updates and optimization.",
    visual: "📈",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="section-padding bg-secondary/30">
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

        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              className="w-full gold-gradient rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-accent/20">
                      <step.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  {/* Content card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="glass-card rounded-xl p-5 hover:shadow-lg hover:shadow-accent/5 transition-shadow duration-300">
                      <div className="text-2xl mb-2">{step.visual}</div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
