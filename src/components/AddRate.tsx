"use client";
import { motion } from "framer-motion";

const packages = [
  { name: "A day", price: "₦5,500", desc: "Quick boost for a single day" },
  {
    name: "Foreign Audience Starter Pack (1 week)",
    price: "₦75,000",
    desc: "Reach new international audiences",
  },
  {
    name: "Silver Package (1 week)",
    price: "₦100,000",
    desc: "Solid performance with great ROI",
  },
  {
    name: "Platinum Package (1 week)",
    price: "₦150,000",
    desc: "Premium exposure with higher reach",
  },
  {
    name: "Gold Package (1 week)",
    price: "₦200,000",
    desc: "Top-tier performance and visibility",
    highlight: true,
  },
];

const AddRate = () => {
  return (
    <section
      className="py-16 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-gray-950 dark:to-gray-900"
      id="rates"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-yellow-900 dark:text-yellow-400 mb-12"
        >
          Our Ad Rates
        </motion.h2>

        {/* Grid of Packages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl shadow-lg border transition-all cursor-pointer 
                ${
                  pkg.highlight
                    ? "bg-gradient-to-br from-yellow-200 via-yellow-100 to-white dark:from-yellow-900 dark:via-yellow-800 dark:to-gray-900 border-yellow-400 shadow-xl hover:shadow-2xl hover:-translate-y-3"
                    : "bg-white dark:bg-gray-800 border-yellow-200 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2"
                }`}
            >
              {/* Highlight Badge */}
              {pkg.highlight && (
                <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
                  Recommended
                </span>
              )}

              <h3
                className={`text-xl font-semibold mb-2 ${
                  pkg.highlight
                    ? "text-yellow-900 dark:text-yellow-300"
                    : "text-yellow-800 dark:text-yellow-400"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-2xl font-bold mb-4 ${
                  pkg.highlight
                    ? "text-yellow-700 dark:text-yellow-200"
                    : "text-yellow-600 dark:text-yellow-300"
                }`}
              >
                {pkg.price}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {pkg.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddRate;
