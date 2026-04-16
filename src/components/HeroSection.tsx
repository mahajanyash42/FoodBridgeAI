import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Truck } from "lucide-react";
import heroImg from "@/assets/hero-food-rescue.jpg";

const liveCard = {
  id: "FB-2847",
  status: "Shelter Notified",
  donor: "Mario's Pizzeria",
  shelter: "Sunrise Community Center",
  food: "24 prepared meals",
};

const HeroSection = () => (
  <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0 -z-10">
      <img src={heroImg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-deep/95 via-brand-deep/85 to-brand-deep/60" />
    </div>

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
      {/* Left copy */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="text-brand-bright font-semibold text-sm tracking-widest uppercase mb-4">AI-Powered Food Rescue</p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-primary-foreground mb-6">
          Surplus food,<br />
          <span className="text-gradient-green">rescued in minutes.</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg max-w-lg mb-8 leading-relaxed">
          FoodBridge AI connects restaurants with surplus food to nearby shelters — automatically structured, reviewed by humans, and delivered with care.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#donate" className="inline-flex items-center gap-2 rounded-lg bg-brand-bright text-brand-deep px-6 py-3 font-semibold hover:opacity-90 transition-opacity">
            Donate Surplus Food <ArrowRight size={18} />
          </a>
          <a href="#process" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 text-primary-foreground px-6 py-3 font-semibold hover:bg-primary-foreground/10 transition-colors">
            See How It Works
          </a>
        </div>
      </motion.div>

      {/* Right live card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="hidden lg:block"
      >
        <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 max-w-sm ml-auto border border-border">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-bright animate-pulse-dot" />
            <span className="text-xs font-semibold text-brand-green uppercase tracking-wider">Live Rescue</span>
          </div>
          <p className="font-heading text-lg font-bold text-foreground mb-1">Case {liveCard.id}</p>
          <p className="text-sm text-muted-foreground mb-4">{liveCard.food}</p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <CheckCircle2 size={16} className="text-brand-green shrink-0" />
              <span className="text-foreground">{liveCard.donor}</span>
              <span className="ml-auto text-xs text-muted-foreground">Donor</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Truck size={16} className="text-brand-amber shrink-0" />
              <span className="text-foreground">{liveCard.shelter}</span>
              <span className="ml-auto text-xs text-muted-foreground">Shelter</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock size={16} className="text-brand-green shrink-0" />
              <span className="text-foreground font-medium">{liveCard.status}</span>
              <span className="ml-auto text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">Active</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
