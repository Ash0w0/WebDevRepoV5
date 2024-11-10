import { CheckCircle, Globe, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Process-driven Development",
      description: "Well-defined processes for us mean seamless project execution with the deliverables turning out exactly as expected.",
      details: [
        "Structured development methodology",
        "Clear project milestones",
        "Regular progress tracking",
        "Quality assurance at every step"
      ]
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Global Expertise with Local Focus",
      description: "We have worked with businesses from the UK, the US, Germany, Switzerland, Dubai, and beyond. Global exposure enables us to deliver solutions in tune with different market needs and cultural nuances.",
      details: [
        "International project experience",
        "Cross-cultural communication",
        "Time zone adaptability",
        "Global best practices"
      ]
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Excellence Affordably",
      description: "Our team is supported by combined development expertise of more than 1000 years, hence providing expert-level solutions at the most competitive market prices. We believe in value provision without compromising on quality.",
      details: [
        "Competitive pricing",
        "High-quality deliverables",
        "Experienced developers",
        "Cost-effective solutions"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the preferred choice for businesses worldwide
          </p>
        </div>

        <div className="grid gap-12">
          {reasons.map((reason, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-[1fr,2fr] gap-8">
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="mb-4">{reason.icon}</div>
                    <h2 className="text-2xl font-bold mb-2">{reason.title}</h2>
                  </div>
                  <div>
                    <p className="text-lg mb-6 text-muted-foreground">
                      {reason.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {reason.details.map((detail, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}