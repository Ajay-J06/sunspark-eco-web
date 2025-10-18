import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import solarPanelImage from "@/assets/solar-panel.jpg";

const Products = () => {
  const products = [
    {
      name: "EPC Solar End to End",
      efficiency: "Complete Solution",
      warranty: "25 Years",
      power: "Customized",
      features: [
        "Engineering, Procurement & Construction",
        "Full project management",
        "Turnkey solar installation",
        "End-to-end implementation",
      ],
      badge: "Complete EPC Solution",
    },
    {
      name: "Premium Solar Panel Series",
      efficiency: "22.5%",
      warranty: "25 Years",
      power: "400W - 550W",
      features: [
        "High-efficiency monocrystalline cells",
        "Advanced anti-reflective coating",
        "Weather-resistant design",
        "Outstanding low-light performance",
      ],
      badge: "Most Popular",
    },
    {
      name: "Commercial Solar Panels",
      efficiency: "21.8%",
      warranty: "25 Years",
      power: "500W - 600W",
      features: [
        "Industrial-grade durability",
        "Optimized for large installations",
        "Enhanced heat dissipation",
        "High wind and snow load rating",
      ],
      badge: "Best for Business",
    },
    {
      name: "Residential Solar Bundle",
      efficiency: "21.2%",
      warranty: "25 Years",
      power: "350W - 450W",
      features: [
        "Complete home solution",
        "Includes inverter and mounting",
        "Smart monitoring system",
        "Professional installation included",
      ],
      badge: "Complete Package",
    },
  ];

  const accessories = [
    {
      title: "Smart Inverters",
      description:
        "High-efficiency inverters with real-time monitoring and grid management",
    },
    {
      title: "Battery Storage",
      description:
        "Store excess energy for use during peak hours or power outages",
    },
    {
      title: "Mounting Systems",
      description:
        "Durable, weather-resistant mounting solutions for any roof type",
    },
    {
      title: "Monitoring Equipment",
      description:
        "Track your energy production and consumption with smart monitoring",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">Our Products</h1>
            <p className="text-lg text-muted-foreground">
              Industry-leading solar panels and accessories for residential and
              commercial applications
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="container px-4">
          <img
            src={solarPanelImage}
            alt="Solar panel product"
            className="rounded-2xl shadow-strong w-full max-w-4xl mx-auto"
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Solar Panel Systems
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {products.map((product, index) => (
              <Card
                key={index}
                className="relative hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                {product.badge && (
                  <Badge className="absolute -top-3 left-6 bg-primary">
                    {product.badge}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <div className="flex gap-4 text-sm pt-4">
                    <div>
                      <p className="text-muted-foreground">Efficiency</p>
                      <p className="font-semibold text-primary">
                        {product.efficiency}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Power Range</p>
                      <p className="font-semibold">{product.power}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Warranty</p>
                      <p className="font-semibold">{product.warranty}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Accessories & Add-ons
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {accessories.map((accessory, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{accessory.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {accessory.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Our Products?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">
                  Premium Quality Materials
                </h3>
                <p className="text-muted-foreground">
                  All our panels use Grade-A monocrystalline silicon cells for
                  maximum efficiency and longevity.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Industry Certifications</h3>
                <p className="text-muted-foreground">
                  IEC, UL, and TÜV certified products meeting the highest
                  international standards.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Long-term Performance</h3>
                <p className="text-muted-foreground">
                  Our panels maintain over 84% efficiency even after 25 years of
                  operation.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Comprehensive Warranty</h3>
                <p className="text-muted-foreground">
                  25-year product warranty and performance guarantee backed by
                  our commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a personalized quote and product recommendations
            for your property.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
