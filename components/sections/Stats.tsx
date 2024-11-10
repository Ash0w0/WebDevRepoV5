export default function Stats() {
  const stats = [
    { number: "500+", label: "Developers" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "Global Clients" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}