"use client";
import { motion } from "framer-motion";

const CaseStudies = () => {
  const studies = [
    {
      title: "Fashion Brand Awareness",
      before: "5k Reach",
      after: "50k Reach",
      metrics: "+200% Engagement",
      desc: "We transformed a local fashion brand into a trending name across Instagram and TikTok."
    },
    {
      title: "Tech Startup Launch",
      before: "No Online Presence",
      after: "1M Views in 2 Weeks",
      metrics: "Explosive Launch",
      desc: "Our launch campaign generated huge buzz, helping the startup secure new investors."
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-[#0a1a2f] to-[#12294a] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-orange-400 mb-8"
        >
          Case Studies & Success Stories
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-[#112037] rounded-2xl shadow-lg hover:scale-105 transition-all border border-orange-400/20"
            >
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">{study.title}</h3>
              <p className="text-gray-300 mb-2">{study.desc}</p>
              <div className="flex justify-between text-sm text-gray-400 mt-4">
                <span>Before: {study.before}</span>
                <span>After: {study.after}</span>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-4 text-lg font-bold text-orange-400"
              >
                {study.metrics}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
