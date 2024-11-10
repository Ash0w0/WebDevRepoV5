import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const mailtoLink = "mailto:contact@webdevelopmentsolutions.in?subject=Project%20Inquiry&body=Hi%20Web%20Development%20Solutions%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20your%20team.%0A%0AProject%20Details%3A%0A-%20Company%3A%20%0A-%20Project%20Type%3A%20%0A-%20Timeline%3A%20%0A-%20Team%20Size%20Required%3A%20%0A-%20Additional%20Requirements%3A%20%0A%0ABest%20regards%2C%0AName%3A%20%0APhone%3A%20";

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      
      {/* CTA Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Team?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch to discuss your requirements and find the perfect tech professionals for your project.
            </p>
            <Button size="lg" className="group animate-shimmer" asChild>
              <a href={mailtoLink}>
                Start Hiring
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}