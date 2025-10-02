"use client";
import { motion } from "framer-motion";
import SilverPackage from "@/components/Silverpackages";
import PlatinumPackage from "@/components/Platinumpackages";
import GoldPackage from "@/components/Goldpackage";
import DiamondPackage from "@/components/Diamondpackage";
import AddRate from "@/components/AddRate";

const Packages = () => {
  return (
    <section
      id="packages"
      className="py-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-yellow-900 mb-12"
        >
          Our Packages
        </motion.h1>

        {/* Packages Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            <SilverPackage />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            <PlatinumPackage />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="bg-gradient-to-br from-yellow-200 via-yellow-100 to-white border-2 border-yellow-400 rounded-2xl shadow-xl p-6 hover:-translate-y-3 hover:shadow-2xl transition-all relative"
          >
            {/* Highlight Badge for Gold */}
            <span className="absolute top-4 right-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md animate-pulse">
              Recommended
            </span>
            <GoldPackage />
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-xl transition-all"
          >
            <DiamondPackage />
          </motion.div>
        </motion.div>

        {/* AddRate Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <AddRate />
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
