import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Utensils, RotateCcw, Building2, Timer } from "lucide-react";

const metrics = [
  { icon: Utensils, value: 3200, suffix: " lbs", label: "Food Saved" },
  { icon: RotateCcw, value: 142, suffix: "", label: "Rescues Completed" },
  { icon: Building2, value: 28, suffix: "", label: "Shelters Served" },
  { icon: Timer, value: 47, suffix: " min", label: "Avg Response Time" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return count;
}

const MetricCard = ({ icon: Icon, value, suffix, label }: typeof metrics[0]) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const count = useCountUp(value, inView);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setInView(true), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
        <Icon size={28} className="text-brand-green" />
      </div>
      <p className="font-heading text-4xl font-bold text-foreground">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
};

const ImpactSection = () => (
  <section id="impact" className="py-24 bg-brand-deep">
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-brand-bright font-semibold text-sm tracking-widest uppercase mb-3">Our Impact</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground">Real outcomes, measured and verified</h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((m) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary-foreground/5 rounded-2xl border border-primary-foreground/10 p-8">
              <MetricCard {...m} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
