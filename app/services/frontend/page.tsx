import { Code, Laptop, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FrontendDevelopment() {
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Modern Web Technologies",
      description: "Expert development using React, Vue.js, Angular, and other modern frameworks"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Excellence",
      description: "Beautiful, intuitive interfaces that enhance user experience"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Fast-loading, optimized applications for better user engagement"
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Seamless experience across all devices and screen sizes"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frontend Development Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create stunning, high-performance web applications with our expert frontend development team
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-8">Ready to start your project?</h2>
          <Button asChild size="lg">
            <a href="mailto:contact@webdevelopmentsolutions.in">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
}