import { ArrowRight } from "lucide-react";

const CTAFooter = () => (
  <>
    {/* CTA */}
    <section className="py-24 bg-brand-deep text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
          Every meal rescued is a meal that matters
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8">
          Whether you're a restaurant with surplus food or a shelter looking to join our network, FoodBridge AI makes the connection seamless.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#donate" className="inline-flex items-center gap-2 rounded-lg bg-brand-bright text-brand-deep px-8 py-3.5 font-semibold hover:opacity-90 transition-opacity">
            Donate Now <ArrowRight size={18} />
          </a>
          <a href="mailto:hello@foodbridge.ai" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 font-semibold hover:bg-primary-foreground/10 transition-colors">
            Partner With Us
          </a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-brand-charcoal py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-heading text-lg font-bold text-primary-foreground">
              FoodBridge <span className="text-gradient-green">AI</span>
            </p>
            <p className="text-sm text-primary-foreground/50 mt-1">AI-powered food rescue for communities that need it most.</p>
          </div>
          <div className="flex gap-8 text-sm text-primary-foreground/50">
            <a href="#process" className="hover:text-primary-foreground transition-colors">How It Works</a>
            <a href="#impact" className="hover:text-primary-foreground transition-colors">Impact</a>
            <a href="#trust" className="hover:text-primary-foreground transition-colors">Trust</a>
            <a href="#donate" className="hover:text-primary-foreground transition-colors">Donate</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} FoodBridge AI. Built with purpose.
        </div>
      </div>
    </footer>
  </>
);

export default CTAFooter;
