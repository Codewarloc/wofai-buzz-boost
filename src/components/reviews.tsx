"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "CHUDDY PROPERTIES",
    role: "Marketing Manager",
    review:
      "I have many clients Am waiting once the adds stop now Then i will start calling for site inspection",
  },
  {
    name: "AMA BEAUTY CARE",
    role: "Startup Founder",
    review:
      "God afternoon sis i want to share your number to something They just they like my add and voice over",
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    review:
      "I made sales through your add settings You are good ohh!",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-foreground"
        >
          What Our Clients Say
        </motion.h2>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background shadow-lg rounded-2xl p-6 border border-border"
            >
              <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
              <div className="font-semibold text-primary">{review.name}</div>
              <div className="text-sm text-muted-foreground">{review.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
