import { motion } from "framer-motion";
import { Cpu, Database, GitBranch, Shield } from "lucide-react";

const layers = [
  { icon: Database, title: "Input Layer", desc: "Captures and normalizes donor submissions from web forms into structured data." },
  { icon: Cpu, title: "Decision Layer", desc: "AI structures the case, shortlists candidate shelters, and generates a recommendation." },
  { icon: Shield, title: "Approval Layer", desc: "A human reviewer approves, adjusts, or rejects — the safety gate before action." },
  { icon: GitBranch, title: "Action & Outcome", desc: "Notifications are sent to both parties. The donor confirms completion for verified impact." },
];

const AIEngineSection = () => (
  <section id="engine" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">Under the Hood</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">A system that understands, decides, acts, and learns</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            FoodBridge AI isn't just a form. It's a full orchestration engine — from intake through AI-powered matching to human-approved delivery and verified outcomes.
          </p>
          <div className="space-y-5">
            {layers.map((l, i) => (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <l.icon size={20} className="text-brand-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{l.title}</h3>
                  <p className="text-sm text-muted-foreground">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <div className="bg-brand-deep rounded-2xl p-8 shadow-2xl">
            <div className="space-y-4">
              {["Donor Form → Workflow 1", "AI Structuring + Shelter Match", "Human Review via Slack", "Dual Email Notification", "Donor Confirms Completion"].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-bright text-xs font-bold">{i + 1}</div>
                  <div className="flex-1 bg-primary-foreground/5 rounded-lg px-4 py-2.5 text-primary-foreground text-sm border border-primary-foreground/10">
                    {step}
                  </div>
                  {i < 4 && <div className="w-px h-6 bg-brand-green/30 absolute" />}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-primary-foreground/10 flex items-center gap-2 text-xs text-primary-foreground/60">
              <span className="w-2 h-2 rounded-full bg-brand-bright animate-pulse-dot" />
              System operational — all workflows active
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AIEngineSection;
