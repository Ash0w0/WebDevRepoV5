import { Database, Lock, Server, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BackendDevelopment() {
  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "API Development",
      description: "Robust and scalable RESTful APIs and GraphQL services"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Efficient database architecture and optimization"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Security",
      description: "Secure authentication and authorization systems"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "System Integration",
      description: "Seamless integration with third-party services and APIs"
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Backend Development Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build powerful, scalable server-side applications with our expert backend development team
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