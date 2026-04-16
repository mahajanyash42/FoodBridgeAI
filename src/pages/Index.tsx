import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerBar from "@/components/TickerBar";
import ProcessSection from "@/components/ProcessSection";
import ImpactSection from "@/components/ImpactSection";
import ActivityFeed from "@/components/ActivityFeed";
import DonationForm from "@/components/DonationForm";
import AIEngineSection from "@/components/AIEngineSection";
import TrustSection from "@/components/TrustSection";
import CTAFooter from "@/components/CTAFooter";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TickerBar />
    <ProcessSection />
    <ImpactSection />
    <ActivityFeed />
    <DonationForm />
    <AIEngineSection />
    <TrustSection />
    <CTAFooter />
  </div>
);

export default Index;
