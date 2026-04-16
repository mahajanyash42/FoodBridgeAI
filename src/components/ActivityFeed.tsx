import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const activities = [
  { id: "FB-2847", status: "completed", donor: "Mario's Pizzeria", food: "24 prepared meals", time: "12 min ago" },
  { id: "FB-2846", status: "notification_sent", donor: "Green Leaf Café", food: "15 lbs mixed produce", time: "38 min ago" },
  { id: "FB-2845", status: "approved_ready_for_notification", donor: "Harbor Bakery", food: "40 bread loaves", time: "1 hr ago" },
  { id: "FB-2844", status: "completed", donor: "Sunrise Deli", food: "18 sandwich trays", time: "2 hrs ago" },
  { id: "FB-2843", status: "notification_sent", donor: "Bella Italia", food: "30 pasta servings", time: "3 hrs ago" },
  { id: "FB-2842", status: "completed", donor: "The Corner Grill", food: "22 lbs grilled chicken", time: "4 hrs ago" },
];

const statusMap: Record<string, { label: string; color: string }> = {
  approved_ready_for_notification: { label: "Approved", color: "bg-brand-amber/20 text-brand-amber" },
  notification_sent: { label: "Shelter Notified", color: "bg-brand-green/20 text-brand-green" },
  completed: { label: "Rescue Complete", color: "bg-brand-bright/20 text-brand-deep" },
};

const ActivityFeed = () => (
  <section id="activity" className="py-24 bg-background">
    <div className="max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-brand-green font-semibold text-sm tracking-widest uppercase mb-3">Live Activity</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Cases moving through the pipeline</h2>
      </motion.div>

      <div className="space-y-4">
        {activities.map((a, i) => {
          const s = statusMap[a.status];
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-4 bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
            >
              <span className="hidden sm:flex w-2 h-2 rounded-full bg-brand-bright animate-pulse-dot shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">
                  {a.donor} <span className="text-muted-foreground font-normal">— {a.food}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{a.id}</p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${s.color}`}>
                {s.label}
              </span>
              <span className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                <Clock size={12} /> {a.time}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ActivityFeed;
