import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To accelerate the world's transition to sustainable energy by making solar power accessible, affordable, and reliable for everyone.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously invest in cutting-edge solar technology and installation methods to deliver the best solutions to our customers.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We're committed to providing exceptional service from consultation to installation and beyond.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our certified professionals bring decades of combined experience in solar energy systems and renewable technology.",
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description:
        "SSR Solar was established with a vision to bring clean energy to communities.",
    },
    {
      year: "2016",
      title: "1000 Installations",
      description:
        "Reached our first major milestone of 1000 successful solar installations.",
    },
    {
      year: "2019",
      title: "Commercial Expansion",
      description:
        "Expanded our services to include large-scale commercial solar projects.",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "Received multiple awards for excellence in solar installation and customer service.",
    },
    {
      year: "2025",
      title: "5000+ Projects",
      description:
        "Proud to have completed over 5000 installations, powering communities sustainably.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted to-background py-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl">About SSR Solar</h1>
            <p className="text-lg text-muted-foreground">
              Leading the solar revolution with quality installations and
              exceptional service since 2014
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              SSR Solar was born from a simple belief: everyone deserves access
              to clean, affordable energy. What started as a small team of
              passionate engineers has grown into a leading solar installation
              company serving thousands of satisfied customers.
            </p>
            <p className="text-lg text-muted-foreground">
              Over the past decade, we've installed solar systems on homes,
              businesses, and institutions, helping our community reduce their
              carbon footprint while saving on energy costs. Our commitment to
              quality, innovation, and customer satisfaction has made us a
              trusted name in renewable energy.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we continue to push the boundaries of what's possible in
              solar energy, investing in the latest technology and training to
              ensure every installation exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8 pb-8">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.year}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Our success is built on the expertise and dedication of our
              certified professionals. Every team member is committed to
              delivering exceptional results and outstanding customer service.
            </p>
            <div className="grid gap-6 md:grid-cols-3 pt-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">50+</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified Installers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">100+</h3>
                  <p className="text-sm text-muted-foreground">
                    Years Combined Experience
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <Lightbulb className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">24/7</h3>
                  <p className="text-sm text-muted-foreground">
                    Customer Support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Solar Revolution</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Become part of our growing community of satisfied customers who are
            making a positive impact on the environment while saving money.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
