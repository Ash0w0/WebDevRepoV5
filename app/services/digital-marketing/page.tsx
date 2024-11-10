import { Target, TrendingUp, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DigitalMarketing() {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Social Media Marketing",
      description: "Engage your audience across all social platforms"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Content Marketing",
      description: "Create compelling content that converts visitors into customers"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "PPC Campaigns",
      description: "Targeted advertising campaigns for maximum ROI"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Digital Marketing Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Boost your online presence and grow your business with our comprehensive digital marketing solutions
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
          <h2 className="text-2xl font-bold mb-8">Ready to grow your online presence?</h2>
          <Button asChild size="lg">
            <a href="mailto:contact@webdevelopmentsolutions.in">Get in Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
}