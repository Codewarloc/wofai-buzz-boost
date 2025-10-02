"use client";
import { motion } from "framer-motion";
import clientsData from "@/data/logo.json";

const Clients = () => {
  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-[#0a1a2f] to-[#12294a] text-center text-white"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-orange-400 mb-6"
      >
        Our Clients
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
      >
        Trusted by leading brands and businesses worldwide.  
        Here are some of our amazing partners.
      </motion.p>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 max-w-6xl mx-auto px-6">
        {clientsData.clients.map((client, i) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_12px_#f59e0b]"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
