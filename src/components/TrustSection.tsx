import { motion } from "framer-motion";
import { ShieldCheck, Eye, UserCheck, FileCheck2 } from "lucide-react";

const features = [
  { icon: UserCheck, title: "Human-in-the-Loop", desc: "Every rescue recommendation passes through a trained human reviewer before action is taken." },
  { icon: Eye, title: "Full Auditability", desc: "Every decision, notification, and outcome is logged with timestamps and tracked through the lifecycle." },
  { icon: ShieldCheck, title: "Override Controls", desc: "Reviewers can adjust shelter selections, reject cases, or choose fallback options at any point." },
  { icon: FileCheck2, title: "Verified Outcomes", desc: "Donors confirm completion, so every rescue in our count is a real, verified food transfer." },
];

const TrustSection = () => (
  <section id="trust" className="py-24 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">Trust & Safety</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-3">AI with guardrails, not autopilot</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We believe AI should augment human judgment, not replace it. Every step of the FoodBridge pipeline is designed for accountability.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl border border-border p-7 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center mx-auto mb-5">
              <f.icon size={26} className="text-brand-green" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
