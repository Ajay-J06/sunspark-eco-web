import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      name: "NABCEP Certified",
      category: "Installation Excellence",
      description:
        "North American Board of Certified Energy Practitioners certification, the gold standard for solar installation professionals.",
      year: "2015",
    },
    {
      icon: Shield,
      name: "ISO 9001:2015",
      category: "Quality Management",
      description:
        "International standard for quality management systems, ensuring consistent, high-quality service delivery.",
      year: "2016",
    },
    {
      icon: Star,
      name: "IEC Certification",
      category: "Product Standards",
      description:
        "International Electrotechnical Commission standards for solar panel quality, safety, and performance.",
      year: "2014",
    },
    {
      icon: Award,
      name: "UL Certified",
      category: "Safety Standards",
      description:
        "Underwriters Laboratories certification ensuring all products meet rigorous safety requirements.",
      year: "2015",
    },
    {
      icon: Shield,
      name: "TÜV Rheinland",
      category: "Product Quality",
      description:
        "Global certification for solar products, validating quality, safety, and performance standards.",
      year: "2016",
    },
    {
      icon: Star,
      name: "OSHA Certified",
      category: "Workplace Safety",
      description:
        "Occupational Safety and Health Administration certification for safe installation practices.",
      year: "2017",
    },
  ];

  const achievements = [
    {
      title: "5000+ Installations",
      description: "Successfully completed projects",
    },
    {
      title: "98% Satisfaction",
      description: "Customer satisfaction rate",
    },
    {
      title: "10+ Years",
      description: "Industry experience",
    },
    {
      title: "Zero Accidents",
      description: "Perfect safety record",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge className="mb-4">Certified Excellence</Badge>
            <h1 className="text-4xl font-bold md:text-5xl">
              Our Certifications
            </h1>
            <p className="text-lg text-muted-foreground">
              Industry-leading certifications and accreditations that demonstrate
              our commitment to quality, safety, and professionalism
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <cert.icon className="h-12 w-12 text-primary" />
                    <Badge variant="secondary">{cert.year}</Badge>
                  </div>
                  <CardTitle className="text-xl">{cert.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">
                    {cert.category}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Track Record
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center space-y-2 p-6 rounded-lg bg-background"
              >
                <p className="text-4xl font-bold text-primary">
                  {achievement.title}
                </p>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Commitment to Excellence
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Continuous Training
                  </h3>
                  <p className="text-muted-foreground">
                    Our team undergoes regular training to stay updated with the
                    latest solar technology, safety protocols, and industry best
                    practices.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-muted-foreground">
                    Every installation undergoes rigorous quality checks and
                    testing to ensure optimal performance and compliance with all
                    standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Safety First
                  </h3>
                  <p className="text-muted-foreground">
                    We maintain the highest safety standards on every job site,
                    protecting our team, your property, and your investment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Warranty Protection
                  </h3>
                  <p className="text-muted-foreground">
                    All our certifications enable us to offer comprehensive
                    warranties on both products and installation workmanship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Why Certifications Matter
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our certifications aren't just badges—they're your guarantee of
            professional service, quality products, and safe installations that
            stand the test of time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
