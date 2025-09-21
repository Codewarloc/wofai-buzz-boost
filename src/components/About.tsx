import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: TrendingUp, number: "500%", label: "Average ROI" },
    { icon: Award, number: "50+", label: "Successful Campaigns" },
    { icon: Heart, number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Wofai
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hi, I'm Wofai, the founder of Wofai Advertisement Agency. With years of experience in digital marketing, 
              I specialize in helping businesses grow through strategic Facebook and Instagram advertising.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My passion lies in understanding each client's unique needs and creating customized advertising solutions 
              that deliver real results. I believe in the power of data-driven marketing combined with creative storytelling 
              to build meaningful connections between brands and their audiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Personalized Approach</h4>
                  <p className="text-muted-foreground">Every campaign is tailored to your specific business goals and target audience.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Data-Driven Results</h4>
                  <p className="text-muted-foreground">I use analytics and testing to optimize campaigns for maximum ROI.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Ongoing Support</h4>
                  <p className="text-muted-foreground">Continuous monitoring and optimization to ensure long-term success.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">Ready to Grow Your Business?</h3>
                <p className="text-muted-foreground">
                  Let's work together to create advertising campaigns that drive real results for your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;