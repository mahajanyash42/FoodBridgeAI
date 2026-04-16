const items = [
  "🥗 142 rescues completed this month",
  "🏠 28 shelters served across the city",
  "⚡ Average response time: 47 minutes",
  "🍕 3,200 lbs of food saved this quarter",
  "✅ 98% donor satisfaction rate",
  "🤖 AI-powered matching in under 30 seconds",
];

const TickerBar = () => (
  <div className="bg-brand-deep py-3 overflow-hidden">
    <div className="animate-ticker flex whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span key={i} className="text-primary-foreground/90 text-sm font-medium mx-8">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default TickerBar;
