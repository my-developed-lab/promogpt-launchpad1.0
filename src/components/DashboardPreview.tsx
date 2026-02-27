import { motion } from "framer-motion";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const chartData = [
  { name: "Week 1", engagement: 1200, conversions: 180, sales: 4200 },
  { name: "Week 2", engagement: 1800, conversions: 240, sales: 5800 },
  { name: "Week 3", engagement: 2400, conversions: 310, sales: 7200 },
  { name: "Week 4", engagement: 3100, conversions: 420, sales: 9400 },
  { name: "Week 5", engagement: 3800, conversions: 510, sales: 11800 },
  { name: "Week 6", engagement: 4600, conversions: 620, sales: 14200 },
  { name: "Week 7", engagement: 5200, conversions: 710, sales: 16800 },
  { name: "Week 8", engagement: 6100, conversions: 840, sales: 19500 },
];

const kpis = [
  { label: "Engagement", value: "6,100", change: "+24%", color: "text-primary" },
  { label: "Conversions", value: "840", change: "+18%", color: "text-accent" },
  { label: "Sales", value: "$19,500", change: "+31%", color: "text-gold" },
];

const funnelSteps = [
  { label: "Impressions", value: "42K", width: "100%" },
  { label: "Engagement", value: "6.1K", width: "72%" },
  { label: "Interactions", value: "2.4K", width: "45%" },
  { label: "Sales", value: "840", width: "22%" },
];

const DashboardPreview = () => {
  const [hoveredKpi, setHoveredKpi] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Interactive <span className="gold-gradient-text">Dashboard Preview</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a glimpse of how PromoGPT tracks your marketing performance in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto"
        >
          {/* KPI cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="relative bg-secondary/50 rounded-xl p-4 cursor-default"
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHoveredKpi(i)}
                onHoverEnd={() => setHoveredKpi(null)}
              >
                <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
                <p className={`text-2xl font-bold font-heading ${kpi.color}`}>{kpi.value}</p>
                <span className="text-xs font-medium text-green-600">{kpi.change} this week</span>

                {hoveredKpi === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10"
                  >
                    Increased {kpi.change} this week
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45 -mt-1" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Chart */}
          <div className="h-64 sm:h-72 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(205, 85%, 55%)" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="hsl(205, 85%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 25%, 90%)" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(215, 15%, 50%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 15%, 50%)" />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid hsl(210, 25%, 90%)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                />
                <Area type="monotone" dataKey="sales" stroke="hsl(205, 85%, 55%)" fillOpacity={1} fill="url(#colorSales)" strokeWidth={2} />
                <Line type="monotone" dataKey="conversions" stroke="hsl(42, 90%, 55%)" strokeWidth={2} dot={{ fill: "hsl(42, 90%, 55%)", r: 3 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Funnel */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-muted-foreground mb-3">Engagement → Sales Funnel</p>
            {funnelSteps.map((step) => (
              <div key={step.label} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-24 text-right">{step.label}</span>
                <div className="flex-1 bg-secondary/50 rounded-full h-6 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: step.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full gold-gradient flex items-center justify-end pr-3"
                  >
                    <span className="text-xs font-semibold text-foreground">{step.value}</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
