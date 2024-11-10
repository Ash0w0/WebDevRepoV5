import { Card, CardContent } from "@/components/ui/card";
import { Palette, Globe, Target } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Development",
      description: "Beautiful, intuitive interfaces with exceptional user experience"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Full-Stack Development",
      description: "End-to-end web and mobile application development"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions to grow your online presence"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold">Our Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tech solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden border-none bg-gradient-to-b from-primary/5 to-transparent hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-4">
                  <div className="text-primary">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}