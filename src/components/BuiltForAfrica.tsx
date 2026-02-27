import { motion } from "framer-motion";
import { Smartphone, ShoppingBag, Wallet, Target, Globe } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Commerce",
    description: "Built for how African consumers actually shop — mobile-first, chat-driven, and social-native.",
  },
  {
    icon: ShoppingBag,
    title: "Local Platform Support",
    description: "Integrates with Jumia, Kilimall, WhatsApp Business, Shopify Africa, and more.",
  },
  {
    icon: Wallet,
    title: "SME Budget Realities",
    description: "Designed for lean teams with limited budgets and fast-moving inventory cycles.",
  },
  {
    icon: Target,
    title: "Performance Over Vanity",
    description: "We track real sales conversions — not likes, impressions, or follower counts.",
  },
  {
    icon: Globe,
    title: "Scale Across Africa",
    description: "Expand across African digital markets with campaigns optimized for each region.",
  },
];

const AfricaMapSilhouette = () => (
  <svg
    viewBox="0 0 400 500"
    className="w-full max-w-[220px] sm:max-w-[300px] mx-auto"
    aria-hidden="true"
  >
    <defs>
      {/* Base heatmap gradient across the continent */}
      <linearGradient id="africaHeat" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
        <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
        <stop offset="100%" stopColor="hsl(var(--gold))" stopOpacity="0.8" />
      </linearGradient>
      {/* Soft radial heat spots for key hubs */}
      <radialGradient id="lagosHeat" cx="0.65" cy="0.35" r="0.25">
        <stop offset="0%" stopColor="hsl(var(--gold))" stopOpacity="0.9" />
        <stop offset="60%" stopColor="hsl(var(--gold))" stopOpacity="0.2" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="nairobiHeat" cx="0.75" cy="0.55" r="0.23">
        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
        <stop offset="60%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="joburgHeat" cx="0.6" cy="0.8" r="0.25">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
        <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Continent outline */}
    <path
      d="M210 20C182 26 162 38 146 55C130 73 118 91 108 112C97 135 88 151 74 170C60 189 49 208 44 229C39 249 40 268 46 288C53 309 60 327 72 345C83 362 94 379 105 396C116 412 125 427 137 441C150 456 161 466 176 473C191 481 205 484 220 481C235 478 246 471 255 461C264 451 272 441 280 431C289 420 295 408 300 395C306 381 312 368 319 355C327 340 336 326 343 310C351 292 355 274 355 255C355 235 352 218 345 201C338 183 330 167 323 150C315 133 309 118 304 101C298 82 291 66 280 50C268 33 252 25 233 21C225 19 217 19 210 20Z"
      fill="url(#africaHeat)"
      stroke="hsl(var(--border))"
      strokeWidth="1.2"
      className="drop-shadow-sm dark:drop-shadow-md"
    />

    {/* Heatmap overlays for Lagos / Nairobi / Johannesburg */}
    <ellipse cx="250" cy="165" rx="90" ry="70" fill="url(#lagosHeat)" />
    <ellipse cx="280" cy="255" rx="80" ry="70" fill="url(#nairobiHeat)" />
    <ellipse cx="235" cy="355" rx="90" ry="75" fill="url(#joburgHeat)" />

    {/* Hub markers */}
    <circle cx="255" cy="165" r="6" fill="hsl(var(--background))" stroke="hsl(var(--gold))" strokeWidth="2" />
    <circle cx="290" cy="250" r="6" fill="hsl(var(--background))" stroke="hsl(var(--accent))" strokeWidth="2" />
    <circle cx="240" cy="360" r="6" fill="hsl(var(--background))" stroke="hsl(var(--primary))" strokeWidth="2" />
  </svg>
);

const BuiltForAfrica = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--gold)) 0px, hsl(var(--gold)) 1px, transparent 1px, transparent 12px), repeating-linear-gradient(-45deg, hsl(var(--gold)) 0px, hsl(var(--gold)) 1px, transparent 1px, transparent 12px)`,
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for <span className="gold-gradient-text">African commerce</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            PromoGPT understands how people actually buy in Nairobi, Lagos, Accra, and beyond — mobile-first, chat-driven, and platform-fragmented.
          </p>
        </motion.div>

        {/* Split layout: map left, feature list right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
          {/* Map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              <AfricaMapSilhouette />
              {/* Hub labels */}
              <div className="absolute top-[30%] right-[10%] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">Lagos</span>
              </div>
              <div className="absolute top-[50%] right-[5%] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">Nairobi</span>
              </div>
              <div className="absolute bottom-[15%] right-[20%] flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-muted-foreground">Johannesburg</span>
              </div>
            </div>
          </motion.div>

          {/* Icon strip list — not cards */}
          <div className="space-y-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 py-5 border-b border-border/50 last:border-b-0 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold mb-0.5 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuiltForAfrica;
