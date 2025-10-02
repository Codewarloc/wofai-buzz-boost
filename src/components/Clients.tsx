"use client";
import { motion } from "framer-motion";

const Clients = () => {
  const logos = [
    "/logos/client1.png",
    "/logos/client2.png",
    "/logos/client3.png",
    "/logos/client4.png"
  ];

  return (
    <section id="clients" className="py-20 bg-[#0a1a2f] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-orange-400 mb-10"
      >
        Our Clients
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {logos.map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt={`Client ${i + 1}`}
            className="h-16 mx-auto grayscale hover:grayscale-0 transition-all hover:scale-110 hover:drop-shadow-[0_0_10px_#f59e0b]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
