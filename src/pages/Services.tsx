import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  Wrench,
  Battery,
  LineChart,
  Sun,
  Zap,
  Power,
  Droplets,
} from "lucide-react";
import installationImage from "@/assets/installation.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Solar Installation",
      description:
        "Complete solar panel systems designed for your home. From consultation to installation and maintenance.",
    },
    {
      icon: Building2,
      title: "Commercial Solar Solutions",
      description:
        "Large-scale solar installations for businesses and organizations. Reduce operational costs significantly.",
    },
    {
      icon: Wrench,
      title: "System Maintenance",
      description:
        "Regular maintenance and inspection services to keep your solar system running at peak efficiency.",
    },
    {
      icon: Battery,
      title: "Battery Storage Systems",
      description:
        "Energy storage solutions for backup power and maximizing your solar investment.",
    },
    {
      icon: LineChart,
      title: "Energy Monitoring",
      description:
        "Advanced monitoring systems to track your energy production and consumption in real-time.",
    },
    {
      icon: Sun,
      title: "System Upgrades",
      description:
        "Upgrade your existing solar system with the latest technology and improved efficiency.",
    },
    {
      icon: Zap,
      title: "On Grid Inverter / Hybrid Inverter",
      description:
        "Advanced inverter solutions for grid-tied and hybrid solar systems with seamless power management.",
    },
    {
      icon: Power,
      title: "Off Grid Inverter / On-line UPS",
      description:
        "Reliable off-grid inverter and UPS systems for uninterrupted power supply in remote locations.",
    },
    {
      icon: Droplets,
      title: "Agriculture Solar Pump System",
      description:
        "Sustainable solar-powered pumping solutions for agricultural irrigation and water management.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive solar energy solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Installation Process</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Free Consultation</h3>
                    <p className="text-muted-foreground">
                      We assess your property and energy needs to design the
                      perfect system
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Custom Design</h3>
                    <p className="text-muted-foreground">
                      Our engineers create a customized solar solution optimized
                      for your location
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      Professional Installation
                    </h3>
                    <p className="text-muted-foreground">
                      Certified technicians install your system with precision
                      and care
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ongoing Support</h3>
                    <p className="text-muted-foreground">
                      We provide monitoring, maintenance, and support for the
                      life of your system
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link to="/contact">Start Your Solar Journey</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={installationImage}
                alt="Professional solar installation"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Every project is unique. Contact us to discuss your specific
              requirements and get a tailored quote.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
