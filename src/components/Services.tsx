import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Target, BarChart3, Users, Megaphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Facebook,
      title: "Facebook Advertising",
      description: "Create compelling Facebook ad campaigns that reach your ideal customers and drive conversions.",
      features: ["Campaign Strategy", "Ad Creation", "Audience Targeting", "Performance Optimization"]
    },
    {
      icon: Instagram,
      title: "Instagram Marketing",
      description: "Leverage Instagram's visual platform to showcase your brand and connect with your audience.",
      features: ["Story Ads", "Feed Advertising", "Reels Promotion", "Influencer Collaboration"]
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Reach the right people at the right time with precision targeting and custom audiences.",
      features: ["Custom Audiences", "Lookalike Audiences", "Interest Targeting", "Behavioral Targeting"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Track your campaign performance with detailed analytics and actionable insights.",
      features: ["ROI Tracking", "Conversion Metrics", "Custom Reports", "Performance Analysis"]
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Complete social media management to maintain consistent brand presence across platforms.",
      features: ["Content Creation", "Posting Schedule", "Community Management", "Brand Monitoring"]
    },
    {
      icon: Megaphone,
      title: "Brand Awareness Campaigns",
      description: "Build brand recognition and expand your reach with strategic awareness campaigns.",
      features: ["Brand Positioning", "Reach Campaigns", "Engagement Strategies", "Brand Storytelling"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive social media advertising solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-secondary/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;