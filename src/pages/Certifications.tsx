import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, Star, FileText, Building2 } from "lucide-react";
import solarInstallationCert from "@/assets/certificate-msme.jpg";
import udyamCert from "@/assets/certificate-udyam.jpg";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      name: "MSME-CFTI Solar Power Installation",
      category: "Government Certified Training",
      description:
        "Official certification from Government of India's MSME Technology Development Centre, Chennai. This prestigious certification validates our expertise in solar power installation as recognized by the Ministry of Micro, Small and Medium Enterprises.",
      year: "2025",
      featured: true,
      image: solarInstallationCert,
    },
    {
      icon: Building2,
      name: "UDYAM Registration Certificate",
      category: "MSME Government Registration",
      description:
        "Official MSME registration (UDYAM-TN-02-0343592) from the Ministry of Micro, Small and Medium Enterprises, Government of India. This certificate validates SSR Solar Energy as a registered Micro Enterprise, providing legal recognition and enabling access to government schemes and benefits.",
      year: "2024",
      featured: true,
      image: udyamCert,
      registrationNumber: "UDYAM-TN-02-0343592",
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

      {/* Featured Government Certifications */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <Badge className="mb-6">Government Certified</Badge>
              <h2 className="text-3xl font-bold mb-4">
                Official Government Recognition
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                SSR Solar Energy is officially recognized and certified by the Government of India, 
                demonstrating our commitment to excellence and regulatory compliance.
              </p>
            </div>

            {/* UDYAM Registration Certificate */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-10 w-10 text-primary" />
                      <div>
                        <h3 className="text-2xl font-bold">UDYAM Registration</h3>
                        <Badge variant="secondary" className="mt-1">2024</Badge>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-primary">
                      MSME Government Registration
                    </p>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-sm font-mono text-muted-foreground">
                        Registration No: <span className="font-bold text-foreground">UDYAM-TN-02-0343592</span>
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Official MSME registration from the Ministry of Micro, Small and Medium Enterprises, 
                      Government of India. This certificate validates SSR Solar Energy as a registered Micro Enterprise, 
                      providing legal recognition and credibility.
                    </p>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold mb-2">Key Benefits:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Legal recognition as a registered enterprise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Access to government schemes and subsidies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Enhanced business credibility and trust</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Priority in government tenders</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={udyamCert} 
                      alt="UDYAM Registration Certificate - SSR Solar Energy" 
                      className="w-full h-auto rounded-lg shadow-md border-2 border-primary/10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MSME-CFTI Certificate */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Award className="h-10 w-10 text-primary" />
                      <div>
                        <h3 className="text-2xl font-bold">MSME-CFTI Certified</h3>
                        <Badge variant="secondary" className="mt-1">2025</Badge>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-primary">
                      Solar Power Installation Specialist
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Officially certified by the Government of India&apos;s MSME Technology Development Centre, Chennai (CFTI). 
                      This certification is issued by the Ministry of Micro, Small and Medium Enterprises, validating our 
                      team&apos;s expertise and commitment to excellence in solar power installation.
                    </p>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold mb-2">Why This Matters:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Government-backed training and certification</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Compliance with national installation standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>Recognized by industry authorities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative">
                    <img 
                      src={solarInstallationCert} 
                      alt="MSME-CFTI Solar Power Installation Certificate" 
                      className="w-full h-auto rounded-lg shadow-md border-2 border-primary/10"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Certifications Grid */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Additional Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {certifications.filter(cert => !cert.featured).map((cert, index) => (
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
