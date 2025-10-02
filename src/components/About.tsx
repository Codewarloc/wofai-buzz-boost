"use client";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, TrendingUp, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Counter = ({ target, duration = 2, trigger }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = parseInt(target.replace(/\D/g, "")); // strip non-numbers
    if (isNaN(end)) {
      setCount(target);
      return;
    }

    const increment = end / (duration * 60); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return (
    <span>
      {isNaN(parseInt(target))
        ? target
        : count + (target.includes("%") ? "%" : "+")}
    </span>
  );
};

const About = () => {
  const stats = [
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: TrendingUp, number: "500%", label: "Average ROI" },
    { icon: Award, number: "50+", label: "Successful Campaigns" },
    { icon: Heart, number: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
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
          </div>

          {/* Right Stats */}
          <div className="space-y-6 animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const ref = useRef(null);
                const inView = useInView(ref, { once: false, amount: 0.5 });

                return (
                  <motion.div
                    ref={ref}
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <stat.icon className="h-8 w-8 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                        <div className="text-3xl font-bold text-primary mb-2">
                          <Counter target={stat.number} trigger={inView} />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Ready to Grow Your Business?
                </h3>
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
