import { motion } from "framer-motion";
import { ClipboardList, Brain, UserCheck, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Donor Submits",
    description: "A restaurant or donor lists their surplus food in seconds through a simple form.",
  },
  {
    icon: Brain,
    title: "AI Structures & Matches",
    description: "Our AI normalizes the data and recommends the best shelter based on need, distance, and capacity.",
  },
  {
    icon: UserCheck,
    title: "Human Reviews",
    description: "A trained reviewer approves or adjusts the recommendation — ensuring safety and accuracy.",
  },
  {
    icon: PackageCheck,
    title: "Rescue Complete",
    description: "Both parties are notified, the handoff happens, and the donor confirms completion.",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">How It Works</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Four steps from surplus to served</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow group"
          >
            <span className="absolute top-4 right-4 text-5xl font-heading font-bold text-muted/60">{i + 1}</span>
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-brand-green/20 transition-colors">
              <step.icon size={24} className="text-brand-green" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
