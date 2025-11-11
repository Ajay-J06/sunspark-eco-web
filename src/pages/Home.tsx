import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, TrendingDown, BadgeIndianRupee, Home as HomeIcon, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import backgroundPattern from "@/assets/background-pattern.jpg";
const Home = () => {
  const benefits = [{
    icon: Zap,
    title: "Clean Energy",
    description: "Harness the power of the sun for sustainable electricity"
  }, {
    icon: TrendingDown,
    title: "Lower Bills",
    description: "Reduce your monthly energy costs significantly"
  }, {
    icon: Shield,
    title: "Reliable Power",
    description: "Energy independence with backup solutions"
  }];
  return <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted to-background">
        <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url(${backgroundPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
        <div className="container px-4 py-20 md:py-32 relative z-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Power Your Future with{" "}
                <span className="text-primary">
SSR 
SOLAR ENERGY
              </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Join thousands of homeowners making the switch to sustainable,
                cost-effective solar power. Quality installations backed by
                industry-leading certifications.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/products">View Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img src={heroImage} alt="Solar panels on residential roof" className="rounded-2xl shadow-strong w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Solar?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of switching to clean, renewable energy
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => <Card key={index} className="border-2 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 pb-8 text-center">
                  <benefit.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">
              Trusted by Thousands of Homeowners
            </h2>
            <p className="text-lg text-muted-foreground">
              With over 10 years of experience and industry-leading
              certifications, we deliver quality solar solutions that last.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Certified Installers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">25-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">5000+ Installations</span>
              </div>
            </div>
            <Button size="lg" className="mt-8" asChild>
              <Link to="/certifications">View Our Certifications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solar Subsidy Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Government Solar Subsidies (2025)
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take advantage of government incentives and reduce your solar installation costs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* PM Surya Ghar Subsidy */}
            <Card className="border-2 hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <BadgeIndianRupee className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">
                  PM Surya Ghar: Muft Bijli Yojana
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Residential Rooftop Solar
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>₹30,000 per kW (first 2 kW)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>₹18,000 per kW (3rd kW)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Total subsidy up to ₹78,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Direct bank transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>MNRE-approved systems only</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* MNRE Rooftop Solar Subsidy */}
            <Card className="border-2 hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <HomeIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">
                  MNRE Rooftop Solar Subsidy
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  General Residential Scheme
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>40% subsidy for up to 3 kW</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>20% subsidy for 3-10 kW</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>For residential homes only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Applies to housing societies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PM KUSUM Yojana */}
            <Card className="border-2 hover:shadow-soft transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <Sprout className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-3">
                  PM KUSUM Yojana
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For Farmers & Agriculture
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Up to 60% subsidy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>30% loan facility available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>10% farmer contribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Solar water pumps (3HP-10HP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ground-mounted solar plants</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/contact">Check Your Eligibility</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation and quote today. Our experts will help you
            design the perfect solar system for your needs.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;